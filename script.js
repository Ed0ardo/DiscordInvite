function card(e, val, rand) {
    e += '<div class="card" style="--duration:' + rand + 's">';
    e += '  <div class="card--icon">';
    e += '    <img src="' + val.avatar_url + '" alt="' + val.username + '">';
    e += '    <span></span>';
    e += '  </div>';
    e += '  <div class="card--content">';
    e += '    <div class="name">';
    e += '      <span>' + val.username + '</span>';
    e += '    </div>';
    e += '    <div class="playing">';
    if (val.game) {
        e += '      <span class="title">is playing:</span>';
        e += '      <span class="game">' + val.game.name + '</span>';
    }
    e += '    </div>';
    e += '  </div>';
    e += '</div>';
    return e
}

function rnd(max, min) {
    if (!min) { min = 0 }
    return Math.floor(Math.random() * max) + min;
}


$.getJSON("https://discord.com/api/guilds/1234/widget.json", function(data) {
    var counter = 0;
    var row = 1;
    var rndLine = rnd(60, 60);
    var link = $('.main .overlay .link')

    link.text(data.name);
    link.attr('href', data.instant_invite);

    while (counter < 340) {
        var item = '';
        item += card(item, data.members[rnd(data.members.length)], rndLine);
        //$.each( data.members, function( key, value ) {
        //  item += card(item , value);
        //});
        $(item).appendTo('.main .background .inner-' + row);
        counter++
        if (counter % 20 == 0) {
            row++;
            rndLine = rnd(60, 60)
        }
    }
});