const rabbit = {
    x: 0,
    y: 0,
    foot: 4,
    go: () => {
       rabbit.x = rabbit.x + 1;
       return;
    },
    back: () => {
       rabbit.y = rabbit.y + 1;
       return;
    }
}