export class Cookies {
  private static cookies: Record<string, string>;

  public static get(cookie: string) {
    const cookies = this.getCookies();

    return cookies[cookie];
  }

  public static getCookies() {
    if (!this.cookies) {
      this.cookies = document.cookie
        .split('; ')
        .reduce<Record<string, string>>((acc, cookie) => {
          const [key, val] = cookie.split('=');
          return {
            ...acc,
            [key]: val,
          };
        }, {});
    }

    return this.cookies;
  }
}
