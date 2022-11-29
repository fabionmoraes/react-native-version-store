
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNVersionStoreSpec.h"

@interface VersionStore : NSObject <NativeVersionStoreSpec>
#else
#import <React/RCTBridgeModule.h>

@interface VersionStore : NSObject <RCTBridgeModule>
#endif

@end
