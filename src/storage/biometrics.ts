export interface BiometricOptions {
  reason?: string;
}

export class BiometricAuth {
  static async isAvailable(): Promise<boolean> {
    return false;
  }

  static async authenticate(options?: BiometricOptions): Promise<boolean> {
    console.log('BiometricAuth: Authenticating user');
    return false;
  }

  static async enroll(): Promise<void> {
    console.log('BiometricAuth: Enrolling biometrics');
  }
}