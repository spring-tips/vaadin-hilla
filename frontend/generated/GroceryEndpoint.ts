/**
 * This module is generated from GroceryEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///Users/jlong/Desktop/hilla-grocery-app/src/main/java/com/example/application/GroceryEndpoint.java}
 * @module GroceryEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
import type GroceryItem from './com/example/application/GroceryItem';

function _getGroceries(): Promise<Array<GroceryItem>> {
 return client.call('GroceryEndpoint', 'getGroceries');
}

function _save(
 groceryItem: GroceryItem | undefined
): Promise<GroceryItem | undefined> {
 return client.call('GroceryEndpoint', 'save', {groceryItem});
}
export {
  _getGroceries as getGroceries,
  _save as save,
};
