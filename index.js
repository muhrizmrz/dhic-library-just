$(() => {

    var $searchBooks = $('#searchBooks');
    var $window = $(window);
    $window.on('scroll', function () {
        if (300 < $window.scrollTop()) {
            requestAnimationFrame(() => {



                $searchBooks.animate({ top: '0%', opacity: '1' })
            })
        } else {
            requestAnimationFrame(() => {
                $searchBooks.stop(true).css({ top: '-15%', opacity: '0' })
            })

        }
    })


    //////timetable of library duty
    var date = new Date();

    var local = date.getDay()
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var staffs = [
        {
            day: "Sunday",
            staffI: "SHABNAS  V",
            staffII: "HANAN V"
        },
        {
            day: "Monday",
            staffI: "SWALAHUDHEEN PP VII",
            staffII: "FARHAD"
        },
        {
            day: "Tuesday",
            staffI: "SAHAL CP  VII",
            staffII: "IJAS IV"
        },
        {
            day: "Wednesday",
            staffI: "THWAHA  VII",
            staffII: "ABDUL BASITH  VI"
        },
        {
            day: "Thursday",
            staffI: "SHAKIR M  V",
            staffII: "NADEEM V"
        },
        {
            day: "Friday",
            staffI: "NASEEM",
            staffII: "SUHAIL  VI"
        },
        {
            day: "Saturday",
            staffI: "NASEEF PC",
            staffII: "FARHAN TM"
        },
    ]
    for (var i = 0; i < staffs.length; i++) {
        if (days[local] === staffs[i].day) {
            $('.day').html(staffs[i].day)
            $('.staffI').html(staffs[i].staffI)
            $('.staffII').html(staffs[i].staffII)
        }
    }



})