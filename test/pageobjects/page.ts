import { browser } from "@wdio/globals";

export default class Page {
  public open() {
    return browser.url(
      "https://calculator-app-mahi-gaming-interview.vercel.app/?_vercel_share=K24lAcYrl8rnc3uIUItfoA3VSCe9vdOt",
    );
  }
}
