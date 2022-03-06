/**
 * Configuration for the bundles build
 */

/**
 * Modules directory for the bundles build. If building in a workspace,
 * set to workspace root.
 */
export const modulesDirectory = './node_modules';

export const exposePackages = {
  /**
   * The listed packages are not exposed in the bundle, although they may
   * be bundled as dependencies.
   */
  exclude: [
    // Keeping lit libraries in sync between the bundle and user applications
    // is hard. However it seems to be safe to not 
    '@lit/reactive-element',
    'lit',
    'lit-html',
    'lit-element',
  ]
};