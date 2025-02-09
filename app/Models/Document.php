<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Framework;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'title',
        'type',
        'format',
        'author_id',
    ];

    public function frameworks(): HasMany
    {
        return $this->hasMany(Framework::class, 'document_framework');
    }

    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class, 'document_skills');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
