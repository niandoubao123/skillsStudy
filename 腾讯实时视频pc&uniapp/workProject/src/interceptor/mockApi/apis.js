export default {
  'GETMchReportTop': {
    'uri': '/mch/report/top',
    'pageId': '327',
    'page_uri': 'GET /mch/report/top',
    'title': '代理总汇/查询',
    'type': 'GET'
  },
  'GETIdxReportStats': {
    'uri': '/idxReport/stats',
    'pageId': '879',
    'page_uri': 'GET /idxReport/stats',
    'title': '指数报表/累计出单累计抓拍数量',
    'type': 'GET'
  },
  'GETIdxReportPoGraph': {
    'uri': '/idxReport/poGraph',
    'pageId': '880',
    'page_uri': 'GET /idxReport/poGraph',
    'title': '指数报表/出单数量趋势图',
    'type': 'GET'
  },
  'GETIdxReportOnParkingGraph': {
    'uri': '/idxReport/onParkingGraph',
    'pageId': '881',
    'page_uri': 'GET /idxReport/onParkingGraph',
    'title': '指数报表/车场数量趋势图',
    'type': 'GET'
  },
  'GETIdxReportMthRentalGraph': {
    'uri': '/idxReport/mthRentalGraph',
    'pageId': '882',
    'page_uri': 'GET /idxReport/mthRentalGraph',
    'title': '指数报表/月租车数量趋势图',
    'type': 'GET'
  },
  'GETIdxReportShotGraph': {
    'uri': '/idxReport/shotGraph',
    'pageId': '883',
    'page_uri': 'GET /idxReport/shotGraph',
    'title': '指数报表/抓怕流水数量趋势图',
    'type': 'GET'
  },
  'GETIdxReportOnDevGraph': {
    'uri': '/idxReport/onDevGraph',
    'pageId': '884',
    'page_uri': 'GET /idxReport/onDevGraph',
    'title': '指数报表/在线设备情况趋势图',
    'type': 'GET'
  },
  'GETIdxReportOnParkingTime': {
    'uri': '/idxReport/onParkingTime',
    'pageId': '924',
    'page_uri': 'GET /idxReport/onParkingTime',
    'title': '指数报表/今日车场总数',
    'type': 'GET'
  },
  'GETIdxReportMthRentalTime': {
    'uri': '/idxReport/mthRentalTime',
    'pageId': '925',
    'page_uri': 'GET /idxReport/mthRentalTime',
    'title': '指数报表/今日月租车数量',
    'type': 'GET'
  },
  'GETIdxReportStatsDev': {
    'uri': '/idxReport/statsDev',
    'pageId': '926',
    'page_uri': 'GET /idxReport/statsDev',
    'title': '指数报表/今日在线设备数量',
    'type': 'GET'
  },
  'GETIdxReportStatsPoLastThirtyDays': {
    'uri': '/idxReport/statsPoLastThirtyDays',
    'pageId': '927',
    'page_uri': 'GET /idxReport/statsPoLastThirtyDays',
    'title': '指数报表/财务最近30日交易金额',
    'type': 'GET'
  },
  'GETIdxReportStatsPo': {
    'uri': '/idxReport/statsPo',
    'pageId': '928',
    'page_uri': 'GET /idxReport/statsPo',
    'title': '指数报表/财务累计数据',
    'type': 'GET'
  },
  'GETIdxReportGraph': {
    'uri': '/idxReport/{type}/graph',
    'pageId': '929',
    'page_uri': 'GET /idxReport/{type}/graph',
    'title': '指数报表/财务图',
    'type': 'GET'
  },
  'GETIdxReportExcludePid': {
    'uri': '/idxReport/excludePid',
    'pageId': '966',
    'page_uri': 'GET /idxReport/excludePid',
    'title': '指数报表/获取黑名单停车场',
    'type': 'GET'
  },
  'PUTIdxReportExcludePid': {
    'uri': '/idxReport/excludePid',
    'pageId': '969',
    'page_uri': 'PUT /idxReport/excludePid',
    'title': '指数报表/黑名单停车场(不计入统计)',
    'type': 'PUT'
  },
  'GETIdxReportStatsPoTime': {
    'uri': '/idxReport/statsPoTime',
    'pageId': '970',
    'page_uri': 'GET /idxReport/statsPoTime',
    'title': '指数报表/财务今日数据',
    'type': 'GET'
  },
  'POSTMch': {
    'uri': '/mch',
    'pageId': [
      '328',
      '348'
    ],
    'page_uri': 'POST /mch',
    'title': '代理总汇/新增',
    'type': 'POST'
  },
  'PUTMch': {
    'uri': '/mch/{id}',
    'pageId': [
      '329',
      '349'
    ],
    'page_uri': 'PUT /mch/{id}',
    'title': '代理总汇/修改',
    'type': 'PUT'
  },
  'DELETEMch': {
    'uri': '/mch/{mchid}',
    'pageId': [
      '821',
      '820'
    ],
    'page_uri': 'DELETE /mch/{mchid}',
    'title': '代理总汇/删除',
    'type': 'DELETE'
  },
  'POSTAccResetPwdAndSend': {
    'uri': '/acc/{id}/resetPwdAndSend',
    'pageId': [
      [
        '330',
        '350'
      ],
      '356'
    ],
    'page_uri': 'POST /acc/{id}/resetPwdAndSend',
    'title': '代理总汇/重置密码',
    'type': 'POST'
  },
  'PUTMchOnOff': {
    'uri': '/mch/{mchId}/onOff',
    'pageId': [
      '331',
      '351'
    ],
    'page_uri': 'PUT /mch/{mchId}/onOff',
    'title': '代理总汇/暂停或启用',
    'type': 'PUT'
  },
  'POSTMchTransfer': {
    'uri': '/mch/{id}/transfer',
    'pageId': [
      [
        '333',
        '352'
      ],
      '358'
    ],
    'page_uri': 'POST /mch/{id}/transfer',
    'title': '代理总汇/迁移',
    'type': 'POST'
  },
  'GETMchTurnoverReport': {
    'uri': '/mch/turnover/report',
    'pageId': '334',
    'page_uri': 'GET /mch/turnover/report',
    'title': '物业流水分析/查询',
    'type': 'GET'
  },
  'GETDeviceReport': {
    'uri': '/device/report',
    'pageId': [
      [
        '335',
        '359'
      ],
      '429'
    ],
    'page_uri': 'GET  /device/report',
    'title': '设备总汇/查询',
    'type': 'GET'
  },
  'GETDeviceLogDownload': {
    'uri': '/device/{id}/logDownload',
    'pageId': [
      [
        '336',
        '360'
      ],
      '430'
    ],
    'page_uri': 'GET  /device/{id}/logDownload',
    'title': '设备总汇/下载日志',
    'type': 'GET'
  },
  'POSTDeviceOpenDeviceAppLog': {
    'uri': '/device/openDeviceAppLog',
    'pageId': '822',
    'page_uri': 'POST  /device/openDeviceAppLog',
    'title': '设备汇总/开启应用日志',
    'type': 'POST'
  },
  'POSTDeviceOpenDeviceAlgLog': {
    'uri': '/device/openDeviceAlgLog',
    'pageId': '823',
    'page_uri': 'POST  /device/openDeviceAlgLog',
    'title': '设备汇总/开启算法日志',
    'type': 'POST'
  },
  'POSTDeviceCloseDeviceAllLog': {
    'uri': '/device/closeDeviceAllLog',
    'pageId': '824',
    'page_uri': 'POST  /device/closeDeviceAllLog',
    'title': '设备汇总/关闭所有日志',
    'type': 'POST'
  },
  'GETDeviceGetDeviceLog': {
    'uri': '/device/getDeviceLog',
    'pageId': '825',
    'page_uri': 'GET  /device/getDeviceLog',
    'title': '设备汇总/日志下载',
    'type': 'GET'
  },
  'GETDeviceGetBySn': {
    'uri': '/device/getBySn',
    'pageId': '998',
    'page_uri': 'GET /device/getBySn',
    'title': '设备总汇/设备详情',
    'type': 'GET'
  },
  'GETMchPayInfo': {
    'uri': '/mch/payInfo',
    'pageId': '337',
    'page_uri': 'GET /mch/payInfo',
    'title': '支付查询',
    'type': 'GET'
  },
  'POSTMchPayInfo': {
    'uri': '/mch/payInfo',
    'pageId': '338',
    'page_uri': 'POST /mch/payInfo',
    'title': '支付新增',
    'type': 'POST'
  },
  'PUTMchPayInfo': {
    'uri': '/mch/{mchId}/payInfo',
    'pageId': '339',
    'page_uri': 'PUT /mch/{mchId}/payInfo',
    'title': '支付修改',
    'type': 'PUT'
  },
  'GETApiApiInfo': {
    'uri': '/api/apiInfo',
    'pageId': '1172',
    'page_uri': 'GET /api/apiInfo',
    'title': 'API查询',
    'type': 'GET'
  },
  'PUTApiApiInfo': {
    'uri': '/api/apiInfo',
    'pageId': '1173',
    'page_uri': 'PUT /api/apiInfo',
    'title': 'API修改',
    'type': 'PUT'
  },
  'GETInvoiceInvoiceInfo': {
    'uri': '/invoice/invoiceInfo',
    'pageId': '1191',
    'page_uri': 'GET /invoice/invoiceInfo',
    'title': '发票信息查询',
    'type': 'GET'
  },
  'PUTInvoiceInvoiceInfo': {
    'uri': '/invoice/invoiceInfo',
    'pageId': '1192',
    'page_uri': 'PUT /invoice/invoiceInfo',
    'title': '发票信息修改',
    'type': 'PUT'
  },
  'GETInvoiceInvoiceChannelInfo': {
    'uri': '/invoice/invoiceChannelInfo',
    'pageId': '1211',
    'page_uri': 'GET /invoice/invoiceChannelInfo',
    'title': '发票服务商通道信息查询',
    'type': 'GET'
  },
  'GETMchApiPayInfo': {
    'uri': '/mch/apiPayInfo',
    'pageId': '1250',
    'page_uri': 'GET /mch/apiPayInfo',
    'title': 'api支付查询',
    'type': 'GET'
  },
  'GETMchInvoicePayInfo': {
    'uri': '/mch/invoicePayInfo',
    'pageId': '1251',
    'page_uri': 'GET /mch/invoicePayInfo',
    'title': '发票支付查询',
    'type': 'GET'
  },
  'GETRole': {
    'uri': '/role',
    'pageId': '340',
    'page_uri': 'GET /role',
    'title': '角色模板/查询',
    'type': 'GET'
  },
  'POSTRole': {
    'uri': '/role',
    'pageId': '341',
    'page_uri': 'POST /role',
    'title': '角色模板/新增',
    'type': 'POST'
  },
  'GETRolePermissionEntity': {
    'uri': '/role/{roleId}/permission/entity',
    'pageId': '361',
    'page_uri': 'GET /role/{roleId}/permission/entity',
    'title': '角色模板/权限获取',
    'type': 'GET'
  },
  'GETRolePermissionUi': {
    'uri': '/role/{roleId}/permission/ui',
    'pageId': '362',
    'page_uri': 'GET /role/{roleId}/permission/ui',
    'title': '角色模板/UI页面',
    'type': 'GET'
  },
  'PUTRolePermissionUiOnOff': {
    'uri': '/role/permission/ui/{uiId}/onOff',
    'pageId': '477',
    'page_uri': 'PUT /role/permission/ui/{uiId}/onOff',
    'title': '角色模板/其他页面enable',
    'type': 'PUT'
  },
  'PUTRolePermissionEntity': {
    'uri': '/role/{roleId}/permission/entity',
    'pageId': '478',
    'page_uri': 'PUT /role/{roleId}/permission/entity',
    'title': '角色模板/权限分配',
    'type': 'PUT'
  },
  'PUTRole': {
    'uri': '/role/{roleId}',
    'pageId': '479',
    'page_uri': 'PUT /role/{roleId}',
    'title': '角色模板/修改',
    'type': 'PUT'
  },
  'DELETERole': {
    'uri': '/role/{roleId}',
    'pageId': '480',
    'page_uri': 'DELETE /role/{roleId}',
    'title': '角色模板/删除',
    'type': 'DELETE'
  },
  'GETRolePermissionAppUi': {
    'uri': '/role/{roleId}/permission/appUi',
    'pageId': '1138',
    'page_uri': 'GET /role/{roleId}/permission/appUi',
    'title': '角色模板/(H5)UI页面',
    'type': 'GET'
  },
  'PUTRolePermissionAppUiOnOff': {
    'uri': '/role/permission/appUi/{uiId}/onOff',
    'pageId': '1139',
    'page_uri': 'PUT /role/permission/appUi/{uiId}/onOff',
    'title': '角色模板/H5其他页面enable',
    'type': 'PUT'
  },
  'GETAdReport': {
    'uri': '/ad/report',
    'pageId': '342',
    'page_uri': 'GET /ad/report',
    'title': '广告图片/查询',
    'type': 'GET'
  },
  'DELETEAd': {
    'uri': '/ad/{id}',
    'pageId': '343',
    'page_uri': 'DELETE /ad/{id}',
    'title': '广告图片/删除',
    'type': 'DELETE'
  },
  'POSTParkingFast': {
    'uri': '/parking/fast',
    'pageId': '536',
    'page_uri': 'POST /parking/fast',
    'title': '快速创建停车场',
    'type': 'POST'
  },
  'GETMchReportHaveDevMonth': {
    'uri': '/mch/report/haveDevMonth',
    'pageId': [
      '344',
      '346'
    ],
    'page_uri': 'GET /mch/report/haveDevMonth',
    'title': '主页/月新保有量曲线',
    'type': 'GET'
  },
  'GETMchReportNewDevMonth': {
    'uri': '/mch/report/newDevMonth',
    'pageId': '345',
    'page_uri': 'GET /mch/report/newDevMonth',
    'title': '主页/月新装曲线',
    'type': 'GET'
  },
  'GETMch': {
    'uri': '/mch',
    'pageId': '332',
    'page_uri': 'GET /mch',
    'title': '代理总汇/迁移查询（未使用）',
    'type': 'GET'
  },
  'GETMchReport': {
    'uri': '/mch/report',
    'pageId': '347',
    'page_uri': 'GET /mch/report',
    'title': '我的客户/代理列表/查询',
    'type': 'GET'
  },
  'GETParkingReport': {
    'uri': '/parking/report',
    'pageId': '353',
    'page_uri': 'GET /parking/report',
    'title': '停车场列表/查询',
    'type': 'GET'
  },
  'POSTParking': {
    'uri': '/parking',
    'pageId': '354',
    'page_uri': 'POST /parking',
    'title': '停车场列表/新增',
    'type': 'POST'
  },
  'PUTParking': {
    'uri': '/parking/{parkingId}',
    'pageId': '355',
    'page_uri': 'PUT /parking/{parkingId}',
    'title': '停车场列表/修改',
    'type': 'PUT'
  },
  'POSTAccOnOff': {
    'uri': '/acc/{accId}/onOff',
    'pageId': '357',
    'page_uri': 'POST /acc/{accId}/onOff',
    'title': '停车场列表/暂停账户',
    'type': 'POST'
  },
  'GETParkingGroupByMch': {
    'uri': '/parking/groupByMch',
    'pageId': '367',
    'page_uri': 'GET /parking/groupByMch',
    'title': '停车场设置/停车场查询',
    'type': 'GET'
  },
  'GETArea': {
    'uri': '/area',
    'pageId': [
      [
        '368',
        '440'
      ],
      '476'
    ],
    'page_uri': 'GET /area',
    'title': '停车场设置/区域',
    'type': 'GET'
  },
  'GETChannel': {
    'uri': '/channel',
    'pageId': [
      [
        '369',
        '441'
      ],
      '475'
    ],
    'page_uri': 'GET /channel',
    'title': '停车场设置/通道 有同名接口',
    'type': 'GET'
  },
  'GETDevice': {
    'uri': '/device',
    'pageId': [
      '370',
      '442'
    ],
    'page_uri': 'GET /device',
    'title': '停车场设置/设备',
    'type': 'GET'
  },
  'POSTArea': {
    'uri': '/area',
    'pageId': [
      '431',
      '443'
    ],
    'page_uri': 'POST /area',
    'title': '停车场设置/新增区域 有同名接口',
    'type': 'POST'
  },
  'PUTArea': {
    'uri': '/area/{areaId}',
    'pageId': [
      '432',
      '444'
    ],
    'page_uri': 'PUT /area/{areaId}',
    'title': '停车场设置/修改区域',
    'type': 'PUT'
  },
  'POSTChannel': {
    'uri': '/channel',
    'pageId': [
      '433',
      '445'
    ],
    'page_uri': 'POST /channel/',
    'title': '停车场设置/新增车道',
    'type': 'POST'
  },
  'PUTChannel': {
    'uri': '/channel/{channelId}',
    'pageId': [
      '434',
      '446'
    ],
    'page_uri': 'PUT /channel/{channelId}',
    'title': '停车场设置/修改车道',
    'type': 'PUT'
  },
  'DELETEDevice': {
    'uri': '/device/{deviceId}',
    'pageId': [
      '438',
      '450'
    ],
    'page_uri': 'DELETE /device/{deviceId}',
    'title': '停车场设置/删除设备',
    'type': 'DELETE'
  },
  'PUTDevice': {
    'uri': '/device/{deviceId}',
    'pageId': '481',
    'page_uri': 'PUT /device/{deviceId}',
    'title': '停车场设置/修改设备',
    'type': 'PUT'
  },
  'GETDeviceTarget': {
    'uri': '/device/target',
    'pageId': '483',
    'page_uri': 'GET /device/target',
    'title': '停车场设置/api14（停车场里所有的设备）（未使用的接口）',
    'type': 'GET'
  },
  'DELETEArea': {
    'uri': '/area/{areaId}',
    'pageId': '484',
    'page_uri': 'DELETE /area/{areaId}',
    'title': '停车场设置/删除区域',
    'type': 'DELETE'
  },
  'DELETEChannel': {
    'uri': '/channel/{channelId}',
    'pageId': '485',
    'page_uri': 'DELETE /channel/{channelId}',
    'title': '停车场设置/删除车道',
    'type': 'DELETE'
  },
  'POSTDeviceEnable': {
    'uri': '/device/{id}/enable',
    'pageId': [
      '495',
      '449'
    ],
    'page_uri': 'POST /device/{id}/enable',
    'title': '停车场设置/启用设备',
    'type': 'POST'
  },
  'DELETEParking': {
    'uri': '/parking/{parkingId}',
    'pageId': '642',
    'page_uri': 'DELETE /parking/{parkingId}',
    'title': '停车场列表/删除',
    'type': 'DELETE'
  },
  'POSTDeviceConnectVpn': {
    'uri': '/device/connectVpn',
    'pageId': '643',
    'page_uri': 'POST /device/connectVpn',
    'title': '停车场设置/设备/设备vpn连接',
    'type': 'POST'
  },
  'GETDeviceGetDeviceVpn': {
    'uri': '/device/getDeviceVpn',
    'pageId': '644',
    'page_uri': 'GET /device/getDeviceVpn',
    'title': '停车场设置/设备/获取vpnurl',
    'type': 'GET'
  },
  'POSTDeviceDisconnectVpn': {
    'uri': '/device/disconnectVpn',
    'pageId': '645',
    'page_uri': 'POST /device/disconnectVpn',
    'title': '停车场设置/设备/关闭设备vpn连接',
    'type': 'POST'
  },
  'GETParkingRentalList': {
    'uri': '/parking/rentalList',
    'pageId': '699',
    'page_uri': 'GET /parking/rentalList',
    'title': '租赁模式/停车场列表',
    'type': 'GET'
  },
  'PUTParkingRentalCfg': {
    'uri': '/parking/{parkingId}/rentalCfg',
    'pageId': '701',
    'page_uri': 'PUT /parking/{parkingId}/rentalCfg',
    'title': '租赁模式/停车场设置有效期',
    'type': 'PUT'
  },
  'DELETEParkingRentalCfg': {
    'uri': '/parking/{parkingId}/rentalCfg',
    'pageId': '702',
    'page_uri': 'DELETE /parking/{parkingId}/rentalCfg',
    'title': '租赁模式/停车场取消限制',
    'type': 'DELETE'
  },
  'PUTParkingEnable': {
    'uri': '/parking/{parkingId}/enable',
    'pageId': '703',
    'page_uri': 'PUT /parking/{parkingId}/enable',
    'title': '租赁模式/停车场启用',
    'type': 'PUT'
  },
  'PUTParkingCustomSet': {
    'uri': '/parkingCustomSet/{parkingCustomSetId}',
    'pageId': '806',
    'page_uri': 'PUT /parkingCustomSet/{parkingCustomSetId}',
    'title': '修改停车场自定义设置组',
    'type': 'PUT'
  },
  'POSTParkingCustomSet': {
    'uri': '/parkingCustomSet',
    'pageId': '807',
    'page_uri': 'POST /parkingCustomSet',
    'title': '新增停车场自定义设置组',
    'type': 'POST'
  },
  'GETParkingCustomSet': {
    'uri': '/parkingCustomSet',
    'pageId': '808',
    'page_uri': 'GET /parkingCustomSet',
    'title': '查询停车场自定义设置组',
    'type': 'GET'
  },
  'DELETEParkingCustomSet': {
    'uri': '/parkingCustomSet/{parkingCustomSetId}',
    'pageId': '809',
    'page_uri': 'DELETE /parkingCustomSet/{parkingCustomSetId}',
    'title': '删除停车场自定义设置组',
    'type': 'DELETE'
  },
  'GETParkingGetParkingById': {
    'uri': '/parking/getParkingById',
    'pageId': '877',
    'page_uri': 'GET /parking/getParkingById',
    'title': '通过停车场Id获取停车场',
    'type': 'GET'
  },
  'POSTChannelWhitelistNotify': {
    'uri': '/channel/whitelistNotify/{channelId}',
    'pageId': '984',
    'page_uri': 'POST /channel/whitelistNotify/{channelId}',
    'title': '停车场设置/车道/下发白名单',
    'type': 'POST'
  },
  'GETEmployee': {
    'uri': '/employee',
    'pageId': [
      '363',
      '425'
    ],
    'page_uri': 'GET /employee',
    'title': '设置/员工管理/查询',
    'type': 'GET'
  },
  'POSTEmployee': {
    'uri': '/employee',
    'pageId': [
      '364',
      '426'
    ],
    'page_uri': 'POST /employee',
    'title': '设置/员工管理/新增',
    'type': 'POST'
  },
  'PUTEmployee': {
    'uri': '/employee/{employeeId}',
    'pageId': [
      '365',
      '427'
    ],
    'page_uri': 'PUT /employee/{employeeId}',
    'title': '设置/员工管理/修改',
    'type': 'PUT'
  },
  'DELETEEmployee': {
    'uri': '/employee/{employeeId}',
    'pageId': [
      '366',
      '428'
    ],
    'page_uri': 'DELETE /employee/{employeeId}',
    'title': '设置/员工管理/删除',
    'type': 'DELETE'
  },
  'GETPaymentChannelsSmallWxSigning': {
    'uri': '/paymentChannels/{mchId}/smallWxSigning',
    'pageId': '566',
    'page_uri': 'GET /paymentChannels/{mchId}/smallWxSigning',
    'title': '设置/支付开通/小微商户待签约',
    'type': 'GET'
  },
  'POSTPaymentChannelsSmallWxSubmit': {
    'uri': '/paymentChannels/smallWxSubmit',
    'pageId': '567',
    'page_uri': 'POST /paymentChannels/smallWxSubmit',
    'title': '设置/支付开通/小微商户进件提交',
    'type': 'POST'
  },
  'GETPaymentChannelsBankAdressCode': {
    'uri': '/paymentChannels/bankAdressCode',
    'pageId': '568',
    'page_uri': 'GET /paymentChannels/bankAdressCode',
    'title': '设置/支付开通/开户银行省市编码',
    'type': 'GET'
  },
  'GETPaymentChannelsAccountBank': {
    'uri': '/paymentChannels/accountBank',
    'pageId': '569',
    'page_uri': 'GET /paymentChannels/accountBank',
    'title': '设置/支付开通/开户银行',
    'type': 'GET'
  },
  'GETPaymentChannelsSmallWxStatus': {
    'uri': '/paymentChannels/{mchId}/smallWxStatus',
    'pageId': '570',
    'page_uri': 'GET  /paymentChannels/{mchId}/smallWxStatus',
    'title': '设置/支付开通/小微商户状态查询',
    'type': 'GET'
  },
  'POSTpaymentChannelsMediaUpload': {
    'uri': 'paymentChannels/mediaUpload',
    'pageId': '571',
    'page_uri': 'POST paymentChannels/mediaUpload',
    'title': '支付图片材料上传',
    'type': 'POST'
  },
  'GETPaymentChannelsSmallWxRevisedEdition': {
    'uri': '/paymentChannels/{mchId}/smallWxRevisedEdition',
    'pageId': '572',
    'page_uri': 'GET /paymentChannels/{mchId}/smallWxRevisedEdition',
    'title': '设置/支付开通/小微商户重新编辑',
    'type': 'GET'
  },
  'GETPaymentChannelsSmallWxFailReason': {
    'uri': '/paymentChannels/{mchId}/smallWxFailReason',
    'pageId': '573',
    'page_uri': 'GET /paymentChannels/{mchId}/smallWxFailReason',
    'title': '设置/支付开通/小微商户失败原因',
    'type': 'GET'
  },
  'GETMchParkingStatistics': {
    'uri': '/mch/parking/statistics',
    'pageId': '316',
    'page_uri': 'GET /mch/parking/statistics',
    'title': '主页/api1',
    'type': 'GET'
  },
  'GETMchReportParkingCountDay': {
    'uri': '/mch/report/parkingCountDay',
    'pageId': '317',
    'page_uri': 'GET /mch/report/parkingCountDay',
    'title': '主页/api2',
    'type': 'GET'
  },
  'GETMchReportPayDay': {
    'uri': '/mch/report/payDay',
    'pageId': '318',
    'page_uri': 'GET /mch/report/payDay',
    'title': '主页/api3',
    'type': 'GET'
  },
  'GETMchGuide': {
    'uri': '/mch/guide',
    'pageId': '319',
    'page_uri': 'GET /mch/guide',
    'title': '主页/api4',
    'type': 'GET'
  },
  'GETChannelInoutList': {
    'uri': '/channel/inoutList',
    'pageId': [
      '320',
      '578'
    ],
    'page_uri': 'GET /channel/inoutList',
    'title': '实际情况/出入口列表',
    'type': 'GET'
  },
  'POSTChannelOpen': {
    'uri': '/channel/{channelId}/open',
    'pageId': [
      [
        '321',
        '579'
      ],
      '467'
    ],
    'page_uri': 'POST /channel/{channelId}/open',
    'title': '实际情况/开闸',
    'type': 'POST'
  },
  'POSTChannelClose': {
    'uri': '/channel/{channelId}/close',
    'pageId': [
      [
        '491',
        '580'
      ],
      '468'
    ],
    'page_uri': 'POST /channel/{channelId}/close',
    'title': '实际情况/关闸',
    'type': 'POST'
  },
  'POSTParkingOrderImport': {
    'uri': '/parkingOrder/import',
    'pageId': '601',
    'page_uri': 'POST /parkingOrder/import',
    'title': '导入在场车',
    'type': 'POST'
  },
  'PUTParkingOrderFixPlateNumber': {
    'uri': '/parkingOrder/{parkingOrderId}/fixPlateNumber',
    'pageId': [
      '325',
      '583'
    ],
    'page_uri': 'PUT /parkingOrder/{parkingOrderId}/fixPlateNumber',
    'title': '实际情况/确认车牌',
    'type': 'PUT'
  },
  'GETParkingOrder': {
    'uri': '/parkingOrder/{parkingOrderId}',
    'pageId': [
      '322',
      '463'
    ],
    'page_uri': 'GET /parkingOrder/{parkingOrderId}',
    'title': '实际情况/获取订单信息',
    'type': 'GET'
  },
  'POSTParkingOrderFinishByCash': {
    'uri': '/parkingOrder/{parkingOrderId}/finishByCash',
    'pageId': [
      [
        '324',
        '584'
      ],
      '465'
    ],
    'page_uri': 'POST /parkingOrder/{parkingOrderId}/finishByCash',
    'title': '实际情况/收现金开闸',
    'type': 'POST'
  },
  'POSTParkingOrderFinishByForce': {
    'uri': '/parkingOrder/{parkingOrderId}/finishByForce',
    'pageId': [
      [
        '492',
        '585'
      ],
      '466'
    ],
    'page_uri': 'POST /parkingOrder/{parkingOrderId}/finishByForce',
    'title': '实际情况/强制结单',
    'type': 'POST'
  },
  'POSTCarSimulationCapture': {
    'uri': '/car/simulationCapture',
    'pageId': '826',
    'page_uri': 'POST /car/simulationCapture',
    'title': '实际情况/模拟抓拍',
    'type': 'POST'
  },
  'POSTParkingOrderFinishByForceBeforeTime': {
    'uri': '/parkingOrder/finishByForceBeforeTime',
    'pageId': '868',
    'page_uri': 'POST /parkingOrder/finishByForceBeforeTime',
    'title': '实际情况/批量出场',
    'type': 'POST'
  },
  'GETParkingOrderReport': {
    'uri': '/parkingOrder/report',
    'pageId': [
      [
        [
          '323',
          '326'
        ],
        '377'
      ],
      '592'
    ],
    'page_uri': 'GET /parkingOrder/report',
    'title': '实际情况/主列表 有相同接口',
    'type': 'GET'
  },
  'GETParkingOrderDetails': {
    'uri': '/parkingOrder/{parkingOrderId}/details',
    'pageId': '372',
    'page_uri': 'GET /parkingOrder/{parkingOrderId}/details',
    'title': '停车订单/明细',
    'type': 'GET'
  },
  'GETParkingOrderPic': {
    'uri': '/parkingOrder/{parkingOrderId}/pic',
    'pageId': '373',
    'page_uri': 'GET /parkingOrder/{parkingOrderId}/pic',
    'title': '停车订单/抓拍证据',
    'type': 'GET'
  },
  'GETParkingOrderAreaOrder': {
    'uri': '/parkingOrder/{parkingOrderId}/areaOrder',
    'pageId': '374',
    'page_uri': 'GET /parkingOrder/{parkingOrderId}/areaOrder',
    'title': '停车订单/区订单',
    'type': 'GET'
  },
  'GETCarGroupByCar': {
    'uri': '/carGroup/byCar',
    'pageId': '375',
    'page_uri': 'GET /carGroup/byCar',
    'title': '目标车辆流水/所在车组',
    'type': 'GET'
  },
  'GETCarGroupMonthByCar': {
    'uri': '/carGroup/month/byCar',
    'pageId': '376',
    'page_uri': 'GET /carGroup/month/byCar',
    'title': '目标车辆流水/月租情况',
    'type': 'GET'
  },
  'GETAreaOrderReport': {
    'uri': '/areaOrder/report',
    'pageId': [
      '378',
      '381'
    ],
    'page_uri': 'GET /areaOrder/report',
    'title': '目标车辆流水/流水',
    'type': 'GET'
  },
  'GETParkingOrderInParking': {
    'uri': '/parkingOrder/inParking',
    'pageId': '379',
    'page_uri': 'GET /parkingOrder/inParking',
    'title': '在场车辆/主列表',
    'type': 'GET'
  },
  'POSTCarOut': {
    'uri': '/car/{carId}/out',
    'pageId': '380',
    'page_uri': 'POST /car/{carId}/out',
    'title': '在场车辆/强制出场',
    'type': 'POST'
  },
  'GETAreaOrderReportExp': {
    'uri': '/areaOrder/report/exp',
    'pageId': '382',
    'page_uri': 'GET /areaOrder/report/exp',
    'title': '异常放行/主列表（未使用）',
    'type': 'GET'
  },
  'GETDeviceSetting': {
    'uri': '/device/{deviceId}/setting',
    'pageId': '447',
    'page_uri': 'GET /device/{deviceId}/setting',
    'title': '物业停车场设置/api9（获取设备信息）？',
    'type': 'GET'
  },
  'POSTDeviceSetting': {
    'uri': '/device/{id}/setting',
    'pageId': '448',
    'page_uri': 'POST /device/{id}/setting',
    'title': '物业/停车场设置/api10（未使用）',
    'type': 'POST'
  },
  'POSTDevice': {
    'uri': '/device',
    'pageId': '494',
    'page_uri': 'POST /device/',
    'title': '停车场设置/绑定设备到车道 (新增设备)',
    'type': 'POST'
  },
  'GETFeeRuleMchPricingPlan': {
    'uri': '/feeRule/mchPricingPlan',
    'pageId': '511',
    'page_uri': 'GET /feeRule/mchPricingPlan',
    'title': '停车场设置 区域设置 根据物业MchId获取计费规则',
    'type': 'GET'
  },
  'GETDeviceDeviceControlPlan': {
    'uri': '/device/deviceControlPlan',
    'pageId': '526',
    'page_uri': 'GET /device/deviceControlPlan',
    'title': '停车场设置 获取设备方案列表',
    'type': 'GET'
  },
  'PUTParkingOrderPresence': {
    'uri': '/parkingOrder/{parkingOrderId}/presence',
    'pageId': '575',
    'page_uri': 'PUT /parkingOrder/{parkingOrderId}/presence',
    'title': '在场车辆/确认在场',
    'type': 'PUT'
  },
  'GETParkingOrderArea': {
    'uri': '/parkingOrder/area',
    'pageId': '576',
    'page_uri': 'GET /parkingOrder/area',
    'title': '在场车辆/区域及泊位情况',
    'type': 'GET'
  },
  'GETCustomGoRule': {
    'uri': '/customGoRule',
    'pageId': '634',
    'page_uri': 'GET /customGoRule',
    'title': '物业/停车场设置/自定义规则查询',
    'type': 'GET'
  },
  'POSTCustomGoRule': {
    'uri': '/customGoRule/{parkingId}',
    'pageId': '635',
    'page_uri': 'POST /customGoRule/{parkingId}',
    'title': '物业/停车场设置/自定义规则新增',
    'type': 'POST'
  },
  'PUTCustomGoRule': {
    'uri': '/customGoRule',
    'pageId': '636',
    'page_uri': 'PUT /customGoRule',
    'title': '物业/停车场设置/自定义规则修改',
    'type': 'PUT'
  },
  'DELETECustomGoRule': {
    'uri': '/customGoRule/{customId}',
    'pageId': '637',
    'page_uri': 'DELETE /customGoRule/{customId}',
    'title': '物业/停车场设置/自定义规则删除',
    'type': 'DELETE'
  },
  'GETParkingOrderInfo': {
    'uri': '/parkingOrder/info',
    'pageId': '1035',
    'page_uri': 'GET /parkingOrder/info',
    'title': '停车订单/订单详情',
    'type': 'GET'
  },
  'POSTAsyTaskExportParkingOrderReport': {
    'uri': '/asyTask/{asyTaskId}/exportParkingOrderReport',
    'pageId': '1063',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportParkingOrderReport',
    'title': '导出停车订单/主列表',
    'type': 'POST'
  },
  'GETChannelPlateNumberFilter': {
    'uri': '/channel/plateNumberFilter',
    'pageId': '1066',
    'page_uri': 'GET /channel/plateNumberFilter',
    'title': '车场过滤疑是非车牌',
    'type': 'GET'
  },
  'GETChannelListSecondRecognition': {
    'uri': '/channel/listSecondRecognition',
    'pageId': '1067',
    'page_uri': 'GET /channel/listSecondRecognition',
    'title': '二次识别开关内容获取',
    'type': 'GET'
  },
  'POSTChannelBatchSetSecondRecognition': {
    'uri': '/channel/batchSetSecondRecognition',
    'pageId': '1068',
    'page_uri': 'POST /channel/batchSetSecondRecognition',
    'title': '二次识别开关内容修改',
    'type': 'POST'
  },
  'PUTChannelSelfHelpEnter': {
    'uri': '/channel/selfHelpEnter',
    'pageId': '1106',
    'page_uri': 'PUT /channel/selfHelpEnter',
    'title': '车主自助申请入场开关设置',
    'type': 'PUT'
  },
  'GETChannelSelfHelpEnter': {
    'uri': '/channel/selfHelpEnter',
    'pageId': '1107',
    'page_uri': 'GET /channel/selfHelpEnter',
    'title': '车主自助申请入场开关查询',
    'type': 'GET'
  },
  'GETParkingOfflineFee': {
    'uri': '/parking/{parkingId}/offlineFee',
    'pageId': '1133',
    'page_uri': 'GET /parking/{parkingId}/offlineFee',
    'title': '离线费率/离线收费记录',
    'type': 'GET'
  },
  'GETChannelSecondRecognition': {
    'uri': '/channel/secondRecognition',
    'pageId': '1252',
    'page_uri': 'GET /channel/secondRecognition',
    'title': '二次识别记录',
    'type': 'GET'
  },
  'WSChannelSelected': {
    'uri': '/channel/selected',
    'pageId': '577',
    'page_uri': 'WS /channel/selected',
    'title': 'ws：选择出入口',
    'type': 'WS'
  },
  'WSNotify': {
    'uri': '/notify',
    'pageId': '582',
    'page_uri': 'WS /notify',
    'title': 'ws：事件通知',
    'type': 'WS'
  },
  'POSTParkingOrderFinishByHand': {
    'uri': '/parkingOrder/{parkingOrderId}/finishByHand',
    'pageId': [
      '586',
      '544'
    ],
    'page_uri': 'POST /parkingOrder/{parkingOrderId}/finishByHand',
    'title': '支付失败开闸',
    'type': 'POST'
  },
  'POSTChannelConfirmIn': {
    'uri': '/channel/{channelId}/confirm/in',
    'pageId': '587',
    'page_uri': 'POST /channel/{channelId}/confirm/in',
    'title': '确认入场（谢绝+放行）',
    'type': 'POST'
  },
  'POSTRecognitionByUrl': {
    'uri': '/recognition/byUrl',
    'pageId': '588',
    'page_uri': 'POST /recognition/byUrl',
    'title': '【搁置】车牌识别',
    'type': 'POST'
  },
  'POSTChannelConfirmOut': {
    'uri': '/channel/{channelId}/confirm/out',
    'pageId': '589',
    'page_uri': 'POST /channel/{channelId}/confirm/out',
    'title': '确认出场',
    'type': 'POST'
  },
  'POSTWaitConfirmMinFee': {
    'uri': '/waitConfirm/{waitConfirmId}/minFee',
    'pageId': '590',
    'page_uri': 'POST /waitConfirm/{waitConfirmId}/minFee',
    'title': '【搁置】最低资费结算',
    'type': 'POST'
  },
  'POSTChannelConfirmMatch': {
    'uri': '/channel/{channelId}/confirm/match',
    'pageId': '591',
    'page_uri': 'POST /channel/{channelId}/confirm/match',
    'title': '确认匹配',
    'type': 'POST'
  },
  'GETChannelOrder': {
    'uri': '/channel/{channelId}/order',
    'pageId': '593',
    'page_uri': 'GET /channel/{channelId}/order',
    'title': '最近的订单',
    'type': 'GET'
  },
  'GETParkingOrderInParkingSimilar': {
    'uri': '/parkingOrder/inParking/similar',
    'pageId': '599',
    'page_uri': 'GET /parkingOrder/inParking/similar',
    'title': '近似在场车辆列表',
    'type': 'GET'
  },
  'POSTAreaResetAreaSurplusBerth': {
    'uri': '/area/{areaId}/resetAreaSurplusBerth',
    'pageId': '653',
    'page_uri': 'POST /area/{areaId}/resetAreaSurplusBerth',
    'title': '手动修改泊位',
    'type': 'POST'
  },
  'GETAreaGetSurplusBerthWithInParking': {
    'uri': '/area/{areaId}/getSurplusBerthWithInParking',
    'pageId': '654',
    'page_uri': 'GET /area/{areaId}/getSurplusBerthWithInParking',
    'title': '根据在场车重置剩余车位数按钮',
    'type': 'GET'
  },
  'GETAreaGetSurplusBerth': {
    'uri': '/area/{areaId}/getSurplusBerth',
    'pageId': '655',
    'page_uri': 'GET /area/{areaId}/getSurplusBerth',
    'title': '获取剩余车位数',
    'type': 'GET'
  },
  'POSTParkingMountGuard': {
    'uri': '/parking/{parkingId}/mountGuard',
    'pageId': '1012',
    'page_uri': 'POST /parking/{parkingId}/mountGuard',
    'title': '保安上岗',
    'type': 'POST'
  },
  'POSTParkingCheckOut': {
    'uri': '/parking/{parkingId}/checkOut',
    'pageId': '1014',
    'page_uri': 'POST /parking/{parkingId}/checkOut',
    'title': '保安离岗（下班）',
    'type': 'POST'
  },
  'GETParkingMountGuardInfo': {
    'uri': '/parking/{parkingId}/mountGuardInfo',
    'pageId': '1020',
    'page_uri': 'GET /parking/{parkingId}/mountGuardInfo',
    'title': '获取保安上岗信息',
    'type': 'GET'
  },
  'GETParkingIsMountGuard': {
    'uri': '/parking/{parkingId}/isMountGuard',
    'pageId': '1022',
    'page_uri': 'GET /parking/{parkingId}/isMountGuard',
    'title': '判断保安是否上岗',
    'type': 'GET'
  },
  'GETMerchantList': {
    'uri': '/merchant/list',
    'pageId': '404',
    'page_uri': 'GET /merchant/list',
    'title': '商家列表',
    'type': 'GET'
  },
  'POSTMerchant': {
    'uri': '/merchant',
    'pageId': '405',
    'page_uri': 'POST /merchant/',
    'title': '批量添加商家',
    'type': 'POST'
  },
  'PUTMerchant': {
    'uri': '/merchant/{merId}',
    'pageId': '408',
    'page_uri': 'PUT /merchant/{merId}',
    'title': '修改商家信息',
    'type': 'PUT'
  },
  'POSTMerchantResetPwdAndSend': {
    'uri': '/merchant/{merchantId}/resetPwdAndSend',
    'pageId': '557',
    'page_uri': 'POST /merchant/{merchantId}/resetPwdAndSend',
    'title': '重置商家密码并发送短信',
    'type': 'POST'
  },
  'PUTMerchantPutMerCoupon': {
    'uri': '/merchant/putMerCoupon',
    'pageId': '662',
    'page_uri': 'PUT /merchant/putMerCoupon',
    'title': '优惠券设置（可应用到所有商家）',
    'type': 'PUT'
  },
  'GETMerchantCouponSet': {
    'uri': '/merchant/{merId}/couponSet',
    'pageId': '663',
    'page_uri': 'GET /merchant/{merId}/couponSet',
    'title': '查询单个商家的优惠券设置',
    'type': 'GET'
  },
  'GETMerchantGetParkingIdAndParkingName': {
    'uri': '/merchant/{merchantId}/getParkingIdAndParkingName',
    'pageId': '688',
    'page_uri': 'GET /merchant/{merchantId}/getParkingIdAndParkingName',
    'title': '获取商家适用的车场ID和名字',
    'type': 'GET'
  },
  'DELETEMerchant': {
    'uri': '/merchant/{merchantId}',
    'pageId': '869',
    'page_uri': 'DELETE /merchant/{merchantId}',
    'title': '删除商家',
    'type': 'DELETE'
  },
  'POSTMerchantRecharge': {
    'uri': '/merchant/{merId}/recharge',
    'pageId': '942',
    'page_uri': 'POST /merchant/{merId}/recharge',
    'title': '商家充值',
    'type': 'POST'
  },
  'POSTCarGroupFreeImport': {
    'uri': '/carGroup/free/import',
    'pageId': '600',
    'page_uri': 'POST /carGroup/free/import',
    'title': '导入免费车',
    'type': 'POST'
  },
  'GETCarGroupBooking': {
    'uri': '/carGroup/booking',
    'pageId': '390',
    'page_uri': 'GET /carGroup/booking/',
    'title': '挂单车列表/左侧列表',
    'type': 'GET'
  },
  'POSTCarGroupBooking': {
    'uri': '/carGroup/booking',
    'pageId': '391',
    'page_uri': 'POST /carGroup/booking',
    'title': '挂单车列表/添加挂单车组',
    'type': 'POST'
  },
  'GETCarGroupBookingDetails': {
    'uri': '/carGroup/booking/{carGroupId}/details',
    'pageId': '392',
    'page_uri': 'GET /carGroup/booking/{carGroupId}/details',
    'title': '挂单车列表/车组具体信息',
    'type': 'GET'
  },
  'PUTCarGroupBooking': {
    'uri': '/carGroup/booking/{id}',
    'pageId': '393',
    'page_uri': 'PUT /carGroup/booking/{id}',
    'title': '挂单车列表/修改挂单车信息',
    'type': 'PUT'
  },
  'GETCarGroupFree': {
    'uri': '/carGroup/free',
    'pageId': '398',
    'page_uri': 'GET /carGroup/free',
    'title': '免费车列表/免费车组',
    'type': 'GET'
  },
  'POSTCarGroupFree': {
    'uri': '/carGroup/free',
    'pageId': '399',
    'page_uri': 'POST /carGroup/free',
    'title': '免费车列表/添加免费车组',
    'type': 'POST'
  },
  'POSTCarGroupFreeCar': {
    'uri': '/carGroup/free/{id}/car',
    'pageId': '401',
    'page_uri': 'POST /carGroup/free/{id}/car',
    'title': '免费车列表/添加免费车',
    'type': 'POST'
  },
  'PUTCarGroupFree': {
    'uri': '/carGroup/free/{carGroupId}',
    'pageId': '402',
    'page_uri': 'PUT /carGroup/free/{carGroupId}',
    'title': '免费车列表/修改免费车',
    'type': 'PUT'
  },
  'DELETECarGroupBooking': {
    'uri': '/carGroup/booking/{carGroupId}',
    'pageId': '524',
    'page_uri': 'DELETE /carGroup/booking/{carGroupId}',
    'title': '挂单车列表/左侧列表删除',
    'type': 'DELETE'
  },
  'POSTCarGroupCustom': {
    'uri': '/carGroup/custom',
    'pageId': '810',
    'page_uri': 'POST /carGroup/custom',
    'title': '自定义车组列表/添加自定义车组',
    'type': 'POST'
  },
  'GETCarGroupCustom': {
    'uri': '/carGroup/custom',
    'pageId': '812',
    'page_uri': 'GET /carGroup/custom',
    'title': '自定义车组列表/查询左侧列表',
    'type': 'GET'
  },
  'PUTCarGroupCustom': {
    'uri': '/carGroup/custom/{carGroupId}',
    'pageId': '813',
    'page_uri': 'PUT /carGroup/custom/{carGroupId}',
    'title': '自定义车组列表/修改自定义车组基础信息',
    'type': 'PUT'
  },
  'POSTCarGroupHourRent': {
    'uri': '/carGroup/hourRent',
    'pageId': '1254',
    'page_uri': 'POST /carGroup/hourRent',
    'title': '时租车列表/添加时租车',
    'type': 'POST'
  },
  'GETCarGroupHourRent': {
    'uri': '/carGroup/hourRent',
    'pageId': '1255',
    'page_uri': 'GET /carGroup/hourRent',
    'title': '时租车列表/查询时租车列表',
    'type': 'GET'
  },
  'PUTCarGroupHourRent': {
    'uri': '/carGroup/hourRent/{carGroupId}',
    'pageId': '1256',
    'page_uri': 'PUT /carGroup/hourRent/{carGroupId}',
    'title': '时租车列表/修改时租车信息',
    'type': 'PUT'
  },
  'PUTCarGroupHourRentRenewal': {
    'uri': '/carGroup/hourRent/{carGroupId}/renewal',
    'pageId': '1257',
    'page_uri': 'PUT /carGroup/hourRent/{carGroupId}/renewal',
    'title': '时租车列表/时租车续租',
    'type': 'PUT'
  },
  'DELETECarGroupHourRent': {
    'uri': '/carGroup/hourRent/{carGroupId}',
    'pageId': '1258',
    'page_uri': 'DELETE /carGroup/hourRent/{carGroupId}',
    'title': '时租车列表/时租车删除',
    'type': 'DELETE'
  },
  'GETCarGroupCar': {
    'uri': '/carGroup/{carGroupId}/car',
    'pageId': '387',
    'page_uri': 'GET /carGroup/{carGroupId}/car',
    'title': '车组列表/组内车列表',
    'type': 'GET'
  },
  'POSTCarGroupCar': {
    'uri': '/carGroup/{carGroupId}/car',
    'pageId': '388',
    'page_uri': 'POST /carGroup/{carGroupId}/car',
    'title': '车组列表/添加组内车',
    'type': 'POST'
  },
  'GETCarGroupChangeCheck': {
    'uri': '/carGroup/changeCheck',
    'pageId': '542',
    'page_uri': 'GET /carGroup/changeCheck',
    'title': '车组列表/检测车辆',
    'type': 'GET'
  },
  'POSTCarGroupTypeCar1': {
    'uri': '/carGroupType/car1',
    'pageId': '543',
    'page_uri': 'POST /carGroupType/car1',
    'title': '车组列表/加入车组享用车辆 接口作废（）',
    'type': 'POST'
  },
  'PUTCarGroupCar': {
    'uri': '/carGroup/{carGroupId}/car',
    'pageId': '389',
    'page_uri': 'PUT /carGroup/{carGroupId}/car',
    'title': '车组列表/修改单个组内车',
    'type': 'PUT'
  },
  'DELETECarGroupCar': {
    'uri': '/carGroup/{carGroupId}/car',
    'pageId': '397',
    'page_uri': 'DELETE /carGroup/{carGroupId}/car',
    'title': '车组列表/删除组内车',
    'type': 'DELETE'
  },
  'GETCarGroupMonthRent': {
    'uri': '/carGroup/monthRent',
    'pageId': [
      '383',
      '384'
    ],
    'page_uri': 'GET /carGroup/monthRent',
    'title': '月租车列表/左侧列表',
    'type': 'GET'
  },
  'GETCarGroupMonthRentStoppingTimeGraph': {
    'uri': '/carGroup/monthRent/{carGroupId}/stoppingTimeGraph',
    'pageId': '981',
    'page_uri': 'GET /carGroup/monthRent/{carGroupId}/stoppingTimeGraph',
    'title': '月租车列表/组内车/停车时间表',
    'type': 'GET'
  },
  'POSTCarGroupMonthRent': {
    'uri': '/carGroup/monthRent',
    'pageId': '385',
    'page_uri': 'POST /carGroup/monthRent',
    'title': '月租车列表/添加',
    'type': 'POST'
  },
  'POSTCarGroupImport': {
    'uri': '/carGroup/import',
    'pageId': '594',
    'page_uri': 'POST /carGroup/import',
    'title': '导入月租车',
    'type': 'POST'
  },
  'POSTCarGroupOtherCarGroupImport': {
    'uri': '/carGroup/otherCarGroup/import',
    'pageId': '1065',
    'page_uri': 'POST /carGroup/otherCarGroup/import',
    'title': '导入其他车组',
    'type': 'POST'
  },
  'POSTCarGroupMonthRentRenewal': {
    'uri': '/carGroup/monthRent/{carGroupId}/renewal',
    'pageId': '386',
    'page_uri': 'POST /carGroup/monthRent/{carGroupId}/renewal',
    'title': '月租车列表/修改续租',
    'type': 'POST'
  },
  'PUTCarGroupMonthRent': {
    'uri': '/carGroup/monthRent/{carGroupId}',
    'pageId': '496',
    'page_uri': 'PUT /carGroup/monthRent/{carGroupId}',
    'title': '月租车列表/修改基础信息',
    'type': 'PUT'
  },
  'GETCarGroupMonthRentDetails': {
    'uri': '/carGroup/monthRent/{carGroupId}/details',
    'pageId': '503',
    'page_uri': 'GET /carGroup/monthRent/{carGroupId}/details',
    'title': '月租车列表/左侧列表详情',
    'type': 'GET'
  },
  'DELETECarGroupMonthRent': {
    'uri': '/carGroup/monthRent/{carGroupId}',
    'pageId': '504',
    'page_uri': 'DELETE /carGroup/monthRent/{carGroupId}',
    'title': '月租车列表/左侧列表删除',
    'type': 'DELETE'
  },
  'DELETECarGroupCleanCarGroup': {
    'uri': '/carGroup/cleanCarGroup',
    'pageId': '658',
    'page_uri': 'DELETE /carGroup/cleanCarGroup',
    'title': '月租车列表/批量车组清理',
    'type': 'DELETE'
  },
  'POSTAsyTaskExportMonthlyRental': {
    'uri': '/asyTask/{asyTaskId}/exportMonthlyRental',
    'pageId': '944',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportMonthlyRental',
    'title': '导出月租车',
    'type': 'POST'
  },
  'POSTAsyTaskImportMonthlyRental': {
    'uri': '/asyTask/{asyTaskId}/importMonthlyRental',
    'pageId': '945',
    'page_uri': 'POST /asyTask/{asyTaskId}/importMonthlyRental',
    'title': '导入月租车开启异步任务',
    'type': 'POST'
  },
  'POSTAsyTaskExportOtherCarGroup': {
    'uri': '/asyTask/{asyTaskId}/exportOtherCarGroup',
    'pageId': '1064',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportOtherCarGroup',
    'title': '导出其他车组',
    'type': 'POST'
  },
  'GETCarGroupBookingReport': {
    'uri': '/carGroup/booking/report',
    'pageId': '415',
    'page_uri': 'GET /carGroup/booking/report',
    'title': '挂单车报表/车组列表',
    'type': 'GET'
  },
  'GETCarGroupBookingStatistics': {
    'uri': '/carGroup/booking/statistics',
    'pageId': '416',
    'page_uri': 'GET /carGroup/booking/statistics',
    'title': '挂单车报表/统计信息',
    'type': 'GET'
  },
  'GETCarGroupBookingDetail': {
    'uri': '/carGroup/booking/detail',
    'pageId': '417',
    'page_uri': 'GET /carGroup/booking/detail',
    'title': '物业/挂单车报表/明细',
    'type': 'GET'
  },
  'GETCouponReport': {
    'uri': '/coupon/report',
    'pageId': '418',
    'page_uri': 'GET /coupon/report',
    'title': '优惠券报表/商家列表',
    'type': 'GET'
  },
  'GETMerchantStatistics': {
    'uri': '/merchant/{merId}/statistics',
    'pageId': '419',
    'page_uri': 'GET /merchant/{merId}/statistics',
    'title': '优惠券报表/统计信息',
    'type': 'GET'
  },
  'GETMerchantDetail': {
    'uri': '/merchant/{merId}/detail',
    'pageId': '420',
    'page_uri': 'GET /merchant/{merId}/detail',
    'title': '优惠券报表/明细',
    'type': 'GET'
  },
  'GETMoneyStatisticsDay': {
    'uri': '/money/statistics/day',
    'pageId': '421',
    'page_uri': 'GET /money/statistics/day',
    'title': '日报/统计信息',
    'type': 'GET'
  },
  'GETMoneyReportDay': {
    'uri': '/money/report/day',
    'pageId': '422',
    'page_uri': 'GET /money/report/day',
    'title': '日报/列表',
    'type': 'GET'
  },
  'GETMoneyStatisticsMonth': {
    'uri': '/money/statistics/month',
    'pageId': '423',
    'page_uri': 'GET /money/statistics/month',
    'title': '月报/统计信息',
    'type': 'GET'
  },
  'GETMoneyReportMonth': {
    'uri': '/money/report/month',
    'pageId': '424',
    'page_uri': 'GET /money/report/month',
    'title': '月报/列表',
    'type': 'GET'
  },
  'GETMoneyDetailList': {
    'uri': '/money/detail/list',
    'pageId': '629',
    'page_uri': 'GET /money/detail/list',
    'title': '账目明细/列表',
    'type': 'GET'
  },
  'GETMoneyStatisticsRealtime': {
    'uri': '/money/statistics/realtime',
    'pageId': '630',
    'page_uri': 'GET /money/statistics/realtime',
    'title': '账目明细/统计信息',
    'type': 'GET'
  },
  'POSTAsyTaskExportDayFinace': {
    'uri': '/asyTask/{asyTaskId}/exportDayFinace',
    'pageId': '704',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportDayFinace',
    'title': '导出日报报表',
    'type': 'POST'
  },
  'POSTAsyTaskExportMonlyFinace': {
    'uri': '/asyTask/{asyTaskId}/exportMonlyFinace',
    'pageId': '705',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportMonlyFinace',
    'title': '导出月报报表',
    'type': 'POST'
  },
  'POSTAsyTaskExportDetailedAccounts': {
    'uri': '/asyTask/{asyTaskId}/exportDetailedAccounts',
    'pageId': '706',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportDetailedAccounts',
    'title': '导出账目明细报表',
    'type': 'POST'
  },
  'POSTAsyTaskExportCouponMerList': {
    'uri': '/asyTask/{asyTaskId}/exportCouponMerList',
    'pageId': '707',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportCouponMerList',
    'title': '导出商家列表报表',
    'type': 'POST'
  },
  'POSTAsyTaskExportCouponMerAccounts': {
    'uri': '/asyTask/{asyTaskId}/exportCouponMerAccounts',
    'pageId': '708',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportCouponMerAccounts',
    'title': '导出单个商家优惠券明细报表',
    'type': 'POST'
  },
  'POSTAsyTaskExportCouponLotMerAccounts': {
    'uri': '/asyTask/{asyTaskId}/exportCouponLotMerAccounts',
    'pageId': '709',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportCouponLotMerAccounts',
    'title': '导出多个商家(根据停车场筛选)优惠券明细',
    'type': 'POST'
  },
  'GETMerchantChargeStatistics': {
    'uri': '/merchant/{merId}/chargeStatistics',
    'pageId': '936',
    'page_uri': 'GET /merchant/{merId}/chargeStatistics',
    'title': '商家储值记录/统计信息',
    'type': 'GET'
  },
  'GETMerchantChargeDetail': {
    'uri': '/merchant/{merId}/chargeDetail',
    'pageId': '937',
    'page_uri': 'GET /merchant/{merId}/chargeDetail',
    'title': '商家储值记录/明细',
    'type': 'GET'
  },
  'POSTAsyTaskExportCouponMerChargeAccounts': {
    'uri': '/asyTask/{asyTaskId}/exportCouponMerChargeAccounts',
    'pageId': '938',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportCouponMerChargeAccounts',
    'title': '商家储值记录/导出单个商家充值明细报表',
    'type': 'POST'
  },
  'POSTAsyTaskExportCouponLotMerChargeAccounts': {
    'uri': '/asyTask/{asyTaskId}/exportCouponLotMerChargeAccounts',
    'pageId': '939',
    'page_uri': 'POST /asyTask/{asyTaskId}/exportCouponLotMerChargeAccounts',
    'title': '商家储值记录/导出多个商家(根据停车场筛选)充值明细',
    'type': 'POST'
  },
  'GETMoneyAccountsList': {
    'uri': '/money/accountsList',
    'pageId': '1013',
    'page_uri': 'GET /money/accountsList',
    'title': '交班交账报表/交账列表',
    'type': 'GET'
  },
  'GETChannelStatistics': {
    'uri': '/channel/statistics',
    'pageId': '1018',
    'page_uri': 'GET /channel/statistics',
    'title': '车道统计报表/统计列表',
    'type': 'GET'
  },
  'POSTMoneyHandleAccounts': {
    'uri': '/money/handleAccounts',
    'pageId': '1019',
    'page_uri': 'POST /money/handleAccounts',
    'title': '交班交账报表/交账',
    'type': 'POST'
  },
  'GETMoneyAccountsListCashOpening': {
    'uri': '/money/accountsList/cashOpening',
    'pageId': '1030',
    'page_uri': 'GET /money/accountsList/cashOpening',
    'title': '交班交账报表/交账列表/收现金开闸明细',
    'type': 'GET'
  },
  'GETMoneyAccountsListManualRelease': {
    'uri': '/money/accountsList/manualRelease',
    'pageId': '1031',
    'page_uri': 'GET /money/accountsList/manualRelease',
    'title': '交班交账报表/交账列表/手动折扣放行明细',
    'type': 'GET'
  },
  'GETMoneyAccountsListForcedOpening': {
    'uri': '/money/accountsList/forcedOpening',
    'pageId': '1032',
    'page_uri': 'GET /money/accountsList/forcedOpening',
    'title': '交班交账报表/交账列表/强制开闸明细',
    'type': 'GET'
  },
  'GETMoneyAccountsListWaitPayMoney': {
    'uri': '/money/accountsList/waitPayMoney',
    'pageId': '1033',
    'page_uri': 'GET /money/accountsList/waitPayMoney',
    'title': '交班交账报表/交账列表/仍待支付订单明细',
    'type': 'GET'
  },
  'GETInvoiceInvoiceRecord': {
    'uri': '/invoice/invoiceRecord',
    'pageId': '1193',
    'page_uri': 'GET /invoice/invoiceRecord',
    'title': '开票记录查询',
    'type': 'GET'
  },
  'GETInvoiceInvoiceCar': {
    'uri': '/invoice/invoiceCar',
    'pageId': '1194',
    'page_uri': 'GET /invoice/invoiceCar',
    'title': '车辆开票认证查询',
    'type': 'GET'
  },
  'GETVoice': {
    'uri': '/voice',
    'pageId': '497',
    'page_uri': 'GET /voice',
    'title': '屏幕声音方案/api1 (查询)',
    'type': 'GET'
  },
  'GETVoiceDetails': {
    'uri': '/voice/{voiceId}/details',
    'pageId': '498',
    'page_uri': 'GET /voice/{voiceId}/details',
    'title': '屏幕声音方案/api2 (方案详情)',
    'type': 'GET'
  },
  'POSTVoice': {
    'uri': '/voice',
    'pageId': '499',
    'page_uri': 'POST /voice',
    'title': '屏幕声音方案/api3(新增方案)',
    'type': 'POST'
  },
  'PUTVoice': {
    'uri': '/voice/{controlPlanId}',
    'pageId': '500',
    'page_uri': 'PUT /voice/{controlPlanId}',
    'title': '屏幕声音方案/api4(修改方案)',
    'type': 'PUT'
  },
  'DELETEVoice': {
    'uri': '/voice/{controlPlanId}',
    'pageId': '501',
    'page_uri': 'DELETE /voice/{controlPlanId}',
    'title': '屏幕声音方案/api5 (删除)',
    'type': 'DELETE'
  },
  'GETFeeRuleList': {
    'uri': '/feeRule/{mchId}/list',
    'pageId': '527',
    'page_uri': 'GET /feeRule/{mchId}/list',
    'title': '计费方案/api1 (方案列表)',
    'type': 'GET'
  },
  'POSTFeeRule': {
    'uri': '/feeRule',
    'pageId': '528',
    'page_uri': 'POST /feeRule',
    'title': '计费方案/api2 (新增子项)',
    'type': 'POST'
  },
  'GETFeeRuleDetails': {
    'uri': '/feeRule/{planId}/details',
    'pageId': '529',
    'page_uri': 'GET /feeRule/{planId}/details',
    'title': '计费方案/api3 (方案详情)',
    'type': 'GET'
  },
  'PUTFeeRuleDetails': {
    'uri': '/feeRule/{planId}/details',
    'pageId': '530',
    'page_uri': 'PUT /feeRule/{planId}/details',
    'title': '计费方案/api4 (修改详情)',
    'type': 'PUT'
  },
  'PUTFeeRulePlanName': {
    'uri': '/feeRule/{mchPlanId}/planName',
    'pageId': '531',
    'page_uri': 'PUT /feeRule/{mchPlanId}/planName',
    'title': '计费方案/api5 (修改名称)',
    'type': 'PUT'
  },
  'DELETEFeeRule': {
    'uri': '/feeRule/{planId}',
    'pageId': '532',
    'page_uri': 'DELETE /feeRule/{planId}/',
    'title': '计费方案/api6 (删除方案)',
    'type': 'DELETE'
  },
  'GETAreaAllAndIgnore': {
    'uri': '/area/allAndIgnore',
    'pageId': '537',
    'page_uri': 'GET /area/allAndIgnore',
    'title': '停车场设置/车道/获取所有区并剔除指定id',
    'type': 'GET'
  },
  'GETMchLog': {
    'uri': '/mch/log',
    'pageId': '640',
    'page_uri': 'GET  /mch/log',
    'title': '操作日志-查询',
    'type': 'GET'
  },
  'GETMchOtherLog': {
    'uri': '/mch/OtherLog',
    'pageId': '641',
    'page_uri': 'GET  /mch/OtherLog',
    'title': '其他操作日志-查询',
    'type': 'GET'
  },
  'GETFeeRuleCountFeeSimulator': {
    'uri': '/feeRule/{planId}/countFeeSimulator',
    'pageId': '771',
    'page_uri': 'GET /feeRule/{planId}/countFeeSimulator',
    'title': '计费方案/计算模拟器',
    'type': 'GET'
  },
  'GETParkingMountGuard': {
    'uri': '/parking/{parkingId}/mountGuard',
    'pageId': '1015',
    'page_uri': 'GET  /parking/{parkingId}/mountGuard',
    'title': '上岗离岗记录-查询',
    'type': 'GET'
  },
  'POSTParkingCheckOutByForce': {
    'uri': '/parking/{parkingId}/checkOutByForce',
    'pageId': '1028',
    'page_uri': 'POST  /parking/{parkingId}/checkOutByForce',
    'title': '强制离岗',
    'type': 'POST'
  },
  'GETSysInfoDict': {
    'uri': '/sysInfo/dict',
    'pageId': '469',
    'page_uri': 'GET /sysInfo/dict',
    'title': '枚举',
    'type': 'GET'
  },
  'GETParking': {
    'uri': '/parking',
    'pageId': '371',
    'page_uri': 'GET /parking/',
    'title': '停车场列表',
    'type': 'GET'
  },
  'GETEmployeeList': {
    'uri': '/employee/list',
    'pageId': '486',
    'page_uri': 'GET /employee/list',
    'title': '用户名搜索',
    'type': 'GET'
  },
  'GETMchList': {
    'uri': '/mch/list',
    'pageId': '487',
    'page_uri': 'GET /mch/list',
    'title': '物业名搜索',
    'type': 'GET'
  },
  'GETAccList': {
    'uri': '/acc/list',
    'pageId': '488',
    'page_uri': 'GET /acc/list',
    'title': '账号搜索',
    'type': 'GET'
  },
  'GETRoleByMch': {
    'uri': '/role/byMch',
    'pageId': '538',
    'page_uri': 'GET /role/byMch',
    'title': '获取当前角色列表',
    'type': 'GET'
  },
  'GETMchListSonProxy': {
    'uri': '/mch/list/sonProxy',
    'pageId': '620',
    'page_uri': 'GET /mch/list/sonProxy',
    'title': '获得旗下经销',
    'type': 'GET'
  },
  'GETMchListSonEndUsr': {
    'uri': '/mch/list/sonEndUsr',
    'pageId': '621',
    'page_uri': 'GET /mch/list/sonEndUsr',
    'title': '获得旗下物业',
    'type': 'GET'
  },
  'GETChannelByParking': {
    'uri': '/channel/byParking',
    'pageId': '1034',
    'page_uri': 'GET /channel/byParking',
    'title': '车道获取（通过车场）',
    'type': 'GET'
  },
  'GETAccIsMountGuard': {
    'uri': '/acc/isMountGuard',
    'pageId': '1040',
    'page_uri': 'GET /acc/isMountGuard',
    'title': '获取上离岗',
    'type': 'GET'
  },
  'GETParkingHighCostList': {
    'uri': '/parking/highCostList',
    'pageId': '1108',
    'page_uri': 'GET /parking/highCostList',
    'title': '获取告警/高额计费列表',
    'type': 'GET'
  },
  'GETParkingSpecialCarGroupList': {
    'uri': '/parking/specialCarGroupList',
    'pageId': '1109',
    'page_uri': 'GET /parking/specialCarGroupList',
    'title': '获取告警/特定车组入场列表',
    'type': 'GET'
  },
  'POSTParkingSetWarningData': {
    'uri': '/parking/setWarningData',
    'pageId': '1110',
    'page_uri': 'POST /parking/setWarningData',
    'title': '告警/设置告警',
    'type': 'POST'
  },
  'POSTAccSetWarningStatus': {
    'uri': '/acc/{accId}/setWarningStatus',
    'pageId': '1112',
    'page_uri': 'POST /acc/{accId}/setWarningStatus',
    'title': '告警/设置告警开关',
    'type': 'POST'
  },
  'POSTCarGroupCarGroupCount': {
    'uri': '/carGroup/carGroupCount',
    'pageId': '1113',
    'page_uri': 'POST /carGroup/carGroupCount',
    'title': '获取特定车组车数量',
    'type': 'POST'
  },
  'GETParkingWarningDot': {
    'uri': '/parking/warningDot',
    'pageId': '1117',
    'page_uri': 'GET /parking/warningDot',
    'title': '获取告警/告警小红点',
    'type': 'GET'
  },
  'GETParkingWarningOriginData': {
    'uri': '/parking/warningOriginData',
    'pageId': '1171',
    'page_uri': 'GET /parking/warningOriginData',
    'title': '获取告警/告警初始值',
    'type': 'GET'
  },
  'POSTAccLogIn': {
    'uri': '/acc/logIn',
    'pageId': '507',
    'page_uri': 'POST /acc/logIn',
    'title': '登录',
    'type': 'POST'
  },
  'POSTAccLogOut': {
    'uri': '/acc/logOut',
    'pageId': '508',
    'page_uri': 'POST /acc/logOut',
    'title': '登出',
    'type': 'POST'
  },
  'GETParkingAdminTel': {
    'uri': '/parking/{parkingId}/admin/tel',
    'pageId': '453',
    'page_uri': 'GET /parking/{parkingId}/admin/tel',
    'title': '通用/保安电话',
    'type': 'GET'
  },
  'GETParkingFeeRule': {
    'uri': '/parking/{parkingId}/feeRule',
    'pageId': '460',
    'page_uri': 'GET /parking/{parkingId}/feeRule',
    'title': '通用/车场收费说明',
    'type': 'GET'
  },
  'GETWxSignIn': {
    'uri': '/wx/signIn',
    'pageId': '506',
    'page_uri': 'GET /wx/signIn',
    'title': '通用/微信登录',
    'type': 'GET'
  },
  'GETAliSignIn': {
    'uri': '/ali/signIn',
    'pageId': '795',
    'page_uri': 'GET /ali/signIn',
    'title': '通用/支付宝登录',
    'type': 'GET'
  },
  'GETParkingParkingHelp': {
    'uri': '/parking/parkingHelp',
    'pageId': '1039',
    'page_uri': 'GET /parking/parkingHelp',
    'title': '帮助页/值守人电话',
    'type': 'GET'
  },
  'GETChannelChannelRule': {
    'uri': '/channel/{channelId}/channelRule',
    'pageId': '1102',
    'page_uri': 'GET /channel/{channelId}/channelRule',
    'title': '帮助页/是否允许临时车放行',
    'type': 'GET'
  },
  'GETCarAuthCode': {
    'uri': '/car/authCode',
    'pageId': '1103',
    'page_uri': 'GET /car/authCode',
    'title': '自助入场页/获取验证码',
    'type': 'GET'
  },
  'GETCarCheckCode': {
    'uri': '/car/checkCode',
    'pageId': '1104',
    'page_uri': 'GET /car/checkCode',
    'title': '自助入场页/校验验证码并入场（如正确）',
    'type': 'GET'
  },
  'POSTCarWait2Enter': {
    'uri': '/car/wait2Enter',
    'pageId': '1118',
    'page_uri': 'POST /car/wait2Enter',
    'title': '自助入场页/车位满等待入场',
    'type': 'POST'
  },
  'POSTChannelIn': {
    'uri': '/channel/{channelId}/in',
    'pageId': '452',
    'page_uri': 'POST /channel/{channelId}/in',
    'title': '入门页/开闸入场',
    'type': 'POST'
  },
  'POSTCarBind': {
    'uri': '/car/bind',
    'pageId': '454',
    'page_uri': 'POST /car/bind',
    'title': '绑定页/绑定车辆',
    'type': 'POST'
  },
  'GETCarMyCar': {
    'uri': '/car/myCar',
    'pageId': '455',
    'page_uri': 'GET /car/myCar',
    'title': '绑定页/我的车辆',
    'type': 'GET'
  },
  'POSTCarUnbind': {
    'uri': '/car/unbind',
    'pageId': '509',
    'page_uri': 'POST /car/unbind',
    'title': '绑定页/解绑车辆',
    'type': 'POST'
  },
  'GETParkingOrderMyOrders': {
    'uri': '/parkingOrder/myOrders',
    'pageId': '456',
    'page_uri': 'GET /parkingOrder/myOrders',
    'title': '订单页/我的订单',
    'type': 'GET'
  },
  'POSTParkingOrderPayWx': {
    'uri': '/parkingOrder/{parkingOrderId}/payWx',
    'pageId': '457',
    'page_uri': 'POST /parkingOrder/{parkingOrderId}/payWx',
    'title': '支付页/微信支付',
    'type': 'POST'
  },
  'GETParkingOrderPayInfo': {
    'uri': '/parkingOrder/payInfo',
    'pageId': [
      '458',
      '462'
    ],
    'page_uri': 'GET /parkingOrder/payInfo',
    'title': '支付页/订单信息',
    'type': 'GET'
  },
  'POSTParkingOrderPayAli': {
    'uri': '/parkingOrder/{parkingOrderId}/payAli',
    'pageId': '505',
    'page_uri': 'POST /parkingOrder/{parkingOrderId}/payAli',
    'title': '支付页/支付宝支付',
    'type': 'POST'
  },
  'POSTParkingOrderPayPp': {
    'uri': '/parkingOrder/{parkingOrderId}/payPp',
    'pageId': '559',
    'page_uri': 'POST /parkingOrder/{parkingOrderId}/payPp',
    'title': '支付页/PP支付',
    'type': 'POST'
  },
  'GETCouponListAndSelected': {
    'uri': '/coupon/listAndSelected',
    'pageId': '459',
    'page_uri': 'GET /coupon/listAndSelected',
    'title': '优惠券页/优惠券列表',
    'type': 'GET'
  },
  'POSTCouponTypePostQRCode': {
    'uri': '/couponType/{couponTypeId}/postQRCode',
    'pageId': '841',
    'page_uri': 'POST /couponType/{couponTypeId}/postQRCode',
    'title': '生成优惠券类型二维码url',
    'type': 'POST'
  },
  'POSTCouponCarOwnerCheckQRCode': {
    'uri': '/coupon/carOwner/checkQRCode',
    'pageId': '842',
    'page_uri': 'POST /coupon/carOwner/checkQRCode',
    'title': '检测进入页面的二维码是否失效',
    'type': 'POST'
  },
  'GETCouponCarOwnerCheckCarInParking': {
    'uri': '/coupon/carOwner/checkCarInParking',
    'pageId': '843',
    'page_uri': 'GET /coupon/carOwner/checkCarInParking',
    'title': '（车主页面）检测该车辆是否有未完成的场订单',
    'type': 'GET'
  },
  'GETCouponCarOwnerGetCouponInfo': {
    'uri': '/coupon/carOwner/getCouponInfo',
    'pageId': '875',
    'page_uri': 'GET /coupon/carOwner/getCouponInfo',
    'title': '进入页面后获取优惠券的相关信息',
    'type': 'GET'
  },
  'POSTCouponCarOwnerBindByCouponPackage': {
    'uri': '/coupon/carOwner/bindByCouponPackage',
    'pageId': '552',
    'page_uri': 'POST /coupon/carOwner/bindByCouponPackage',
    'title': '从券包领券',
    'type': 'POST'
  },
  'POSTCouponCarOwnerBind': {
    'uri': '/coupon/carOwner/bind',
    'pageId': '844',
    'page_uri': 'POST /coupon/carOwner/bind',
    'title': '(车主页面)发券(L)',
    'type': 'POST'
  },
  'POSTCouponCarOwnerBindByPaperCoupon': {
    'uri': '/coupon/carOwner/bindByPaperCoupon',
    'pageId': '876',
    'page_uri': 'POST /coupon/carOwner/bindByPaperCoupon',
    'title': '纸质优惠券领券',
    'type': 'POST'
  },
  'GETCarInvoiceInvoiceRecord': {
    'uri': '/carInvoice/invoiceRecord',
    'pageId': '1212',
    'page_uri': 'GET /carInvoice/invoiceRecord',
    'title': '开票记录',
    'type': 'GET'
  },
  'POSTCarInvoiceInvoiceCar': {
    'uri': '/carInvoice/invoiceCar',
    'pageId': '1213',
    'page_uri': 'POST /carInvoice/invoiceCar',
    'title': '车辆认证记录',
    'type': 'POST'
  },
  'GETCarInvoiceInvoiceAppCode': {
    'uri': '/carInvoice/invoiceAppCode',
    'pageId': '1215',
    'page_uri': 'GET /carInvoice/invoiceAppCode',
    'title': '车辆行驶证ocr获取code',
    'type': 'GET'
  },
  'GETCarInvoiceInvoiceOrders': {
    'uri': '/carInvoice/invoiceOrders',
    'pageId': '1219',
    'page_uri': 'GET /carInvoice/invoiceOrders',
    'title': '查询可开票订单',
    'type': 'GET'
  },
  'GETWxWxUserInfo': {
    'uri': '/wx/wxUserInfo',
    'pageId': '1220',
    'page_uri': 'GET /wx/wxUserInfo',
    'title': '获取微信用户信息',
    'type': 'GET'
  },
  'GETCarInvoiceInvoiceTitle': {
    'uri': '/carInvoice/invoiceTitle',
    'pageId': '1223',
    'page_uri': 'GET /carInvoice/invoiceTitle',
    'title': '查询开票抬头信息',
    'type': 'GET'
  },
  'POSTCarInvoiceOpenInvoice': {
    'uri': '/carInvoice/openInvoice',
    'pageId': '1225',
    'page_uri': 'POST /carInvoice/openInvoice',
    'title': '开票',
    'type': 'POST'
  },
  'GETChannelGetChannelOrder': {
    'uri': '/channel/{parkingId}/getChannelOrder',
    'pageId': '614',
    'page_uri': 'GET /channel/{parkingId}/getChannelOrder',
    'title': '现场管理-待处理列表',
    'type': 'GET'
  },
  'POSTAccBindWx': {
    'uri': '/acc/bindWx',
    'pageId': '816',
    'page_uri': 'POST /acc/bindWx',
    'title': '商户H5登录相关/绑定微信',
    'type': 'POST'
  },
  'DELETEAccBindWx': {
    'uri': '/acc/bindWx',
    'pageId': '817',
    'page_uri': 'DELETE /acc/bindWx',
    'title': '商户H5登录相关/解绑微信',
    'type': 'DELETE'
  },
  'GETAccGetWxAuth2Url': {
    'uri': '/acc/getWxAuth2Url',
    'pageId': '818',
    'page_uri': 'GET /acc/getWxAuth2Url',
    'title': '商户H5登录相关/获取授权链接',
    'type': 'GET'
  },
  'GETParkingOrderSimple': {
    'uri': '/parkingOrder/{parkingOrderId}/simple',
    'pageId': '451',
    'page_uri': 'GET /parkingOrder/{parkingOrderId}/simple',
    'title': '物业保安/api1',
    'type': 'GET'
  },
  'POSTCarInParking': {
    'uri': '/car/{carId}/inParking',
    'pageId': '464',
    'page_uri': 'POST /car/{carId}/inParking',
    'title': '物业保安/api4',
    'type': 'POST'
  },
  'GETMoneyReportTodayDetail': {
    'uri': '/money/report/todayDetail',
    'pageId': '581',
    'page_uri': 'GET /money/report/todayDetail',
    'title': '日报/列表/今日收益',
    'type': 'GET'
  },
  'GETCouponTypeList': {
    'uri': '/couponType/list',
    'pageId': '545',
    'page_uri': 'GET /couponType/list',
    'title': '优惠券类型列表(L)',
    'type': 'GET'
  },
  'GETMerchantInfo': {
    'uri': '/merchant/info',
    'pageId': '546',
    'page_uri': 'GET /merchant/info',
    'title': '获取商家信息',
    'type': 'GET'
  },
  'GETCouponUsed': {
    'uri': '/coupon/used',
    'pageId': '547',
    'page_uri': 'GET /coupon/used',
    'title': '已使用的优惠券(T)',
    'type': 'GET'
  },
  'GETCouponSent': {
    'uri': '/coupon/sent',
    'pageId': '549',
    'page_uri': 'GET /coupon/sent',
    'title': '已发放的优惠券(T)',
    'type': 'GET'
  },
  'GETCouponCheckCarInParking': {
    'uri': '/coupon/checkCarInParking',
    'pageId': '687',
    'page_uri': 'GET /coupon/checkCarInParking',
    'title': '检测该车辆是否有未完成的场订单',
    'type': 'GET'
  },
  'GETCouponPaperCoupon': {
    'uri': '/coupon/paperCoupon',
    'pageId': '871',
    'page_uri': 'GET /coupon/paperCoupon',
    'title': '纸质优惠券列表',
    'type': 'GET'
  },
  'GETMerchantSurplusTimes': {
    'uri': '/merchant/{merchantId}/surplusTimes',
    'pageId': '950',
    'page_uri': 'GET /merchant/{merchantId}/surplusTimes',
    'title': '剩余商家优惠次数',
    'type': 'GET'
  },
  'POSTCouponIssued': {
    'uri': '/coupon/issued',
    'pageId': '550',
    'page_uri': 'POST /coupon/issued',
    'title': '发券(L)',
    'type': 'POST'
  },
  'POSTCouponIssuedPackage': {
    'uri': '/coupon/issuedPackage',
    'pageId': '551',
    'page_uri': 'POST /coupon/issuedPackage',
    'title': '发券包(L)',
    'type': 'POST'
  },
  'POSTCouponType': {
    'uri': '/couponType',
    'pageId': '664',
    'page_uri': 'POST /couponType',
    'title': '添加优惠券类型',
    'type': 'POST'
  },
  'PUTCouponType': {
    'uri': '/couponType/{couponTypeId}',
    'pageId': '665',
    'page_uri': 'PUT /couponType/{couponTypeId}',
    'title': '修改优惠券类型',
    'type': 'PUT'
  },
  'GETCouponType': {
    'uri': '/couponType/{couponTypeId}',
    'pageId': '666',
    'page_uri': 'GET /couponType/{couponTypeId}',
    'title': '查询单张优惠券类型',
    'type': 'GET'
  },
  'DELETECouponType': {
    'uri': '/couponType/{couponTypeId}',
    'pageId': '667',
    'page_uri': 'DELETE /couponType/{couponTypeId}',
    'title': '删除单张优惠券类型',
    'type': 'DELETE'
  },
  'POSTCouponDirectIssued': {
    'uri': '/coupon/directIssued',
    'pageId': '835',
    'page_uri': 'POST /coupon/directIssued',
    'title': '直接发券(L)',
    'type': 'POST'
  },
  'POSTCouponPaperCoupon': {
    'uri': '/coupon/paperCoupon',
    'pageId': '870',
    'page_uri': 'POST /coupon/paperCoupon',
    'title': '新增纸质优惠券',
    'type': 'POST'
  },
  'DELETECouponPaperCoupon': {
    'uri': '/coupon/paperCoupon',
    'pageId': '873',
    'page_uri': 'DELETE /coupon/paperCoupon',
    'title': '批量删除纸质优惠券',
    'type': 'DELETE'
  },
  'GETCouponCouponPackage': {
    'uri': '/coupon/couponPackage',
    'pageId': '874',
    'page_uri': 'GET /coupon/couponPackage',
    'title': '券包列表',
    'type': 'GET'
  },
  'PUTCouponCancellation': {
    'uri': '/coupon/{couponId}/cancellation',
    'pageId': '951',
    'page_uri': 'PUT /coupon/{couponId}/cancellation',
    'title': '将一张优惠券作废',
    'type': 'PUT'
  },
  'GETAccSubAcc': {
    'uri': '/acc/subAcc',
    'pageId': '553',
    'page_uri': 'GET /acc/subAcc',
    'title': '我的子账户/列表',
    'type': 'GET'
  },
  'PUTAccSubAcc': {
    'uri': '/acc/subAcc/{accId}',
    'pageId': '554',
    'page_uri': 'PUT /acc/subAcc/{accId}',
    'title': '我的子账户/修改',
    'type': 'PUT'
  },
  'POSTAccSubAcc': {
    'uri': '/acc/subAcc',
    'pageId': '555',
    'page_uri': 'POST /acc/subAcc',
    'title': '我的子账户/新增',
    'type': 'POST'
  },
  'DELETEAccSubAcc': {
    'uri': '/acc/subAcc/{accId}',
    'pageId': '556',
    'page_uri': 'DELETE /acc/subAcc/{accId}',
    'title': '我的子账户/删除',
    'type': 'DELETE'
  },
  'GETTestGetAllMch': {
    'uri': '/test/getAllMch',
    'pageId': '595',
    'page_uri': 'GET /test/getAllMch',
    'title': '测试/获取经销商下所有物业',
    'type': 'GET'
  },
  'GETTestGetParkingByMch': {
    'uri': '/test/getParkingByMch',
    'pageId': '596',
    'page_uri': 'GET /test/getParkingByMch',
    'title': '测试/获取物业下所有停车场',
    'type': 'GET'
  },
  'GETTestGetChannelIdByParkingId': {
    'uri': '/test/getChannelIdByParkingId',
    'pageId': '597',
    'page_uri': 'GET /test/getChannelIdByParkingId',
    'title': '测试/获取停车场下所有车道',
    'type': 'GET'
  },
  'GETTestCameraCatch': {
    'uri': '/test/cameraCatch',
    'pageId': '598',
    'page_uri': 'GET /test/cameraCatch',
    'title': '测试/获取跑单',
    'type': 'GET'
  }
};