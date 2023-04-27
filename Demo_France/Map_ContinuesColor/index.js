$.get('example.svg',function (data) {
    let svg = data.documentElement
    $('#container').append(svg)
    let style = d3.select("style")
    $('body').append(style)
    let xmlString = new XMLSerializer().serializeToString(svg)
    console.log(xmlString)
    let reg = /#[0-9a-zA-Z]{6}/ig
    let n = xmlString.match(reg)

    console.log(reg.exec(xmlString))
    console.log(reg.exec(xmlString))
    console.log(reg.exec(xmlString))
    let result;
    while (1){
        result = reg.exec(xmlString)
        console.log(result)
        if(result==null)break;
    }
    let linearArray = $("linearGradient")
    console.log(linearArray)
    let rectId = []
    linearArray.each((index,ele)=>{
        console.log(ele.id)
        rectId.push(ele.id)
    })
    console.log(d3.select("#colorContainer"))
    d3.select("#colorContainer")
        .selectAll(".rect")
        .data(rectId)
        .enter()
        .append("rect")
        .attr("x",0)
        .attr("y",(item,index)=>20*index+20)
        .attr("width",400)
        .attr("height",20)
        .attr("fill",(item,index)=>`url(#${item})`)
})