<?php

namespace App\View\Components;

use Exception;
use Illuminate\View\Component;

class Button extends Component
{
    public bool $block;

    public ?string $href;

    public ?string $type;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(bool $block = false, string $href = null, string $type = null)
    {
        $this->block = $block;
        $this->href = $href;
        $this->type = $type;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.button');
    }

    public function isAnchor(): bool
    {
        if (!$this->href && !$this->type) {
            throw new Exception("<x-button> must be provided a href or type!");
        }

        return !!$this->href;
    }
}
