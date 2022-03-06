package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Endpoint
@AnonymousAllowed
public class GroceryEndpoint {

    private final List<GroceryItem> groceries = new CopyOnWriteArrayList<>();

    public @Nonnull List<@Nonnull GroceryItem> getGroceries() {
        return this.groceries;
    }

    public GroceryItem save(GroceryItem groceryItem) {
        groceries.add(groceryItem);
        return groceryItem;
    }


}
