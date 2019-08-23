const scopeName = 'first-lego-league';

export function isInScope(m) {
  return m.package.name.startsWith(`@${scopeName}/`);
}

export const startingModules = [
  '@first-lego-league/clock@2.5.0',
  '@first-lego-league/display@2.6.0',
  // '@first-lego-league/display-system',
  // '@first-lego-league/eslint-config',
  // '@first-lego-league/fllscoring',
  '@first-lego-league/identity-provider@1.1.1',
  // '@first-lego-league/ms-auth',
  // '@first-lego-league/ms-authentication',
  // '@first-lego-league/ms-client',
  // '@first-lego-league/ms-configuration',
  // '@first-lego-league/ms-correlation',
  // '@first-lego-league/ms-logger',
  // '@first-lego-league/ms-messenger',
  // '@first-lego-league/protocols',
  '@first-lego-league/rankings@1.0.5',
  '@first-lego-league/scoring@2.4.0',
  '@first-lego-league/tournament@2.1.0',
  '@first-lego-league/tournament-status@1.3.0',
  // '@first-lego-league/user-interface'
];
