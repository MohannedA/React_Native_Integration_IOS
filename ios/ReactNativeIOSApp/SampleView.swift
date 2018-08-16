//
//  SampleView.swift
//  ReactNativeIOSApp
//
//  Created by mac on 27/11/1439 AH.
//  Copyright © 1439 mac. All rights reserved.
//

import UIKit
class SampleView: UIView {
    override init(frame: CGRect) {
        super.init(frame: frame)
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: 100,
                                          height: 50))
        label.text = "This is Swift"
        self.addSubview(label)
    }
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
