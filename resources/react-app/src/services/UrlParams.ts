import { parse, ParsedUrlQuery } from 'querystring';

export class UrlParams {
  private static params: ParsedUrlQuery;

  public static get(param: string) {
    const params = this.getParams();

    return params[param];
  }

  public static getParams() {
    if (!this.params) {
      this.params = parse(window.location.search.slice(1));
    }

    return this.params;
  }
}
