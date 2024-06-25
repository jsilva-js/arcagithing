// x >= y    -> x is superset of y
// [thing]   -> 0, 1 or many things
// thing     -> unique thing
// x + y     -> (unique x) union (unique y)
// [x] + [y] -> (all x) union (all y)
// [x + y]   -> all (x union y(x))
// [x+y] ~= [x] + [y]

// holes = 0s
// public = distinct colors
// private = same color
// body = group of contiguous perpendicular
//        neighbors (except 0)
// limb = group of contiguous diagonal
//        neighbors (except 0)
// group = [public_body + public_limb]
// semigroup = [public_body] + [public_limb]
// public_body = group of contiguous perpendicular
//               neighbors of all colors (except 0)
// public_limb = group of contiguous diagonal
//               neighbors of all colors (except 0)
// private_body = group of contiguous perpendicular
//               neighbors of same color (except 0)
// private_limb = group of contiguous diagonal
//               neighbors of same color (except 0)

// grid = floor + public
// floor = [holes]
// public = [group] + [semigroup] + [unit]
// group = [body + limb]
// semigroup = [body] + [limb]
// body = [public_body] >= [private_body]
// limb = [public_limb] >= [private_limb]
// private_group = [private_body + private_limb]
