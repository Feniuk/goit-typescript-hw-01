export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Адміністратор",
  [UserRole.editor]: "Редактор",
  [UserRole.guest]: "Гість",
};
