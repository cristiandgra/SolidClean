(() => {
  // No aplicando el principio de responsabilidad única.
  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.birthDate = birthDate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;
    constructor({ email, role, name, gender, birthDate }: UserProps) {
      super({ name, gender, birthDate });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      birthDate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthDate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date("1985-10-21"),
    email: "fer@google.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Ferny",
    role: "admin",
    workingDirectory: "/usr/home",
  });

  console.log(userSettings);
})();
