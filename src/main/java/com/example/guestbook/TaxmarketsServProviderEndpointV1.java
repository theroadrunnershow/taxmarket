package com.example.guestbook;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.response.NotFoundException;
import com.google.appengine.api.users.User;

import java.util.ArrayList;

import javax.inject.Named;

/**
 * Defines v1 of a taxmarkets-sp API, which provides simple "serviceproviders" methods.
 */
@Api(
    name = "taxmarkets",
    version = "v1",
    scopes = {Constants.EMAIL_SCOPE},
    clientIds = {Constants.WEB_CLIENT_ID, Constants.ANDROID_CLIENT_ID, Constants.IOS_CLIENT_ID},
    audiences = {Constants.ANDROID_AUDIENCE}
)
public class TaxmarketsServProviderEndpointV1 {
  
  @ApiMethod(name = "serviceproviders.insert")
  public void insert(Message serviceprovider) {
    // store a ServiceProvider on Datastore
    Entity e = new Entity("ServiceProvider");
    e.setProperty("createdAt", new Date());
    e.setProperty("createdBy", serviceprovider.getCreatedBy());
    e.setProperty("content", serviceprovider.getContent());
    datastore.put(e);
  }
}

