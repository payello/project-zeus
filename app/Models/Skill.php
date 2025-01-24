<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Skill extends Model
{
    public function documents(): BelongsToMany
    {
        return $this->belongsToMany(Document::class, 'document_skill');
    }
}
