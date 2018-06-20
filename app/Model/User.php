<?php

namespace App\Model;

use Shridhar\Users\Model\User as Model;

class User extends Model {

    protected static $token_class = UserToken::class, $role_class = Role::class;

}
