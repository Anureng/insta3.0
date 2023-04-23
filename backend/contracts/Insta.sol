//SPDX-License-Identifier:MIT

pragma solidity 0.8.9;

contract Insta {
    struct user {
        string name;
    }

    struct post {
        string text;
        string imageUrl;
        address WhoCreatedPost;
    }

    struct friend {
        string name;
        address pubkey;
    }

    mapping(address => user) public ALLUser;
    mapping(address => post) public ALLPost;
    post[] AllPostArray;
    user[] AllUserArray;
    friend[] userFriend;

    function CreateUser(string memory _name) public {
        ALLUser[msg.sender].name = _name;
        AllUserArray.push(user(_name));
    }

    function createPost(string memory _text, string memory _imageUrl) public {
        ALLPost[msg.sender].text = _text;
        ALLPost[msg.sender].imageUrl = _imageUrl;
        ALLPost[msg.sender].WhoCreatedPost = msg.sender;
        AllPostArray.push(post(_text, _imageUrl, msg.sender));
    }

    function AllPostByEveryone() public view returns (post[] memory) {
        return AllPostArray;
    }

    function allUser() public view returns (user[] memory) {
        return AllUserArray;
    }
}
