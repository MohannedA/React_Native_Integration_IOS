//
//  CalendarManager.swift
//  ReactNativeIOSApp
//
//  Created by mac on 26/11/1439 AH.
//  Copyright © 1439 mac. All rights reserved.
//

import Foundation

// CalendarManager.swift
@objc(CalendarManager)
class CalendarManager: RCTEventEmitter {
    
    @objc override func supportedEvents() -> [String]! {
        return ["EventReminder"];
    }
    
    @objc func addEvent(_ name: String, location: String, date: NSNumber) -> Void {
        // Date is ready to use!
        NSLog("%@ %@ %@", name, location, date)
        
        print(name)
        //let ret:[String:Any] =  ["name": name, "location": location, "date" : date]
        //callback([ret])
        //self.sendEvent(withName: "EventReminder", body: ret)
    }
    
    
    
}
