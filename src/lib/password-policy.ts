export function isStrongPassword(password: string): boolean {
  if (!password || typeof password !== "string") return false;
  return password.length >= 6;
}
