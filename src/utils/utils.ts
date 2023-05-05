export class MenuClass {
  constructor(public name: string, public icon: string, public slug: string) {
    this.name = name;
    this.icon = icon;
    this.slug = slug;
  }
}

export class CardClass {
  constructor(
    public icon: string,
    public title: string,
    public value: string | number
  ) {
    this.icon = icon;
    this.title = title;
    this.value = value;
  }
}

export class SelectClass {
  constructor(
    public key: string | number,
    public value: string,
    public text: string
  ) {
    this.key = key;
    this.value = value;
    this.text = text;
  }
}

export const tooglePasswordType = (
  passwordType: string,
  setPasswordType: Function
) => {
  if (passwordType === "password") {
    setPasswordType("text");
  } else {
    setPasswordType("password");
  }
};
