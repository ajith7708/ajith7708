class Github{
    constructor(){
        this.client_id="Ov23liDE9ODp4AezMnX6",
        this.client_secret="e0f3d738a02e48e62c11504502b6c32d9fbd712f"
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile=await profileResponse.json();
        return profile;
    }
}