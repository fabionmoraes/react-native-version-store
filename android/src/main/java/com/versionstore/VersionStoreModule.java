package com.versionstore;

import android.content.pm.PackageInfo;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = VersionStoreModule.NAME)
public class VersionStoreModule extends ReactContextBaseJavaModule {
  public static final String NAME = "VersionStore";

  private PackageInfo getPackageInfo() throws Exception {
    return getReactApplicationContext().getPackageManager().getPackageInfo(getReactApplicationContext().getPackageName(), 0);
  }

  public VersionStoreModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod(isBlockingSynchronousMethod = true)
  public String getBundleId() {
    return getReactApplicationContext().getPackageName();
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  public String getVersion() {
    try {
      return getPackageInfo().versionName;
    } catch (Exception e) {
      return "undefined";
    }
  }
}
