
// === Auto-generated postamble setup entry stuff ===

Module.callMain = function callMain(args) {
  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < {{{ QUANTUM_SIZE }}}-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_STATIC) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_STATIC));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_STATIC);

#if CATCH_EXIT_CODE
  try {
    return _main(argc, argv, 0);
  }
  catch(e) { if (e.name == "ExitStatus") return e.status; throw e; }
#else
  return _main(argc, argv, 0);
#endif
}

{{GLOBAL_VARS}}

function run(args) {
  args = args || Module['arguments'];

  if (Module['setStatus']) {
    Module['setStatus'](''); // clear the status from "Downloading.." etc.
  }

  if (Module['preRun']) {
    Module['preRun']();
    if (runDependencies > 0) {
      // preRun added a dependency, run will be called later
      Module['preRun'] = null;
      return 0;
    }
  }

  var ret = null;
  if (Module['_main']) {
    preMain();
    ret = Module.callMain(args);
    if (!Module['noExitRuntime']) {
      exitRuntime();
    }
  }

  if (Module['postRun']) {
    Module['postRun']();
  }

  return ret;
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

initRuntime();

#if INVOKE_RUN
#else
addRunDependency();
#endif
if (Module['noInitialRun']) {
  addRunDependency();
}

if (runDependencies == 0) {
  var ret = run();
#if CATCH_EXIT_CODE
  Module.print('Exit Status: ' + ret);
#endif
}

// {{POST_RUN_ADDITIONS}}

