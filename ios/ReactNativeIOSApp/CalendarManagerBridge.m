//
//  CalendarManagerBridge.m
//  ReactNativeIOSApp
//
//  Created by mac on 26/11/1439 AH.
//  Copyright © 1439 mac. All rights reserved.
//

#import <Foundation/Foundation.h>

// CalendarManagerBridge.m
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)



@end
