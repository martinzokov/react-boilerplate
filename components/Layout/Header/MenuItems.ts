export default class MenuItem {
  id: string;
  label: string;
  path: string;
  constructor(id: string, label: string, path: string) {
    this.id = id;
    this.label = label;
    this.path = path;
  }
}
