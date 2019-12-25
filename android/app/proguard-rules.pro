# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

-keep class com.kakao.** { *; }
-keepattributes Signature
-keepclassmembers class * {
  public static <fields>;
  public *;
}

-keep class org.unimodules.** { *;}
-keep class okio.** {*;}
-keep class com.swmansion.** {*;}
-keep class com.google.android.gms.** {*;}
-keep class com.facebook.** {*;}
-keep class com.bumptech.** {*;}
-keep class expo.modules.** {*;}
-keep class io.nlopez.** {*;}
-keep class org.unimodules.** {*;}
-keep class org.apache** {*;}

-keep class expo.loaders.provider.AppLoaderProvider$Callback
-keep class org.unimodules.core.errors.CodedException
-keep class com.google.android.gms.location.LocationSettingsResponse
-keep class com.horcrux.svg.** {*;}

-keep class javax.annotation.** {*;}
-keep class bolts.** {*;}
-keep class com.reactnative.googlefit.** {*;}

-dontnote org.apache.commons.codec.**
-dontwarn io.nlopez.smartlocation.rx.**
-dontwarn android.support.v4.**,org.slf4j.**,com.google.android.gms.**

-keep class com.facebook.imagepipeline.animated.factory.AnimatedFactoryImpl {
  public AnimatedFactoryImpl(com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, com.facebook.imagepipeline.core.ExecutorSupplier);
}

-dontwarn okio.**
-dontwarn okhttp3.**