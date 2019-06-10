const scopeName = 'first-lego-league';

export function isInScope(m) {
  return m.package.name.startsWith(`@${scopeName}/`);
}

export const startingModules = [
  '@first-lego-league/clock',
  '@first-lego-league/dev-launcher',
  '@first-lego-league/display',
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
  '@first-lego-league/scoring',
  '@first-lego-league/tournament',
  '@first-lego-league/tournament-status',
  // '@first-lego-league/user-interface'
];