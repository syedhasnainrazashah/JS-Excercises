function show_summary(items){
    console.log("Sandwich Contains the following items:")
    for (var item of items){
        console.log(item)
    }
}

show_summary(["chicken", "tomtato", "cucumber"])
show_summary(["vegetables"])