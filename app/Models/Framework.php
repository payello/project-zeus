<?php

namespace App\Models;

use App\Models\Document;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Framework extends Model
{
    use HasFactory;

    protected $fillable = ['framework_name', 'framework_description'];

    public function documents(): BelongsToMany
    {
        return $this->belongsToMany(Document::class, 'document_framework');
    }
}
