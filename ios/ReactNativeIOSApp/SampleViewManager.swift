//
//  SampleViewManager .swift
//  ReactNativeIOSApp
//
//  Created by mac on 27/11/1439 AH.
//  Copyright © 1439 mac. All rights reserved.
//

import Foundation
@objc(SampleViewManager)
class SampleViewManager : RCTViewManager {
    override func view() -> UIView! {
        return SampleView();
    }
}
