function render(template, dataArr){
    let h=''
    let r = /\[(.*)\]/g;
    let properties = template.match(r)
    for (let i = 0; i < properties.length; i++) {
        properties[i] = properties[i].replace('[', '').replace(']', '')
    }
    dataArr.forEach(item => {
        let itemhtml = template
        properties.forEach(p =>{
            itemhtml = itemhtml.replace(`[${p}]`, item[p])
        })
        h += itemhtml
    });
    return h
}