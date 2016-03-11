About the solution:

I took the task a bit further than the spec defined and apart from the projectile bouncing
of the bottom of the browser and having gravity applies, I also bouncing off of all 4 walls and
included energy dispersion and friction on bouncing.

How to run:

Install packages
- npm install
Warning, you might have peer dependencies errors on some packages that depend on webpack version.
It's because there is a bug with weback beta versions, but the code actually works.

To see in browser
- webpack -p
- npm run server
- Open browser at localhost:8080

To run tests
- npm run tests

Technologies used:
- Babel for ES6
- jQuery for cross-browser document.ready and click handler.
- Webpack for building and webpack-dev-server for running the app.
- Jasmine because of the DSL similar to Rspec.
- Karma as spec runner.
- Sinon for spies and stubs.

Things to improve (that I'm aware of but ran out of time I gave myself to complete this):

- Have forces return a new force vector and not modify the object. The problem were edge cases
when particles got stuck in a wall because of energy dispersion. They didn't have enough energy
to escape it without falling into the same condition of being out of bounds and having the force
be reverted again. Tried a solution with diffing the position out of bounds and adding it to the
reverted force but in a few cases it resulted in particles speeding up too much.

- Move specs to a different folder
- Create the js file into a snippet that can be attached to any website instead of
requiring a speciifc html structure
- Linter, I mix single/double quotes and I forget semi-colons(Ruby makes me lazy :/)

Lessons learned:

Do not try to do stuff like this based on speed + angle. This would have saved me 3 evenings of
debugging trigonometry edge cases :).
