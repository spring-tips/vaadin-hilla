// @ts-nocheck

import GroceryItem from './GroceryItem';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelValue,_getPropertyModel} from '@hilla/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@hilla/form';

/**
 * This module is generated from com.example.application.GroceryItem.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///Users/jlong/Desktop/hilla-grocery-app/src/main/java/com/example/application/GroceryItem.java}
 */
export default class GroceryItemModel<T extends GroceryItem = GroceryItem> extends ObjectModel<T> { 
  static createEmptyValue: () => GroceryItem;

  get name(): StringModel {
    return this[_getPropertyModel]('name', StringModel, [true, new NotBlank()]);
  }

  get quantity(): NumberModel {
    return this[_getPropertyModel]('quantity', NumberModel, [true, new NotNull(), new Min({value:1})]);
  }
}
