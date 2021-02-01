export default {
  'GETRolePermissionEntity': {
    'code': 200,
    'msg': 'msg',
    'data': {
      'total': 0,
      'rows': [
        {
          'permissionId': '45',
          'name': 'proxy',
          'permission': [
            'GET',
            'PUT',
            'DELETE',
            'POST'
          ]
        },
        {
          'permissionId': '34',
          'name': 'parking',
          'permission': [
            'GET',
            'PUT',
          ]
        },
        {
          'permissionId': '23',
          'name': 'device',
          'permission': [
            'GET',
            'PUT',
            'POST'
          ]
        },
        {
          'permissionId': '12',
          'name': 'order',
          'permission': [
            'PUT',
            'DELETE',
            'POST'
          ]
        }
      ]
    }
  },
  'GETVoiceDetails': {
    'code': 200,
    'msg': 'msg',
    'data': {
      'time': [
        {
          'st': '08:08:00',
          'et': '23:59:00',
          'volume': 30,
          'luminance': 20
        },
        {
          'st': '08:08:00',
          'et': '23:59:00',
          'volume': 31,
          'luminance': 22
        }
      ],
      'adDuration': 10,
      'adInterval': 10,
      'inVoice': [
        'plateNumber',
        'carType',
        'overdue',
        'delayWarning',
        'welcome'
      ],
      'outVoice': [
        'plateNumber',
        'carType',
        'bye'
      ],
      'delayWarningDay': 8,
      'welcomeMsg': '欢迎',
      'byeMsg': '欢送',
      'noSpace': 'on'
    }
  },
  'GETFeeRuleList': {
    'code': 200,
    'msg': 'OK',
    'data': {
      'total': 1,
      'rows': [
        {
          'planTemplate': 'Charging24Hours',
          'planName': '0-临时车1',
          'planId': 'id-1'
        },
        {
          'planTemplate': 'Charging24Hours',
          'planName': '0-临时车2',
          'planId': 'id-2'
        },
        {
          'planTemplate': 'ChargeStandardOne',
          'planName': '1-临时车1',
          'planId': 'id-3'
        },
        {
          'planTemplate': 'ChargeStandardTwo',
          'planName': '2-临时车1',
          'planId': 'id-4'
        },
        {
          'planTemplate': 'ChargeStandardThree',
          'planName': '3-临时车1',
          'planId': 'id-5'
        },
        {
          'planTemplate': 'ChargeStandardFour',
          'planName': '4-临时车1',
          'planId': 'id-6'
        },
        {
          'planTemplate': 'ChargeStandardFive',
          'planName': '5-临时车1',
          'planId': 'id-7'
        },
        {
          'planTemplate': 'ChargeStandardSix',
          'planName': '6-临时车1',
          'planId': 'id-8'
        }
      ]
    }
  },
  'GETFeeRuleDetails': {
    msg: 'ok',
    code: 200,
    data: {
      'dayCharge': 0,
      'freeMinutes': 0,
      'noWorkWeekDay': '1,7',
      'openFree': 'off',
      'openLoopFree': 'off',
      'rollingBilling': 'on',
      'planDescribe': '标准五-测试',
      'openParagraphSplit': 'on',
      'planMaxCharge': 0,
      'openFirstParagra': 'on',
      'planName': '临时车1',
      'chargeCount': 'off',
      'exceptionNoWorkingDays': '2019/10/01,2019/10/02,2019/10/03,2019/10/04,2019/10/05,2019/10/06,2019/10/07',
      'planTemplate': 'ChargeStandardFive',
      'pargraphs': [
        {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        },
        {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }, {
          'et': '15:00',
          'firstDuration': 60,
          'firstPrice': 800,
          'id': 'af6775e5a2424527ac85d664c7e3412a_1',
          'index': 1,
          'maxCharege': 0,
          'pgClass': 0,
          'st': '10:00',
          'unitPrice': 200,
          'unitPriceDuration': 60,
          'duration': 60,
          'chargeCount': 'off'
        }
      ]
    }
  }
};