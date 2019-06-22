import axios, { AxiosInstance } from "axios";
import { localStorageTokenKey } from "./constants";
import * as ApiEndpoints from "../constants";

const singleton = Symbol();
const singletonEnforcer = Symbol();

class AuthApiService {
  private session: AxiosInstance;

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error("Cannot construct singleton");
    }

    this.session = axios.create({
      baseURL: ApiEndpoints.baseUrl
    });
  }

  static get instance(): AuthApiService {
    // Try to get an efficient singleton
    if (!this[singleton]) {
      this[singleton] = new AuthApiService(singletonEnforcer);
    }

    return this[singleton];
  }

  login = async (username: string, password: string) => {
    const body = {
      email: username,
      password: password
    };

    await this.requestToken(body);
  };

  clearAuthData = () => {
    localStorage.removeItem(localStorageTokenKey);
  };

  getToken() {
    return localStorage.getItem(localStorageTokenKey);
  }

  setToken(token: string) {
    localStorage.setItem(localStorageTokenKey, token);
  }

  public async pingAuth(): Promise<boolean> {
    const currentToken = this.getToken();

    if (currentToken && currentToken !== "") {
      const tokenData = await this.session.post<{
        success: boolean;
      }>(ApiEndpoints.authenticationCheckPing, null, {
        headers: { Authorization: `Bearer ${currentToken}` }
      });

      return tokenData.data.success;
    }
    this.clearAuthData();
    return false;
  }

  private async requestToken(body: any) {
    const tokenData = await this.session.post<{
      accessToken: string;
    }>(ApiEndpoints.authentication, body);

    this.setToken(tokenData.data.accessToken);
  }
}

export default AuthApiService.instance;
