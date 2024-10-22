<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('billing', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('reading_id');
            $table->foreign('reading_id')->references('id')->on('readings')
                ->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('additional_fees_id');
            $table->foreign('additional_fees_id')->references('id')->on('additional_fees')
                ->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('rate_id');
            $table->foreign('rate_id')->references('id')->on('rates')
                ->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('due_id');
            $table->foreign('due_id')->references('id')->on('dues')
                ->onDelete('cascade')->onUpdate('cascade');

            $table->float('prev_readings');
            $table->float('current_readings');
            $table->integer('is_paid')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('billing');
    }
};
