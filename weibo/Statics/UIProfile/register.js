/**
 * Created by 寒夜落雪 on 2016/9/26.
 */
$(function () {
    $('a.change_register_type').click(function () {
        if($('div.username_title').text()=='手机'){
            $('div.username_title').text('邮箱')
            $('input.username').attr('name','email')
            $('input.username').attr('placeholder','请输入您的邮箱地址')
            $('a.change_register_type').text('手机')
        }else if($('div.username_title').text()=='邮箱'){
            $('div.username_title').text('手机')
            $('input.username').attr('name','mobilephone')
            $('input.username').attr('placeholder','请输入您的手机号码')
            $('a.change_register_type').text('邮箱')
        }
    })
    $('a.submit_button').click(function () {
        var formData = new FormData($('#register_form'))
       $.ajax({
            url: '/user_register',
            type: 'POST',
            data: formData,
            dataType: 'json',
            async: false,  
            cache: false,  
            contentType: false,  
            processData: false, 
            success: function(arg){
                if(arg.status=='success'){
                    window.location.href = '/login'
                }else if(arg.status=='no'){
                    alert(arg.message)
                }
            }
        })
    })
})
