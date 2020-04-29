package com.appname.tutorial.AppName.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController
{


    @GetMapping(value = "fetchStores")
    public String getStoreProducts() {
        String json = "{\"stores\":[{\"prodId\":1,\"price\":\"$1.25\"},{\"prodId\":2,\"price\":\"$7.5\"},{\"prodId\":3,\"price\":\"$4\"},{\"prodId\":4,\"price\":\"$2.75\"},{\"prodId\":5,\"price\":\"$1.40\"}]}";
        return json;
    }
}
