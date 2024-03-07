#import "AppDelegate.h"


#import <React/RCTBundleURLProvider.h>
#import <Firebase.h>
//#import <FBSDKCoreKit/FBSDKCoreKit.h>
//#import <FBSDKCoreKit/FBSDKCoreKit-swift.h> // <- Add This Import

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
    [GMSServices provideAPIKey:@"AIzaSyDQ_pjAQYvVcGWNLy-ND_ZtyufjXtiUAxs"]; // add this line using the api key obtained from Google Console
  self.moduleName = @"salt";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
