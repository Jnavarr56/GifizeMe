const Emojis = () => {

    let emArr = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤥 🤫 🤭 🧐 🤓 😈 👿'.split(' ');

    emArr.reverse();

    emArr.push('Welcome to Gifize.');

    emArr.reverse();
    
    return emArr = emArr.map((x, i) => { 
    
        return { type: `${!i ? 'text' : 'emoji'}`, item:  !i ? 'Welcome to GifizeMe.' : `${x}` } 
    
    });

}

export default Emojis;

