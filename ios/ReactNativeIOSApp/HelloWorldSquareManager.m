//
//  HelloWorldSquareManager.m
//  ReactNativeIOSApp
//
//  Created by mac on 27/11/1439 AH.
//  Copyright © 1439 mac. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTViewManager.h>

#import <MapKit/MapKit.h>



    @interface HelloWorldSquareManager: RCTViewManager
    @end

@implementation HelloWorldSquareManager
    
    RCT_EXPORT_MODULE()
    
- (UIView *)view
    {
        return [[MKMapView alloc] init];
    }
    
@end
