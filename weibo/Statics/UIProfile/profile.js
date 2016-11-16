/**
 * Created by 寒夜落雪 on 2016/9/23.
 */
$(function(){
    var position = $('.content_type').attr('position')
    var information = {
        sataus:false,
        focused:false,
        position:position,
        username: '乔建龙',
        headportrait: '/statics/image/222.jpg',
        sex: '/statics/image/222.jpg',
        introduce: '我是乔建龙，我一定可以的',
        favor_num: 222,
        follow_num: 222,
        weibo_num: 222,
        authentication_information: '老男孩教育的学员',
        information_percent_num: 90,
        weibo_level: 99,
        photo_address: [
            '/statics/image/1111.jpg',
            '/statics/image/222.jpg',
            '/statics/image/1111.jpg',
            '/statics/image/222.jpg',
            '/statics/image/1111.jpg',
            '/statics/image/222.jpg',
        ],
        favor: {
            picture: '/statics/image/222.jpg',
            user: 'zhou陈尧',
            user_id:11,
            content: '凭什么和我打'
        },
        blogs: [
            {
                headportrait: '/statics/image/1111.jpg',
                username: '乔建龙',
                ctime: '2016-9-20 19:40',
                type: '老男孩教育',
                content: '业内一流教育机构',
                hits: 999,
                'thumbs': 1,
                picture: '/statics/image/222.jpg',
            },
            {
                headportrait: '/statics/image/222.jpg',
                username: '乔建龙1',
                ctime: '2016-9-21 19:40',
                type: '老男孩教育1',
                content: '业内一流教育机构1',
                hits: 888,
                'thumbs': 1,
                picture: '/statics/image/1111.jpg',
            },
            {
                headportrait: '/statics/image/1111.jpg',
                username: '乔建龙2',
                ctime: '2016-9-22 19:40',
                type: '老男孩教育2',
                content: '业内一流教育机构2',
                hits: 777,
                'thumbs': 1,
                picture: '/statics/image/222.jpg',
            }
        ],
        pictures:[
            '/statics/image/1111.jpg',
            '/statics/image/222.jpg',
            '/statics/image/1111.jpg',
            '/statics/image/222.jpg',
            '/statics/image/1111.jpg',
        ],
        follow:[
            {
                username:'老男孩教育1',
                authentication_information:'业内权威教育机构1'
            },
            {
                username:'老男孩教育2',
                authentication_information:'业内权威教育机构2'
            },
            {
                username:'老男孩教育3',
                authentication_information:'业内权威教育机构3'
            }
        ]
    }
    if(information.sataus){
        $('button.focus_button').addClass('hide')
    }else {$('button.focus_button').click(function () {
        if($('button.focus_button').text()=='关注'){
            $('button.focus_button').text('取消关注')
        }else if($('button.focus_button').text()=='取消关注'){
            $('button.focus_button').text('关注')
        }
    })
        if(information.focused==true){
        $('button.focus_button').text('取消关注')}
    }
    $('img.headportrait').attr('src', information.headportrait);
    $('.username').text(information.username);
    $('img.sex').attr('src', information.sex);
    $('a.introduce').text(information.introduce);
    if(information.position=='my_profile') {
        $('.content_type0').addClass('active')
        $('.favor_num').text(information.favor_num);
        $('.follow_num').text(information.follow_num);
        $('.weibo_num').text(information.weibo_num);
        $('.authentication_information').text(information.authentication_information);
        $('.information_percent_num').text(information.information_percent_num + '%');
        $('.percent').width(information.information_percent_num + '%')
        $('.weibo_level').text('lv.' + information.weibo_level);
        $('img.minialbum_content_big').attr('src', information.photo_address[0]);
        $('img.minialbum_content_small').eq(0).attr('src', information.photo_address[1]);
        $('img.minialbum_content_small').eq(1).attr('src', information.photo_address[2]);
        $('img.minialbum_content_small').eq(2).attr('src', information.photo_address[3]);
        $('img.minialbum_content_small').eq(3).attr('src', information.photo_address[4]);
        $('img.minialbum_content_small').eq(4).attr('src', information.photo_address[5]);
        $('img.minifavor_pic').attr('src', information.favor.picture);
        $('a.minifavor_user').text(information.favor.user);
        $('a.minifavor_user').attr('user_id',information.favor.user_id);
        $('a.minifavor_content_detail').text(information.favor.content);

        $.each(information.blogs, function (n, value) {
            $('div.myweiboexample').clone().attr('class', 'myweiboclone').insertBefore($('div.myweiboexample'))
            $('.myweiboclone').find('img.myweibo_picture').attr('src', value.headportrait)
            $('.myweiboclone').find('a.myweibo_detail_user').text(value.username)
            $('.myweiboclone').find('a.myweibo_detail_ctime').text(value.ctime)
            $('.myweiboclone').find('a.myweibo_detail_from').text(value.from)
            $('.myweiboclone').find('.myweibo_detail_content').text(value.content)
            $('.myweiboclone').find('img.myweibo_detail_picture').attr('src', value.picture)
            $('.myweiboclone').find('a.my_weibo_hits').text('阅读量：' + value.hits + '推广')
            if (value.thumbs == 0) {
                $('.myweiboclone').find('a.myweibo_thumbs').removeClass('active')
            } else if (value.thumbs == 1) {
                $('.myweiboclone').find('div.myweibo_thumbs').addClass('active')
            }
            $('.myweiboclone').attr('class', 'myweibo').addClass('clearfix')
            console.log(n);
            console.log(value);
        })
    }else if (information.position=='my_album'){
        $('.content_type1').addClass('active')
        $.each(information.pictures,function (n,value) {
            $('div.my_album_example').clone().attr('class', 'my_album_clone').insertBefore($('.my_album_example'))
            $('.my_album_clone img.my_album_clone').attr('src',value)
            console.log(value)
            $('div.my_album_clone').attr('class','my_album_item')
            $('div.my_album_item img.my_album_clone').attr('class','my_album_item')
        })
    }
    else if (information.position=='my_follow'){
        $.each(information.follow,function (n,value) {
            $('div.follow_detail_content_example').clone().attr('class', 'follow_detail_content_clone').insertBefore($('div.follow_detail_content_example'))
            $('.follow_detail_content_clone .follow_detail_username_clone').text(value.username)
            $('.follow_detail_content_clone .follow_detail_username_clone').attr('class','follow_detail_username')
            $('.follow_detail_content_clone .follow_detail_authentication_information_clone').text(value.authentication_information)
            $('.follow_detail_content_clone .follow_detail_authentication_information_clone').attr('class','follow_detail_authentication_information')
            $('div.follow_detail_content_clone').attr('class','follow_detail_content_item')
        })
    }
})
