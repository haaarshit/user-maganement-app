//on creation of new user 
$('#add-user').submit(function(e){
    alert('User Created successfully')
})
// on updation of new user
$('#update_user').submit(function(e){
    e.preventDefault()
    var data = {}
    var unindexed_array = $(this).serializeArray()
    $.map(unindexed_array,(n,i)=>{
          data[n['name']]=n['value']
    })
    // console.log(data.id)
    var request = {
        "url":`http://localhost:5000/api/user/${data.id}`,
        "method":'PUT',
        "data":data
    }
    $.ajax(request).done(function(res){
        alert('data succesfuly updated')
    })
})

if(window.location.pathname=='/'){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
            "url":`http://localhost:5000/api/user/${id}`,
            "method":'DELETE'
        }
        if(confirm("do you want to delete this user")){
            $.ajax(request).done(function(res){
                alert('data succesfuly deleted')
            })
        }
    })
}