export default {
    fundings: {
        query: `q=resourcetype_group:fundings&rows=0&facet=true&facet.query=(crisproject.pjtype:Đề tài)&facet.query=(crisproject.pjtype:Đề án)&facet.query=(crisproject.pjtype:Dự án)&facet.query=(crisproject.pjtype:Hợp tác quốc tế)&facet.query=(crisproject.level:Quốc gia)&facet.query=(crisproject.level:Bộ ngành)&facet.query=(crisproject.level:Tỉnh Thành)&facet.query=(crisproject.level:Cơ sở)&facet.query=(crisproject.level:Ngoài ngân sách)&facet.query=(PJSubject_keyword:/1.*/)&facet.query=(PJSubject_keyword:/2.*/)&facet.query=(PJSubject_keyword:/3.*/)&facet.query=(PJSubject_keyword:/4.*/)&facet.query=(PJSubject_keyword:/5.*/)&facet.query=(PJSubject_keyword:/6.*/)&facet.field=PJAuthority_keyword`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>nhiệm vụ',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại nhiệm vụ',
                        innerSize: '50%',
                        data: [{
                                name: "Đề tài",
                                y: 'dataX["(crisproject.pjtype:Đề tài)"]'
                            },
                            {
                                name: "Đề án",
                                y: 'dataX["(crisproject.pjtype:Đề án)"]'
                            },
                            {
                                name: "Dự án",
                                y: 'dataX["(crisproject.pjtype:Dự án)"]'
                            },
                            {
                                name: "Hợp tác<br>quốc tế",
                                y: 'dataX["(crisproject.pjtype:Hợp tác quốc tế)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Cấp<br>quản lý',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Cấp quản lý',
                        innerSize: '50%',
                        data: [{
                                name: "Cấp<br>quốc gia",
                                y: 'dataX["(crisproject.level:Quốc gia)"]'
                            },
                            {
                                name: "Cấp<br>bộ ngành",
                                y: 'dataX["(crisproject.level:Bộ ngành)"]'
                            },
                            {
                                name: "Cấp<br>tỉnh thành",
                                y: 'dataX["(crisproject.level:Tỉnh Thành)"]'
                            },
                            {
                                name: "Cấp<br>cơ sở",
                                y: 'dataX["(crisproject.level:Cơ sở)"]'
                            },
                            {
                                name: "Ngoài<br>ngân sách",
                                y: 'dataX["(crisproject.level:Ngoài ngân sách)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(PJSubject_keyword:/1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(PJSubject_keyword:/2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(PJSubject_keyword:/3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(PJSubject_keyword:/4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(PJSubject_keyword:/5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(PJSubject_keyword:/6.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột phân chia theo cơ quan chủ quản'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Nhiệm vụ'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Tỉnh thành",
                        colorByPoint: true,
                        data: "PJAuthority_keyword"
                    }]
                }
            }
        ]
    },

    publications: {
        query: `q=resourcetype_group:publications&rows=0&facet=true&facet.query=(dc.collection:ISI)&facet.query=(dc.collection:Scopus)&facet.query=(dc.collection:Quốc tế)&facet.query=(dc.collection:Trong nước)&facet.query=(dc.type:(Báo NOT nhiệm))&facet.query=(dc.type:hội thảo)&facet.query=(dc.type:nhiệm vụ)&facet.query=(dc.type:(Sách NOT trích))&facet.query=(dc.type:tiến sĩ)&facet.query=(dc.type:thạc sĩ)&facet.query=(dc.type:tạp chí)&facet.query=(dc.type:(kỷ yếu NOT thảo))&facet.query=(dc.type:Bài trích sách)&facet.query=(dc.type:nghiên cứu)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/)&facet.field=dateIssued.year_sort`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>công bố',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại công bố',
                        innerSize: '50%',
                        data: [{
                                name: "Bài báo",
                                y: 'dataX["(dc.type:(Báo NOT nhiệm))"]'
                            },
                            {
                                name: "Kỷ yếu<br>hội thảo",
                                y: 'dataX["(dc.type:hội thảo)"]'
                            },
                            {
                                name: "Báo cáo<br>kết quả<br>nhiệm vụ",
                                y: 'dataX["(dc.type:nhiệm vụ)"]'
                            },
                            {
                                name: "Sách",
                                y: 'dataX["(dc.type:(Sách NOT trích))"]'
                            },
                            {
                                name: "Luận án<br>tiến sĩ",
                                y: 'dataX["(dc.type:tiến sĩ)"]'
                            },
                            {
                                name: "Luận án<br>thạc sĩ",
                                y: 'dataX["(dc.type:thạc sĩ)"]'
                            },
                            {
                                name: "Bài trích<br>tạp chí",
                                y: 'dataX["(dc.type:tạp chí)"]'
                            },
                            {
                                name: "Bài trích<br>kỷ yếu",
                                y: 'dataX["(dc.type:(kỷ yếu NOT thảo))"]'
                            },
                            {
                                name: "Bài trích<br>sách",
                                y: 'dataX["(dc.type:Bài trích sách)"]'
                            },
                            {
                                name: "Bài nghiên<br>cứu",
                                y: 'dataX["(dc.type:nghiên cứu)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Bộ<br>sưu tập',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Bộ sưu tập',
                        innerSize: '50%',
                        data: [{
                                name: "Scopus",
                                y: 'dataX["(dc.collection:Scopus)"]'
                            },
                            {
                                name: "ISI",
                                y: 'dataX["(dc.collection:ISI)"]'
                            },
                            {
                                name: "Quốc tế",
                                y: 'dataX["(dc.collection:Quốc tế)"]'
                            },
                            {
                                name: "Trong nước",
                                y: 'dataX["(dc.collection:Trong nước)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                asc_sort: "name",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột số lượng theo năm xuất bản'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Công bố'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Năm xuất bản",
                        colorByPoint: true,
                        data: "dateIssued.year_sort"
                    }]
                }
            }
        ]
    },

    crispatents: {
        query: `q=resourcetype_group:crispatents&rows=0&facet=true&facet.query=(crispatents.patentstype:Sáng chế)&facet.query=(crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentsstatus:Còn hiệu lực)&facet.query=(patentsstatus:Hết hiệu lực)&facet.field=crispatents.patentscountrycode&facet.field=patentsapprovaldate.year_sort`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại bằng',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại bằng',
                        innerSize: '50%',
                        data: [{
                                name: "Sáng chế",
                                y: 'dataX["(crispatents.patentstype:Sáng chế)"]'
                            },
                            {
                                name: "Giải pháp<br>hữu ích",
                                y: 'dataX["(crispatents.patentstype:Giải pháp hữu ích)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Tình trạng<br>hiệu lực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Tình trạng hiệu lực',
                        innerSize: '50%',
                        data: [{
                                name: "Còn hiệu lực",
                                y: 'dataX["(patentsstatus:Còn hiệu lực)"]'
                            },
                            {
                                name: "Hết hiệu lực",
                                y: 'dataX["(patentsstatus:Hết hiệu lực)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Quốc gia<br>công nhận',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Quốc gia công nhận',
                        innerSize: '50%',
                        data: "crispatents.patentscountrycode"
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                asc_sort: "name",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột số bằng cấp theo các năm'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Sáng chế'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Năm",
                        colorByPoint: true,
                        data: "patentsapprovaldate.year_sort"
                    }]
                }
            }
        ]
    },

    criscertificate: {
        query: `q=resourcetype_group:criscertificate&rows=0&facet=true&facet.query=(criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatesubject:(Giám định sở hữu trí tuệ))&facet.query=(criscertificate.certificatesubject:(Đại diện sở hữu công nghiệp))&facet.query=(criscertificate.certificatesubject:(Đánh giá sự phù hợp))&facet.query=(criscertificate.certificatesubject:(Kiểm định chất lượng, chuẩn đo lường))&facet.query=(criscertificate.certificatesubject:(Hoạt động công nghệ cao NOT khoa))&facet.query=(criscertificate.certificatesubject:(Hoạt động khoa học công nghệ NOT cao))&facet.query=(criscertificate.certificatestatus:(Còn))&facet.query=(criscertificate.certificatestatus:(Hết))&facet.field=certificateissuedate.year_sort`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại giấy<br>chứng nhận',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại giấy chứng nhận',
                        innerSize: '50%',
                        data: [{
                                name: "Tổ chức",
                                y: 'dataX["(criscertificate.certificatetype:Tổ chức)"]'
                            },
                            {
                                name: "Cá nhân",
                                y: 'dataX["(criscertificate.certificatetype:Cá nhân)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Giám định<br>sở hữu<br>trí tuệ",
                                y: 'dataX["(criscertificate.certificatesubject:(Giám định sở hữu trí tuệ))"]'
                            },
                            {
                                name: "Đại diện<br>sở hữu<br>công nghiệp",
                                y: 'dataX["(criscertificate.certificatesubject:(Đại diện sở hữu công nghiệp))"]'
                            },
                            {
                                name: "Đánh giá<br>sự phù hợp",
                                y: 'dataX["(criscertificate.certificatesubject:(Đánh giá sự phù hợp))"]'
                            },
                            {
                                name: "Kiểm định<br>chất lượng,<br>chuẩn đo lường",
                                y: 'dataX["(criscertificate.certificatesubject:(Kiểm định chất lượng, chuẩn đo lường))"]'
                            },
                            {
                                name: "Hoạt động<br>công nghệ<br>cao",
                                y: 'dataX["(criscertificate.certificatesubject:(Hoạt động công nghệ cao NOT khoa))"]'
                            },
                            {
                                name: "Hoạt động<br> khoa học<br>công nghệ",
                                y: 'dataX["(criscertificate.certificatesubject:(Hoạt động khoa học công nghệ NOT cao))"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Tình trạng',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Tình trạng',
                        innerSize: '50%',
                        data: [{
                                name: "Còn hiệu lực",
                                y: 'dataX["(criscertificate.certificatestatus:(Còn))"]'
                            },
                            {
                                name: "Hết hiệu lực",
                                y: 'dataX["(criscertificate.certificatestatus:(Hết))"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                asc_sort: "name",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột số lượng giấy chứng nhận theo các năm'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Giấy chứng nhận'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Giấy chứng nhận",
                        colorByPoint: true,
                        data: "certificateissuedate.year_sort"
                    }]
                }
            }
        ]
    },

    crisstandards: {
        query: `q=resourcetype_group:crisstandards&rows=0&facet=true&facet.query=(standardstype:TCVN)&facet.query=(standardstype:TCCS)&facet.query=(standardstype:QCVN)&facet.query=(standardstype:QCĐP)&facet.query=(standardstype:ĐLVN)&facet.query=(standardstype:Quốc tế)&facet.query=(standardsstatus:Còn hiệu lực)&facet.query=(standardsstatus:Hết hiệu lực)&facet.field=standardspublicationDate.year_sort&facet.field=standardssubject_authority`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>tiêu chuẩn',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại tiêu chuẩn',
                        innerSize: '50%',
                        data: [{
                                name: "TCVN",
                                y: 'dataX["(standardstype:TCVN)"]'
                            },
                            {
                                name: "TCCS",
                                y: 'dataX["(standardstype:TCCS)"]'
                            },
                            {
                                name: "QCVN",
                                y: 'dataX["(standardstype:QCVN)"]'
                            },
                            {
                                name: "QCĐP",
                                y: 'dataX["(standardstype:QCĐP)"]'
                            },
                            {
                                name: "ĐLVN",
                                y: 'dataX["(standardstype:ĐLVN)"]'
                            },
                            {
                                name: "Quốc tế",
                                y: 'dataX["(standardstype:Quốc tế)"]'
                            },
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Tình trạng<br>hiệu lực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Tình trạng hiệu lực',
                        innerSize: '50%',
                        data: [{
                                name: "Còn hiệu lực",
                                y: 'dataX["(standardsstatus:Còn hiệu lực)"]'
                            },
                            {
                                name: "Hết hiệu lực",
                                y: 'dataX["(standardsstatus:Hết hiệu lực)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Khung<br>phân loại',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Khung phân loại',
                        innerSize: '50%',
                        data: 'standardssubject_authority'
                    }]
                }
            },
            {
                style: "margin-top: -50px;",
                asc_sort: "name",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột số tiêu chuẩn theo từng năm'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Tiêu chuẩn'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Năm",
                        colorByPoint: true,
                        data: "standardspublicationDate.year_sort"
                    }]
                }
            }
        ]
    },

    cristechs: {
        query: `q=resourcetype_group:cristechs&rows=0&facet=true&facet.query=(techstype:Công nghệ, thiết bị)&facet.query=(techstype:Giải pháp phần mềm)&facet.query=(techstype:Dịch vụ)&facet.query=(cristechs.techscollection:Nguồn cung)&facet.query=(cristechs.techscollection:Nguồn cầu)&facet.query=(cristechs.techssubject:/1.*/)&facet.query=(cristechs.techssubject:/2.*/)&facet.query=(cristechs.techssubject:/3.*/)&facet.query=(cristechs.techssubject:/4.*/)&facet.query=(cristechs.techssubject:/5.*/)&facet.query=(cristechs.techssubject:/6.*/)&facet.query=(techscountry_authority:VN)&facet.query=-(techscountry_authority:VN)&facet.field=techspublicationDate.year_sort`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>công nghệ',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại công nghệ',
                        innerSize: '50%',
                        data: [{
                                name: "Công nghệ,<br>thiết bị",
                                y: 'dataX["(techstype:Công nghệ, thiết bị)"]'
                            },
                            {
                                name: "Giải pháp<br>phần mềm",
                                y: 'dataX["(techstype:Giải pháp phần mềm)"]'
                            },
                            {
                                name: "Dịch vụ",
                                y: 'dataX["(techstype:Dịch vụ)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Nguồn<br>cung cầu',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Nguồn cung cầu',
                        innerSize: '50%',
                        data: [{
                                name: "Nguồn cung",
                                y: 'dataX["(cristechs.techscollection:Nguồn cung)"]'
                            },
                            {
                                name: "Nguồn cầu",
                                y: 'dataX["(cristechs.techscollection:Nguồn cầu)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Quốc gia<br>phát triển',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Quốc gia phát triển',
                        innerSize: '50%',
                        data: [{
                                name: "Việt Nam",
                                y: 'dataX["(techscountry_authority:VN)"]'
                            },
                            {
                                name: "Nước ngoài",
                                y: 'dataX["-(techscountry_authority:VN)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(cristechs.techssubject:/1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(cristechs.techssubject:/2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(cristechs.techssubject:/3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(cristechs.techssubject:/4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(cristechs.techssubject:/5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(cristechs.techssubject:/6.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                asc_sort: "name",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột số lượng công nghệ theo các năm'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Công nghệ'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Năm",
                        colorByPoint: true,
                        data: "techspublicationDate.year_sort"
                    }]
                }
            }
        ]
    },

    crisawards: {
        query: `q=resourcetype_group:crisawards&rows=0&facet=true&facet.query=(crisawards.awardstype:Giải thưởng Hồ Chí Minh)&facet.query=(crisawards.awardstype:Giải thưởng Nhà nước)&facet.query=(crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&facet.query=(crisawards.awardstype:Giải thưởng của tổ chức trong nước)&facet.query=(crisawards.awardstype:Giải thưởng của tổ chức quốc tế)&facet.query=(AwardsSubject:/1.*/)&facet.query=(AwardsSubject:/2.*/)&facet.query=(AwardsSubject:/3.*/)&facet.query=(AwardsSubject:/4.*/)&facet.query=(AwardsSubject:/5.*/)&facet.query=(AwardsSubject:/6.*/)&facet.field=crisawards.awardsyear&facet.field=AwardsAuthority_authority`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>giải thưởng',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại giải thưởng',
                        innerSize: '50%',
                        data: [{
                                name: "Giải thưởng Hồ Chí Minh",
                                y: 'dataX["(crisawards.awardstype:Giải thưởng Hồ Chí Minh)"]'
                            },
                            {
                                name: "Giải thưởng Nhà nước",
                                y: 'dataX["(crisawards.awardstype:Giải thưởng Nhà nước)"]'
                            },
                            {
                                name: "Giải thưởng của Bộ, ngành, địa phương",
                                y: 'dataX["(crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)"]'
                            },
                            {
                                name: "Giải thưởng của tổ chức trong nước",
                                y: 'dataX["(crisawards.awardstype:Giải thưởng của tổ chức trong nước)"]'
                            },
                            {
                                name: "Giải thưởng của tổ chức quốc tế",
                                y: 'dataX["(crisawards.awardstype:Giải thưởng của tổ chức quốc tế)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(AwardsSubject:/1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(AwardsSubject:/2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(AwardsSubject:/3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(AwardsSubject:/4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(AwardsSubject:/5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(AwardsSubject:/6.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Cơ quan<br>chủ quản',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Cơ quan chủ quản',
                        innerSize: '50%',
                        data: 'AwardsAuthority_authority'
                    }]
                }
            },
            {
                style: "margin-top: -50px;",
                asc_sort: "name",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột số lượng theo các năm'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Giải thưởng'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Năm",
                        colorByPoint: true,
                        data: "crisawards.awardsyear"
                    }]
                }
            }
        ]
    },

    crisevents: {
        query: `q=resourcetype_group:crisevents&rows=0&facet=true&facet.query=(crisevents.eventstype:Hội nghị)&facet.query=(crisevents.eventstype:Hội thảo)&facet.query=(crisevents.eventstype:Tọa đàm)&facet.query=(crisevents.eventstype:Hội chợ)&facet.query=(crisevents.eventstype:Triển lãm)&facet.query=(crisevents.eventstype:Lễ hội)&facet.query=(eventssubject:/1.*/)&facet.query=(eventssubject:/2.*/)&facet.query=(eventssubject:/3.*/)&facet.query=(eventssubject:/4.*/)&facet.query=(eventssubject:/5.*/)&facet.query=(eventssubject:/6.*/)&facet.field=eventsstartdate.year_sort&facet.field=eventsprovince_authority`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>sự kiện',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại sự kiện',
                        innerSize: '50%',
                        data: [{
                                name: "Hội nghị",
                                y: 'dataX["(crisevents.eventstype:Hội nghị)"]'
                            },
                            {
                                name: "Hội thảo",
                                y: 'dataX["(crisevents.eventstype:Hội thảo)"]'
                            },
                            {
                                name: "Tọa đàm",
                                y: 'dataX["(crisevents.eventstype:Tọa đàm)"]'
                            },
                            {
                                name: "Hội chợ",
                                y: 'dataX["(crisevents.eventstype:Hội chợ)"]'
                            },
                            {
                                name: "Triển lãm",
                                y: 'dataX["(crisevents.eventstype:Triển lãm)"]'
                            },
                            {
                                name: "Lễ hội",
                                y: 'dataX["(crisevents.eventstype:Lễ hội)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(eventssubject:/1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(eventssubject:/2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(eventssubject:/3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(eventssubject:/4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(eventssubject:/5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(eventssubject:/6.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -50px;",
                asc_sort: "name",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu cột thống kê số sự kiện theo Năm sự kiện'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Sự kiện'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Năm",
                        colorByPoint: true,
                        data: "eventsstartdate.year_sort"
                    }]
                }
            },
            {
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu cột thống kê số sự kiện theo Tỉnh thành'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Sự kiện'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Tỉnh thành",
                        colorByPoint: true,
                        data: "eventsprovince_authority"
                    }]
                }
            }
        ]
    },

    crisfundings: {
        query: `q=resourcetype_group:crisfundings&rows=0&facet=true&facet.query=(crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingssubject:/1.*/)&facet.query=(fundingssubject:/2.*/)&facet.query=(fundingssubject:/3.*/)&facet.query=(fundingssubject:/4.*/)&facet.query=(fundingssubject:/5.*/)&facet.query=(fundingssubject:/6.*/)&facet.field=crisDateIssued.year_lastmodified&facet.query=(fundingsstatus:Đang gọi)&facet.query=(fundingsstatus:Đã kết thúc)`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>tài trợ',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 0
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại sự kiện',
                        innerSize: '50%',
                        data: [{
                                name: "Nghiên cứu<br>phát triển",
                                y: 'dataX["(crisfundings.fundingstype:Nghiên cứu phát triển)"]'
                            },
                            {
                                name: "Phát triển<br>tiềm lực",
                                y: 'dataX["(crisfundings.fundingstype:Phát triển tiềm lực)"]'
                            },
                            {
                                name: "Hợp tác<br>quốc tế",
                                y: 'dataX["(crisfundings.fundingstype:Hợp tác quốc tế)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực<br>khoa học',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 0
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực khoa học',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(fundingssubject:/1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(fundingssubject:/2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(fundingssubject:/3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(fundingssubject:/4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(fundingssubject:/5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(fundingssubject:/6.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Tình trạng<br>thực hiện',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 0
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Tình trạng thực hiện',
                        innerSize: '50%',
                        data: [{
                                name: "Đang gọi",
                                y: 'dataX["(fundingsstatus:Đang gọi)"]'
                            },
                            {
                                name: "Đã kết thúc",
                                y: 'dataX["(fundingsstatus:Đã kết thúc)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -50px;",
                asc_sort: "name",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột số tài trợ theo năm (tăng từ trái qua)'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Tài trợ'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Tài trợ",
                        colorByPoint: true,
                        data: "crisDateIssued.year_lastmodified"
                    }]
                }
            }
        ]
    },

    crisjournals: {
        query: `q=resourcetype_group:crisjournals&rows=0&facet=true&facet.query=(crisjournals.journalstype:Trong nước)&facet.query=(crisjournals.journalstype:Quốc tế)&facet.query=(crisjournals.journalssubject:/1.*/)&facet.query=(crisjournals.journalssubject:/2.*/)&facet.query=(crisjournals.journalssubject:/3.*/)&facet.query=(crisjournals.journalssubject:/4.*/)&facet.query=(crisjournals.journalssubject:/5.*/)&facet.query=(crisjournals.journalssubject:/6.*/)&facet.field=journalspublisher_keyword&facet.field=journalsauthority_authority`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>tạp chí',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại tạp chí',
                        innerSize: '50%',
                        data: [{
                                name: "Trong nước",
                                y: 'dataX["(crisjournals.journalstype:Trong nước)"]'
                            },
                            {
                                name: "Quốc tế",
                                y: 'dataX["(crisjournals.journalstype:Quốc tế)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(crisjournals.journalssubject:/1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(crisjournals.journalssubject:/2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(crisjournals.journalssubject:/3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(crisjournals.journalssubject:/4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(crisjournals.journalssubject:/5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(crisjournals.journalssubject:/6.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Đơn vị<br>chủ quản',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Đơn vị chủ quản',
                        innerSize: '50%',
                        data: "journalsauthority_authority"
                    }]
                }
            },
            {
                style: "margin-top: -50px;",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Biểu đồ cột số lượng sắp xếp theo Cơ quan xuất bản'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Tạp chí'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Cơ quan xuất bản",
                        colorByPoint: true,
                        data: "journalspublisher_keyword"
                    }]
                }
            }
        ]
    },

    orgunits: {
        query: `q=resourcetype_group:orgunits&rows=0&facet=true&facet.query=(crisou.outype:(Công lập NOT Ngoài))&facet.query=(crisou.outype:Ngoài công lập)&facet.query=(crisou.outype:Vốn nước ngoài)&facet.query=(crisou.activity:/1.*/)&facet.query=(crisou.activity:/2.*/)&facet.query=(crisou.activity:/3.*/)&facet.query=(OUSubject_keyword:/1.*/)&facet.query=(OUSubject_keyword:/2.*/)&facet.query=(OUSubject_keyword:/3.*/)&facet.query=(OUSubject_keyword:/4.*/)&facet.query=(OUSubject_keyword:/5.*/)&facet.query=(OUSubject_keyword:/6.*/)&facet.field=OUProvince_keyword`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại<br>tổ chức',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại tổ chức',
                        innerSize: '50%',
                        data: [{
                                name: "Công lập",
                                y: 'dataX["(crisou.outype:(Công lập NOT Ngoài))"]'
                            },
                            {
                                name: "Ngoài<br>công lập",
                                y: 'dataX["(crisou.outype:Ngoài công lập)"]'
                            },
                            {
                                name: "Vốn<br>nước ngoài",
                                y: 'dataX["(crisou.outype:Vốn nước ngoài)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Loại hình<br>hoạt động',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Loại hình hoạt động',
                        innerSize: '50%',
                        data: [{
                                name: "Nghiên cứu<br>khoa học",
                                y: 'dataX["(crisou.activity:/1.*/)"]'
                            },
                            {
                                name: "Phát triển<br>công nghệ",
                                y: 'dataX["(crisou.activity:/2.*/)"]'
                            },
                            {
                                name: "Dịch vụ<br>khoa học<br>và<br>công nghệ",
                                y: 'dataX["(crisou.activity:/3.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 55
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(OUSubject_keyword:/1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(OUSubject_keyword:/2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(OUSubject_keyword:/3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(OUSubject_keyword:/4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(OUSubject_keyword:/5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(OUSubject_keyword:/6.*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-12",
                config: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: ' Biểu đồ cột theo 63 tỉnh thành (sắp xếp theo thứ tự giảm dần)'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Đơn vị tính: Tổ chức'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
                    },

                    series: [{
                        name: "Tỉnh thành",
                        colorByPoint: true,
                        data: "OUProvince_keyword"
                    }]
                }
            }
        ]
    },

    researcherprofiles: {
        query: `q=resourcetype_group:researcherprofiles&rows=0&facet=true&facet.query=(crisrp.degree:Tiến sĩ)&facet.query=(crisrp.degree:Thạc sĩ)&facet.query=(crisrp.degree:Kỹ sư)&facet.query=(crisrp.degree:Cử nhân)&facet.query=-(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:Thạc sĩ) AND -(crisrp.degree:Kỹ sư) AND -(crisrp.degree:Cử nhân)&facet.query=(crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.position:Phó giáo sư)&facet.query=(crisrp.position:/*Nghiên cứu*/)&facet.query=-(crisrp.position:Phó Giáo sư) AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpsubject:/1.*/)&facet.query=(crisrp.rpsubject:/2.*/)&facet.query=(crisrp.rpsubject:/3.*/)&facet.query=(crisrp.rpsubject:/4.*/)&facet.query=(crisrp.rpsubject:/5.*/)&facet.query=(crisrp.rpsubject:/6.*/)&facet.query=(crisrp.gender:Nam)&facet.query=(crisrp.gender:Nữ)&facet.query=(crisrp.gender:Không xác định)`,
        charts: [{
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Trình độ<br>học vấn',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Trình độ học vấn',
                        innerSize: '50%',
                        data: [{
                                name: "Tiến sĩ",
                                y: 'dataX["(crisrp.degree:Tiến sĩ)"]'
                            },
                            {
                                name: "Thạc sĩ",
                                y: 'dataX["(crisrp.degree:Thạc sĩ)"]'
                            },
                            {
                                name: "Kỹ sư",
                                y: 'dataX["(crisrp.degree:Kỹ sư)"]'
                            },
                            {
                                name: "Cử nhân",
                                y: 'dataX["(crisrp.degree:Cử nhân)"]'
                            },
                            {
                                name: "Khác",
                                y: 'dataX["-(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:Thạc sĩ) AND -(crisrp.degree:Kỹ sư) AND -(crisrp.degree:Cử nhân)"]'
                            }
                        ]
                    }]
                }
            },
            {
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Chức danh,<br>học hàm',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Chức danh, học hàm',
                        innerSize: '50%',
                        data: [{
                                name: "Giáo sư",
                                y: 'dataX["(crisrp.position:(Giáo sư NOT Phó))"]'
                            },
                            {
                                name: "Phó Giáo sư",
                                y: 'dataX["(crisrp.position:Phó giáo sư)"]'
                            },
                            {
                                name: "Nghiên cứu",
                                y: 'dataX["(crisrp.position:/*Nghiên cứu*/)"]'
                            },
                            {
                                name: "Khác",
                                y: 'dataX["-(crisrp.position:Phó Giáo sư) AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:/*Nghiên cứu*/)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Giới tính',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 60
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Giới tính',
                        innerSize: '50%',
                        data: [{
                                name: "Nam",
                                y: 'dataX["(crisrp.gender:Nam)"]'
                            },
                            {
                                name: "Nữ",
                                y: 'dataX["(crisrp.gender:Nữ)"]'
                            },
                            {
                                name: "Không xác định",
                                y: 'dataX["(crisrp.gender:Không xác định)"]'
                            }
                        ]
                    }]
                }
            },
            {
                style: "margin-top: -100px;",
                class: "col-sm-6",
                config: {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'Lĩnh vực<br>chuyên môn',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 35
                    },
                    tooltip: {
                        pointFormat: '<b>{point.percentage:.2f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b><br>{point.percentage:.2f} %',
                                distance: 15,
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 5
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '110%',
                            allowPointSelect: true,
                            cursor: 'pointer'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Lĩnh vực',
                        innerSize: '50%',
                        data: [{
                                name: "Khoa học<br>tự nhiên",
                                y: 'dataX["(crisrp.rpsubject:/1.*/)"]'
                            },
                            {
                                name: "Khoa học<br>kỹ thuật<br>và<br>công nghệ",
                                y: 'dataX["(crisrp.rpsubject:/2.*/)"]'
                            },
                            {
                                name: "Khoa học y,<br>dược",
                                y: 'dataX["(crisrp.rpsubject:/3.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nông nghiệp",
                                y: 'dataX["(crisrp.rpsubject:/4.*/)"]'
                            },
                            {
                                name: "Khoa học<br>xã hội",
                                y: 'dataX["(crisrp.rpsubject:/5.*/)"]'
                            },
                            {
                                name: "Khoa học<br>nhân văn",
                                y: 'dataX["(crisrp.rpsubject:/6.*/)"]'
                            }
                        ]
                    }]
                }
            },
        ]
    }
}