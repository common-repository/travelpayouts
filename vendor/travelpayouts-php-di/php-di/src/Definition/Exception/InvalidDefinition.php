<?php

declare(strict_types=1);

namespace Travelpayouts\Vendor\DI\Definition\Exception;
use Travelpayouts\Vendor\DI\Definition\Definition;
use Travelpayouts\Vendor\Psr\Container\ContainerExceptionInterface;

/**
 * Invalid DI definitions.
 *
 * @author Matthieu Napoli <matthieu@mnapoli.fr>
 */
class InvalidDefinition extends \Exception implements ContainerExceptionInterface
{
    public static function create(Definition $definition, string $message, \Exception $previous = null) : self
    {
        return new self(sprintf(
            '%s' . \PHP_EOL . 'Full definition:' . \PHP_EOL . '%s',
            $message,
            (string) $definition
        ), 0, $previous);
    }
}
