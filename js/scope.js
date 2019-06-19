const scopeName = 'first-lego-league';

export function isInScope(m) {
  return m.package.name.startsWith(`@${scopeName}/`);
}

export const startingModules = [
  '@first-lego-league/clock@2.4.2',
  '@first-lego-league/display@2.4.3',
  // '@first-lego-league/display-system',
  // '@first-lego-league/eslint-config',
  // '@first-lego-league/fllscoring',
  '@first-lego-league/image-server',
  // '@first-lego-league/ms-auth',
  // '@first-lego-league/ms-authentication',
  // '@first-lego-league/ms-client',
  // '@first-lego-league/ms-configuration',
  // '@first-lego-league/ms-correlation',
  // '@first-lego-league/ms-logger',
  // '@first-lego-league/ms-messenger',
  // '@first-lego-league/protocols',
  '@first-lego-league/scoring@2.3.8',
  '@first-lego-league/tournament@2.0.2',
  '@first-lego-league/tournament-status@1.0.1',
  // '@first-lego-league/user-interface'
];