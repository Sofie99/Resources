var up = Object.create;
var Kr = Object.defineProperty;
var lp = Object.getOwnPropertyDescriptor;
var cp = Object.getOwnPropertyNames,
  Xa = Object.getOwnPropertySymbols,
  fp = Object.getPrototypeOf,
  eo = Object.prototype.hasOwnProperty,
  pp = Object.prototype.propertyIsEnumerable;
var Za = (t, e, r) =>
    e in t
      ? Kr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  Yr = (t, e) => {
    for (var r in e || (e = {})) eo.call(e, r) && Za(t, r, e[r]);
    if (Xa) for (var r of Xa(e)) pp.call(e, r) && Za(t, r, e[r]);
    return t;
  };
var hp = (t) => Kr(t, "__esModule", { value: !0 });
var j = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  to = (t, e) => {
    for (var r in e) Kr(t, r, { get: e[r], enumerable: !0 });
  },
  dp = (t, e, r, i) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let n of cp(e))
        !eo.call(t, n) &&
          (r || n !== "default") &&
          Kr(t, n, {
            get: () => e[n],
            enumerable: !(i = lp(e, n)) || i.enumerable,
          });
    return t;
  },
  st = (t, e) =>
    dp(
      hp(
        Kr(
          t != null ? up(fp(t)) : {},
          "default",
          !e && t && t.__esModule
            ? { get: () => t.default, enumerable: !0 }
            : { value: t, enumerable: !0 }
        )
      ),
      t
    );
var ye = (t, e, r) =>
  new Promise((i, n) => {
    var s = (c) => {
        try {
          u(r.next(c));
        } catch (m) {
          n(m);
        }
      },
      a = (c) => {
        try {
          u(r.throw(c));
        } catch (m) {
          n(m);
        }
      },
      u = (c) => (c.done ? i(c.value) : Promise.resolve(c.value).then(s, a));
    u((r = r.apply(t, e)).next());
  });
var io = j((ro) => {
  (function t(e) {
    "use strict";
    var r, i, n, s, a, u;
    function c(C) {
      var v = {},
        S,
        A;
      for (S in C)
        C.hasOwnProperty(S) &&
          ((A = C[S]),
          typeof A == "object" && A !== null ? (v[S] = c(A)) : (v[S] = A));
      return v;
    }
    function m(C, v) {
      var S, A, T, P;
      for (A = C.length, T = 0; A; )
        (S = A >>> 1),
          (P = T + S),
          v(C[P]) ? (A = S) : ((T = P + 1), (A -= S + 1));
      return T;
    }
    (r = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      StaticBlock: "StaticBlock",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression",
    }),
      (n = {
        AssignmentExpression: ["left", "right"],
        AssignmentPattern: ["left", "right"],
        ArrayExpression: ["elements"],
        ArrayPattern: ["elements"],
        ArrowFunctionExpression: ["params", "body"],
        AwaitExpression: ["argument"],
        BlockStatement: ["body"],
        BinaryExpression: ["left", "right"],
        BreakStatement: ["label"],
        CallExpression: ["callee", "arguments"],
        CatchClause: ["param", "body"],
        ChainExpression: ["expression"],
        ClassBody: ["body"],
        ClassDeclaration: ["id", "superClass", "body"],
        ClassExpression: ["id", "superClass", "body"],
        ComprehensionBlock: ["left", "right"],
        ComprehensionExpression: ["blocks", "filter", "body"],
        ConditionalExpression: ["test", "consequent", "alternate"],
        ContinueStatement: ["label"],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ["body", "test"],
        EmptyStatement: [],
        ExportAllDeclaration: ["source"],
        ExportDefaultDeclaration: ["declaration"],
        ExportNamedDeclaration: ["declaration", "specifiers", "source"],
        ExportSpecifier: ["exported", "local"],
        ExpressionStatement: ["expression"],
        ForStatement: ["init", "test", "update", "body"],
        ForInStatement: ["left", "right", "body"],
        ForOfStatement: ["left", "right", "body"],
        FunctionDeclaration: ["id", "params", "body"],
        FunctionExpression: ["id", "params", "body"],
        GeneratorExpression: ["blocks", "filter", "body"],
        Identifier: [],
        IfStatement: ["test", "consequent", "alternate"],
        ImportExpression: ["source"],
        ImportDeclaration: ["specifiers", "source"],
        ImportDefaultSpecifier: ["local"],
        ImportNamespaceSpecifier: ["local"],
        ImportSpecifier: ["imported", "local"],
        Literal: [],
        LabeledStatement: ["label", "body"],
        LogicalExpression: ["left", "right"],
        MemberExpression: ["object", "property"],
        MetaProperty: ["meta", "property"],
        MethodDefinition: ["key", "value"],
        ModuleSpecifier: [],
        NewExpression: ["callee", "arguments"],
        ObjectExpression: ["properties"],
        ObjectPattern: ["properties"],
        PrivateIdentifier: [],
        Program: ["body"],
        Property: ["key", "value"],
        PropertyDefinition: ["key", "value"],
        RestElement: ["argument"],
        ReturnStatement: ["argument"],
        SequenceExpression: ["expressions"],
        SpreadElement: ["argument"],
        StaticBlock: ["body"],
        Super: [],
        SwitchStatement: ["discriminant", "cases"],
        SwitchCase: ["test", "consequent"],
        TaggedTemplateExpression: ["tag", "quasi"],
        TemplateElement: [],
        TemplateLiteral: ["quasis", "expressions"],
        ThisExpression: [],
        ThrowStatement: ["argument"],
        TryStatement: ["block", "handler", "finalizer"],
        UnaryExpression: ["argument"],
        UpdateExpression: ["argument"],
        VariableDeclaration: ["declarations"],
        VariableDeclarator: ["id", "init"],
        WhileStatement: ["test", "body"],
        WithStatement: ["object", "body"],
        YieldExpression: ["argument"],
      }),
      (s = {}),
      (a = {}),
      (u = {}),
      (i = { Break: s, Skip: a, Remove: u });
    function d(C, v) {
      (this.parent = C), (this.key = v);
    }
    (d.prototype.replace = function (v) {
      this.parent[this.key] = v;
    }),
      (d.prototype.remove = function () {
        return Array.isArray(this.parent)
          ? (this.parent.splice(this.key, 1), !0)
          : (this.replace(null), !1);
      });
    function E(C, v, S, A) {
      (this.node = C), (this.path = v), (this.wrap = S), (this.ref = A);
    }
    function y() {}
    (y.prototype.path = function () {
      var v, S, A, T, P, Q;
      function I(B, W) {
        if (Array.isArray(W))
          for (A = 0, T = W.length; A < T; ++A) B.push(W[A]);
        else B.push(W);
      }
      if (!this.__current.path) return null;
      for (P = [], v = 2, S = this.__leavelist.length; v < S; ++v)
        (Q = this.__leavelist[v]), I(P, Q.path);
      return I(P, this.__current.path), P;
    }),
      (y.prototype.type = function () {
        var C = this.current();
        return C.type || this.__current.wrap;
      }),
      (y.prototype.parents = function () {
        var v, S, A;
        for (A = [], v = 1, S = this.__leavelist.length; v < S; ++v)
          A.push(this.__leavelist[v].node);
        return A;
      }),
      (y.prototype.current = function () {
        return this.__current.node;
      }),
      (y.prototype.__execute = function (v, S) {
        var A, T;
        return (
          (T = void 0),
          (A = this.__current),
          (this.__current = S),
          (this.__state = null),
          v &&
            (T = v.call(
              this,
              S.node,
              this.__leavelist[this.__leavelist.length - 1].node
            )),
          (this.__current = A),
          T
        );
      }),
      (y.prototype.notify = function (v) {
        this.__state = v;
      }),
      (y.prototype.skip = function () {
        this.notify(a);
      }),
      (y.prototype.break = function () {
        this.notify(s);
      }),
      (y.prototype.remove = function () {
        this.notify(u);
      }),
      (y.prototype.__initialize = function (C, v) {
        (this.visitor = v),
          (this.root = C),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          v.fallback === "iteration"
            ? (this.__fallback = Object.keys)
            : typeof v.fallback == "function" && (this.__fallback = v.fallback),
          (this.__keys = n),
          v.keys &&
            (this.__keys = Object.assign(Object.create(this.__keys), v.keys));
      });
    function x(C) {
      return C == null ? !1 : typeof C == "object" && typeof C.type == "string";
    }
    function b(C, v) {
      return (
        (C === r.ObjectExpression || C === r.ObjectPattern) &&
        v === "properties"
      );
    }
    function w(C, v) {
      for (var S = C.length - 1; S >= 0; --S) if (C[S].node === v) return !0;
      return !1;
    }
    (y.prototype.traverse = function (v, S) {
      var A, T, P, Q, I, B, W, Z, re, J, $, Ae;
      for (
        this.__initialize(v, S),
          Ae = {},
          A = this.__worklist,
          T = this.__leavelist,
          A.push(new E(v, null, null, null)),
          T.push(new E(null, null, null, null));
        A.length;

      ) {
        if (((P = A.pop()), P === Ae)) {
          if (
            ((P = T.pop()),
            (B = this.__execute(S.leave, P)),
            this.__state === s || B === s)
          )
            return;
          continue;
        }
        if (P.node) {
          if (((B = this.__execute(S.enter, P)), this.__state === s || B === s))
            return;
          if ((A.push(Ae), T.push(P), this.__state === a || B === a)) continue;
          if (((Q = P.node), (I = Q.type || P.wrap), (J = this.__keys[I]), !J))
            if (this.__fallback) J = this.__fallback(Q);
            else throw new Error("Unknown node type " + I + ".");
          for (Z = J.length; (Z -= 1) >= 0; )
            if (((W = J[Z]), ($ = Q[W]), !!$)) {
              if (Array.isArray($)) {
                for (re = $.length; (re -= 1) >= 0; )
                  if (!!$[re] && !w(T, $[re])) {
                    if (b(I, J[Z])) P = new E($[re], [W, re], "Property", null);
                    else if (x($[re])) P = new E($[re], [W, re], null, null);
                    else continue;
                    A.push(P);
                  }
              } else if (x($)) {
                if (w(T, $)) continue;
                A.push(new E($, W, null, null));
              }
            }
        }
      }
    }),
      (y.prototype.replace = function (v, S) {
        var A, T, P, Q, I, B, W, Z, re, J, $, Ae, Te;
        function M(bt) {
          var Pt, zt, ie, qe;
          if (bt.ref.remove()) {
            for (zt = bt.ref.key, qe = bt.ref.parent, Pt = A.length; Pt--; )
              if (((ie = A[Pt]), ie.ref && ie.ref.parent === qe)) {
                if (ie.ref.key < zt) break;
                --ie.ref.key;
              }
          }
        }
        for (
          this.__initialize(v, S),
            $ = {},
            A = this.__worklist,
            T = this.__leavelist,
            Ae = { root: v },
            B = new E(v, null, null, new d(Ae, "root")),
            A.push(B),
            T.push(B);
          A.length;

        ) {
          if (((B = A.pop()), B === $)) {
            if (
              ((B = T.pop()),
              (I = this.__execute(S.leave, B)),
              I !== void 0 && I !== s && I !== a && I !== u && B.ref.replace(I),
              (this.__state === u || I === u) && M(B),
              this.__state === s || I === s)
            )
              return Ae.root;
            continue;
          }
          if (
            ((I = this.__execute(S.enter, B)),
            I !== void 0 &&
              I !== s &&
              I !== a &&
              I !== u &&
              (B.ref.replace(I), (B.node = I)),
            (this.__state === u || I === u) && (M(B), (B.node = null)),
            this.__state === s || I === s)
          )
            return Ae.root;
          if (
            ((P = B.node),
            !!P && (A.push($), T.push(B), !(this.__state === a || I === a)))
          ) {
            if (((Q = P.type || B.wrap), (re = this.__keys[Q]), !re))
              if (this.__fallback) re = this.__fallback(P);
              else throw new Error("Unknown node type " + Q + ".");
            for (W = re.length; (W -= 1) >= 0; )
              if (((Te = re[W]), (J = P[Te]), !!J))
                if (Array.isArray(J)) {
                  for (Z = J.length; (Z -= 1) >= 0; )
                    if (J[Z]) {
                      if (b(Q, re[W]))
                        B = new E(J[Z], [Te, Z], "Property", new d(J, Z));
                      else if (x(J[Z]))
                        B = new E(J[Z], [Te, Z], null, new d(J, Z));
                      else continue;
                      A.push(B);
                    }
                } else x(J) && A.push(new E(J, Te, null, new d(P, Te)));
          }
        }
        return Ae.root;
      });
    function _(C, v) {
      var S = new y();
      return S.traverse(C, v);
    }
    function O(C, v) {
      var S = new y();
      return S.replace(C, v);
    }
    function L(C, v) {
      var S;
      return (
        (S = m(v, function (T) {
          return T.range[0] > C.range[0];
        })),
        (C.extendedRange = [C.range[0], C.range[1]]),
        S !== v.length && (C.extendedRange[1] = v[S].range[0]),
        (S -= 1),
        S >= 0 && (C.extendedRange[0] = v[S].range[1]),
        C
      );
    }
    function R(C, v, S) {
      var A = [],
        T,
        P,
        Q,
        I;
      if (!C.range) throw new Error("attachComments needs range information");
      if (!S.length) {
        if (v.length) {
          for (Q = 0, P = v.length; Q < P; Q += 1)
            (T = c(v[Q])), (T.extendedRange = [0, C.range[0]]), A.push(T);
          C.leadingComments = A;
        }
        return C;
      }
      for (Q = 0, P = v.length; Q < P; Q += 1) A.push(L(c(v[Q]), S));
      return (
        (I = 0),
        _(C, {
          enter: function (B) {
            for (
              var W;
              I < A.length && ((W = A[I]), !(W.extendedRange[1] > B.range[0]));

            )
              W.extendedRange[1] === B.range[0]
                ? (B.leadingComments || (B.leadingComments = []),
                  B.leadingComments.push(W),
                  A.splice(I, 1))
                : (I += 1);
            if (I === A.length) return i.Break;
            if (A[I].extendedRange[0] > B.range[1]) return i.Skip;
          },
        }),
        (I = 0),
        _(C, {
          leave: function (B) {
            for (
              var W;
              I < A.length && ((W = A[I]), !(B.range[1] < W.extendedRange[0]));

            )
              B.range[1] === W.extendedRange[0]
                ? (B.trailingComments || (B.trailingComments = []),
                  B.trailingComments.push(W),
                  A.splice(I, 1))
                : (I += 1);
            if (I === A.length) return i.Break;
            if (A[I].extendedRange[0] > B.range[1]) return i.Skip;
          },
        }),
        C
      );
    }
    return (
      (e.Syntax = r),
      (e.traverse = _),
      (e.replace = O),
      (e.attachComments = R),
      (e.VisitorKeys = n),
      (e.VisitorOption = i),
      (e.Controller = y),
      (e.cloneEnvironment = function () {
        return t({});
      }),
      e
    );
  })(ro);
});
var so = j((ey, no) => {
  (function () {
    "use strict";
    function t(a) {
      if (a == null) return !1;
      switch (a.type) {
        case "ArrayExpression":
        case "AssignmentExpression":
        case "BinaryExpression":
        case "CallExpression":
        case "ConditionalExpression":
        case "FunctionExpression":
        case "Identifier":
        case "Literal":
        case "LogicalExpression":
        case "MemberExpression":
        case "NewExpression":
        case "ObjectExpression":
        case "SequenceExpression":
        case "ThisExpression":
        case "UnaryExpression":
        case "UpdateExpression":
          return !0;
      }
      return !1;
    }
    function e(a) {
      if (a == null) return !1;
      switch (a.type) {
        case "DoWhileStatement":
        case "ForInStatement":
        case "ForStatement":
        case "WhileStatement":
          return !0;
      }
      return !1;
    }
    function r(a) {
      if (a == null) return !1;
      switch (a.type) {
        case "BlockStatement":
        case "BreakStatement":
        case "ContinueStatement":
        case "DebuggerStatement":
        case "DoWhileStatement":
        case "EmptyStatement":
        case "ExpressionStatement":
        case "ForInStatement":
        case "ForStatement":
        case "IfStatement":
        case "LabeledStatement":
        case "ReturnStatement":
        case "SwitchStatement":
        case "ThrowStatement":
        case "TryStatement":
        case "VariableDeclaration":
        case "WhileStatement":
        case "WithStatement":
          return !0;
      }
      return !1;
    }
    function i(a) {
      return r(a) || (a != null && a.type === "FunctionDeclaration");
    }
    function n(a) {
      switch (a.type) {
        case "IfStatement":
          return a.alternate != null ? a.alternate : a.consequent;
        case "LabeledStatement":
        case "ForStatement":
        case "ForInStatement":
        case "WhileStatement":
        case "WithStatement":
          return a.body;
      }
      return null;
    }
    function s(a) {
      var u;
      if (a.type !== "IfStatement" || a.alternate == null) return !1;
      u = a.consequent;
      do {
        if (u.type === "IfStatement" && u.alternate == null) return !0;
        u = n(u);
      } while (u);
      return !1;
    }
    no.exports = {
      isExpression: t,
      isStatement: r,
      isIterationStatement: e,
      isSourceElement: i,
      isProblematicIfStatement: s,
      trailingStatement: n,
    };
  })();
});
var Qn = j((ty, ao) => {
  (function () {
    "use strict";
    var t, e, r, i, n, s;
    (e = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    }),
      (t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
      });
    function a(_) {
      return 48 <= _ && _ <= 57;
    }
    function u(_) {
      return (
        (48 <= _ && _ <= 57) || (97 <= _ && _ <= 102) || (65 <= _ && _ <= 70)
      );
    }
    function c(_) {
      return _ >= 48 && _ <= 55;
    }
    r = [
      5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
      8239, 8287, 12288, 65279,
    ];
    function m(_) {
      return (
        _ === 32 ||
        _ === 9 ||
        _ === 11 ||
        _ === 12 ||
        _ === 160 ||
        (_ >= 5760 && r.indexOf(_) >= 0)
      );
    }
    function d(_) {
      return _ === 10 || _ === 13 || _ === 8232 || _ === 8233;
    }
    function E(_) {
      if (_ <= 65535) return String.fromCharCode(_);
      var O = String.fromCharCode(Math.floor((_ - 65536) / 1024) + 55296),
        L = String.fromCharCode(((_ - 65536) % 1024) + 56320);
      return O + L;
    }
    for (i = new Array(128), s = 0; s < 128; ++s)
      i[s] =
        (s >= 97 && s <= 122) || (s >= 65 && s <= 90) || s === 36 || s === 95;
    for (n = new Array(128), s = 0; s < 128; ++s)
      n[s] =
        (s >= 97 && s <= 122) ||
        (s >= 65 && s <= 90) ||
        (s >= 48 && s <= 57) ||
        s === 36 ||
        s === 95;
    function y(_) {
      return _ < 128 ? i[_] : e.NonAsciiIdentifierStart.test(E(_));
    }
    function x(_) {
      return _ < 128 ? n[_] : e.NonAsciiIdentifierPart.test(E(_));
    }
    function b(_) {
      return _ < 128 ? i[_] : t.NonAsciiIdentifierStart.test(E(_));
    }
    function w(_) {
      return _ < 128 ? n[_] : t.NonAsciiIdentifierPart.test(E(_));
    }
    ao.exports = {
      isDecimalDigit: a,
      isHexDigit: u,
      isOctalDigit: c,
      isWhiteSpace: m,
      isLineTerminator: d,
      isIdentifierStartES5: y,
      isIdentifierPartES5: x,
      isIdentifierStartES6: b,
      isIdentifierPartES6: w,
    };
  })();
});
var uo = j((ry, oo) => {
  (function () {
    "use strict";
    var t = Qn();
    function e(y) {
      switch (y) {
        case "implements":
        case "interface":
        case "package":
        case "private":
        case "protected":
        case "public":
        case "static":
        case "let":
          return !0;
        default:
          return !1;
      }
    }
    function r(y, x) {
      return !x && y === "yield" ? !1 : i(y, x);
    }
    function i(y, x) {
      if (x && e(y)) return !0;
      switch (y.length) {
        case 2:
          return y === "if" || y === "in" || y === "do";
        case 3:
          return y === "var" || y === "for" || y === "new" || y === "try";
        case 4:
          return (
            y === "this" ||
            y === "else" ||
            y === "case" ||
            y === "void" ||
            y === "with" ||
            y === "enum"
          );
        case 5:
          return (
            y === "while" ||
            y === "break" ||
            y === "catch" ||
            y === "throw" ||
            y === "const" ||
            y === "yield" ||
            y === "class" ||
            y === "super"
          );
        case 6:
          return (
            y === "return" ||
            y === "typeof" ||
            y === "delete" ||
            y === "switch" ||
            y === "export" ||
            y === "import"
          );
        case 7:
          return y === "default" || y === "finally" || y === "extends";
        case 8:
          return y === "function" || y === "continue" || y === "debugger";
        case 10:
          return y === "instanceof";
        default:
          return !1;
      }
    }
    function n(y, x) {
      return y === "null" || y === "true" || y === "false" || r(y, x);
    }
    function s(y, x) {
      return y === "null" || y === "true" || y === "false" || i(y, x);
    }
    function a(y) {
      return y === "eval" || y === "arguments";
    }
    function u(y) {
      var x, b, w;
      if (y.length === 0 || ((w = y.charCodeAt(0)), !t.isIdentifierStartES5(w)))
        return !1;
      for (x = 1, b = y.length; x < b; ++x)
        if (((w = y.charCodeAt(x)), !t.isIdentifierPartES5(w))) return !1;
      return !0;
    }
    function c(y, x) {
      return (y - 55296) * 1024 + (x - 56320) + 65536;
    }
    function m(y) {
      var x, b, w, _, O;
      if (y.length === 0) return !1;
      for (O = t.isIdentifierStartES6, x = 0, b = y.length; x < b; ++x) {
        if (((w = y.charCodeAt(x)), 55296 <= w && w <= 56319)) {
          if (
            (++x,
            x >= b || ((_ = y.charCodeAt(x)), !(56320 <= _ && _ <= 57343)))
          )
            return !1;
          w = c(w, _);
        }
        if (!O(w)) return !1;
        O = t.isIdentifierPartES6;
      }
      return !0;
    }
    function d(y, x) {
      return u(y) && !n(y, x);
    }
    function E(y, x) {
      return m(y) && !s(y, x);
    }
    oo.exports = {
      isKeywordES5: r,
      isKeywordES6: i,
      isReservedWordES5: n,
      isReservedWordES6: s,
      isRestrictedWord: a,
      isIdentifierNameES5: u,
      isIdentifierNameES6: m,
      isIdentifierES5: d,
      isIdentifierES6: E,
    };
  })();
});
var lo = j((Ti) => {
  (function () {
    "use strict";
    (Ti.ast = so()), (Ti.code = Qn()), (Ti.keyword = uo());
  })();
});
var fo = j((Jn) => {
  var co =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
      ""
    );
  Jn.encode = function (t) {
    if (0 <= t && t < co.length) return co[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  };
  Jn.decode = function (t) {
    var e = 65,
      r = 90,
      i = 97,
      n = 122,
      s = 48,
      a = 57,
      u = 43,
      c = 47,
      m = 26,
      d = 52;
    return e <= t && t <= r
      ? t - e
      : i <= t && t <= n
      ? t - i + m
      : s <= t && t <= a
      ? t - s + d
      : t == u
      ? 62
      : t == c
      ? 63
      : -1;
  };
});
var es = j((Zn) => {
  var po = fo(),
    Xn = 5,
    ho = 1 << Xn,
    mo = ho - 1,
    yo = ho;
  function mp(t) {
    return t < 0 ? (-t << 1) + 1 : (t << 1) + 0;
  }
  function yp(t) {
    var e = (t & 1) === 1,
      r = t >> 1;
    return e ? -r : r;
  }
  Zn.encode = function (e) {
    var r = "",
      i,
      n = mp(e);
    do (i = n & mo), (n >>>= Xn), n > 0 && (i |= yo), (r += po.encode(i));
    while (n > 0);
    return r;
  };
  Zn.decode = function (e, r, i) {
    var n = e.length,
      s = 0,
      a = 0,
      u,
      c;
    do {
      if (r >= n) throw new Error("Expected more digits in base 64 VLQ value.");
      if (((c = po.decode(e.charCodeAt(r++))), c === -1))
        throw new Error("Invalid base64 digit: " + e.charAt(r - 1));
      (u = !!(c & yo)), (c &= mo), (s = s + (c << a)), (a += Xn);
    } while (u);
    (i.value = yp(s)), (i.rest = r);
  };
});
var Sr = j((Ue) => {
  function gp(t, e, r) {
    if (e in t) return t[e];
    if (arguments.length === 3) return r;
    throw new Error('"' + e + '" is a required argument.');
  }
  Ue.getArg = gp;
  var go = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
    Ep = /^data:.+\,.+$/;
  function Qr(t) {
    var e = t.match(go);
    return e
      ? { scheme: e[1], auth: e[2], host: e[3], port: e[4], path: e[5] }
      : null;
  }
  Ue.urlParse = Qr;
  function vr(t) {
    var e = "";
    return (
      t.scheme && (e += t.scheme + ":"),
      (e += "//"),
      t.auth && (e += t.auth + "@"),
      t.host && (e += t.host),
      t.port && (e += ":" + t.port),
      t.path && (e += t.path),
      e
    );
  }
  Ue.urlGenerate = vr;
  function ts(t) {
    var e = t,
      r = Qr(t);
    if (r) {
      if (!r.path) return t;
      e = r.path;
    }
    for (
      var i = Ue.isAbsolute(e), n = e.split(/\/+/), s, a = 0, u = n.length - 1;
      u >= 0;
      u--
    )
      (s = n[u]),
        s === "."
          ? n.splice(u, 1)
          : s === ".."
          ? a++
          : a > 0 &&
            (s === "" ? (n.splice(u + 1, a), (a = 0)) : (n.splice(u, 2), a--));
    return (
      (e = n.join("/")),
      e === "" && (e = i ? "/" : "."),
      r ? ((r.path = e), vr(r)) : e
    );
  }
  Ue.normalize = ts;
  function Eo(t, e) {
    t === "" && (t = "."), e === "" && (e = ".");
    var r = Qr(e),
      i = Qr(t);
    if ((i && (t = i.path || "/"), r && !r.scheme))
      return i && (r.scheme = i.scheme), vr(r);
    if (r || e.match(Ep)) return e;
    if (i && !i.host && !i.path) return (i.host = e), vr(i);
    var n = e.charAt(0) === "/" ? e : ts(t.replace(/\/+$/, "") + "/" + e);
    return i ? ((i.path = n), vr(i)) : n;
  }
  Ue.join = Eo;
  Ue.isAbsolute = function (t) {
    return t.charAt(0) === "/" || go.test(t);
  };
  function xp(t, e) {
    t === "" && (t = "."), (t = t.replace(/\/$/, ""));
    for (var r = 0; e.indexOf(t + "/") !== 0; ) {
      var i = t.lastIndexOf("/");
      if (i < 0 || ((t = t.slice(0, i)), t.match(/^([^\/]+:\/)?\/*$/)))
        return e;
      ++r;
    }
    return Array(r + 1).join("../") + e.substr(t.length + 1);
  }
  Ue.relative = xp;
  var xo = (function () {
    var t = Object.create(null);
    return !("__proto__" in t);
  })();
  function bo(t) {
    return t;
  }
  function bp(t) {
    return Ao(t) ? "$" + t : t;
  }
  Ue.toSetString = xo ? bo : bp;
  function Ap(t) {
    return Ao(t) ? t.slice(1) : t;
  }
  Ue.fromSetString = xo ? bo : Ap;
  function Ao(t) {
    if (!t) return !1;
    var e = t.length;
    if (
      e < 9 ||
      t.charCodeAt(e - 1) !== 95 ||
      t.charCodeAt(e - 2) !== 95 ||
      t.charCodeAt(e - 3) !== 111 ||
      t.charCodeAt(e - 4) !== 116 ||
      t.charCodeAt(e - 5) !== 111 ||
      t.charCodeAt(e - 6) !== 114 ||
      t.charCodeAt(e - 7) !== 112 ||
      t.charCodeAt(e - 8) !== 95 ||
      t.charCodeAt(e - 9) !== 95
    )
      return !1;
    for (var r = e - 10; r >= 0; r--) if (t.charCodeAt(r) !== 36) return !1;
    return !0;
  }
  function vp(t, e, r) {
    var i = Dr(t.source, e.source);
    return i !== 0 ||
      ((i = t.originalLine - e.originalLine), i !== 0) ||
      ((i = t.originalColumn - e.originalColumn), i !== 0 || r) ||
      ((i = t.generatedColumn - e.generatedColumn), i !== 0) ||
      ((i = t.generatedLine - e.generatedLine), i !== 0)
      ? i
      : Dr(t.name, e.name);
  }
  Ue.compareByOriginalPositions = vp;
  function Dp(t, e, r) {
    var i = t.generatedLine - e.generatedLine;
    return i !== 0 ||
      ((i = t.generatedColumn - e.generatedColumn), i !== 0 || r) ||
      ((i = Dr(t.source, e.source)), i !== 0) ||
      ((i = t.originalLine - e.originalLine), i !== 0) ||
      ((i = t.originalColumn - e.originalColumn), i !== 0)
      ? i
      : Dr(t.name, e.name);
  }
  Ue.compareByGeneratedPositionsDeflated = Dp;
  function Dr(t, e) {
    return t === e ? 0 : t === null ? 1 : e === null ? -1 : t > e ? 1 : -1;
  }
  function Sp(t, e) {
    var r = t.generatedLine - e.generatedLine;
    return r !== 0 ||
      ((r = t.generatedColumn - e.generatedColumn), r !== 0) ||
      ((r = Dr(t.source, e.source)), r !== 0) ||
      ((r = t.originalLine - e.originalLine), r !== 0) ||
      ((r = t.originalColumn - e.originalColumn), r !== 0)
      ? r
      : Dr(t.name, e.name);
  }
  Ue.compareByGeneratedPositionsInflated = Sp;
  function Cp(t) {
    return JSON.parse(t.replace(/^\)]}'[^\n]*\n/, ""));
  }
  Ue.parseSourceMapInput = Cp;
  function Fp(t, e, r) {
    if (
      ((e = e || ""),
      t && (t[t.length - 1] !== "/" && e[0] !== "/" && (t += "/"), (e = t + e)),
      r)
    ) {
      var i = Qr(r);
      if (!i) throw new Error("sourceMapURL could not be parsed");
      if (i.path) {
        var n = i.path.lastIndexOf("/");
        n >= 0 && (i.path = i.path.substring(0, n + 1));
      }
      e = Eo(vr(i), e);
    }
    return ts(e);
  }
  Ue.computeSourceURL = Fp;
});
var ns = j((vo) => {
  var rs = Sr(),
    is = Object.prototype.hasOwnProperty,
    ir = typeof Map < "u";
  function Lt() {
    (this._array = []), (this._set = ir ? new Map() : Object.create(null));
  }
  Lt.fromArray = function (e, r) {
    for (var i = new Lt(), n = 0, s = e.length; n < s; n++) i.add(e[n], r);
    return i;
  };
  Lt.prototype.size = function () {
    return ir ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  Lt.prototype.add = function (e, r) {
    var i = ir ? e : rs.toSetString(e),
      n = ir ? this.has(e) : is.call(this._set, i),
      s = this._array.length;
    (!n || r) && this._array.push(e),
      n || (ir ? this._set.set(e, s) : (this._set[i] = s));
  };
  Lt.prototype.has = function (e) {
    if (ir) return this._set.has(e);
    var r = rs.toSetString(e);
    return is.call(this._set, r);
  };
  Lt.prototype.indexOf = function (e) {
    if (ir) {
      var r = this._set.get(e);
      if (r >= 0) return r;
    } else {
      var i = rs.toSetString(e);
      if (is.call(this._set, i)) return this._set[i];
    }
    throw new Error('"' + e + '" is not in the set.');
  };
  Lt.prototype.at = function (e) {
    if (e >= 0 && e < this._array.length) return this._array[e];
    throw new Error("No element indexed by " + e);
  };
  Lt.prototype.toArray = function () {
    return this._array.slice();
  };
  vo.ArraySet = Lt;
});
var Co = j((So) => {
  var Do = Sr();
  function wp(t, e) {
    var r = t.generatedLine,
      i = e.generatedLine,
      n = t.generatedColumn,
      s = e.generatedColumn;
    return (
      i > r ||
      (i == r && s >= n) ||
      Do.compareByGeneratedPositionsInflated(t, e) <= 0
    );
  }
  function Pi() {
    (this._array = []),
      (this._sorted = !0),
      (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  Pi.prototype.unsortedForEach = function (e, r) {
    this._array.forEach(e, r);
  };
  Pi.prototype.add = function (e) {
    wp(this._last, e)
      ? ((this._last = e), this._array.push(e))
      : ((this._sorted = !1), this._array.push(e));
  };
  Pi.prototype.toArray = function () {
    return (
      this._sorted ||
        (this._array.sort(Do.compareByGeneratedPositionsInflated),
        (this._sorted = !0)),
      this._array
    );
  };
  So.MappingList = Pi;
});
var ss = j((Fo) => {
  var Jr = es(),
    Fe = Sr(),
    Oi = ns().ArraySet,
    _p = Co().MappingList;
  function at(t) {
    t || (t = {}),
      (this._file = Fe.getArg(t, "file", null)),
      (this._sourceRoot = Fe.getArg(t, "sourceRoot", null)),
      (this._skipValidation = Fe.getArg(t, "skipValidation", !1)),
      (this._sources = new Oi()),
      (this._names = new Oi()),
      (this._mappings = new _p()),
      (this._sourcesContents = null);
  }
  at.prototype._version = 3;
  at.fromSourceMap = function (e) {
    var r = e.sourceRoot,
      i = new at({ file: e.file, sourceRoot: r });
    return (
      e.eachMapping(function (n) {
        var s = {
          generated: { line: n.generatedLine, column: n.generatedColumn },
        };
        n.source != null &&
          ((s.source = n.source),
          r != null && (s.source = Fe.relative(r, s.source)),
          (s.original = { line: n.originalLine, column: n.originalColumn }),
          n.name != null && (s.name = n.name)),
          i.addMapping(s);
      }),
      e.sources.forEach(function (n) {
        var s = n;
        r !== null && (s = Fe.relative(r, n)),
          i._sources.has(s) || i._sources.add(s);
        var a = e.sourceContentFor(n);
        a != null && i.setSourceContent(n, a);
      }),
      i
    );
  };
  at.prototype.addMapping = function (e) {
    var r = Fe.getArg(e, "generated"),
      i = Fe.getArg(e, "original", null),
      n = Fe.getArg(e, "source", null),
      s = Fe.getArg(e, "name", null);
    this._skipValidation || this._validateMapping(r, i, n, s),
      n != null &&
        ((n = String(n)), this._sources.has(n) || this._sources.add(n)),
      s != null && ((s = String(s)), this._names.has(s) || this._names.add(s)),
      this._mappings.add({
        generatedLine: r.line,
        generatedColumn: r.column,
        originalLine: i != null && i.line,
        originalColumn: i != null && i.column,
        source: n,
        name: s,
      });
  };
  at.prototype.setSourceContent = function (e, r) {
    var i = e;
    this._sourceRoot != null && (i = Fe.relative(this._sourceRoot, i)),
      r != null
        ? (this._sourcesContents ||
            (this._sourcesContents = Object.create(null)),
          (this._sourcesContents[Fe.toSetString(i)] = r))
        : this._sourcesContents &&
          (delete this._sourcesContents[Fe.toSetString(i)],
          Object.keys(this._sourcesContents).length === 0 &&
            (this._sourcesContents = null));
  };
  at.prototype.applySourceMap = function (e, r, i) {
    var n = r;
    if (r == null) {
      if (e.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      n = e.file;
    }
    var s = this._sourceRoot;
    s != null && (n = Fe.relative(s, n));
    var a = new Oi(),
      u = new Oi();
    this._mappings.unsortedForEach(function (c) {
      if (c.source === n && c.originalLine != null) {
        var m = e.originalPositionFor({
          line: c.originalLine,
          column: c.originalColumn,
        });
        m.source != null &&
          ((c.source = m.source),
          i != null && (c.source = Fe.join(i, c.source)),
          s != null && (c.source = Fe.relative(s, c.source)),
          (c.originalLine = m.line),
          (c.originalColumn = m.column),
          m.name != null && (c.name = m.name));
      }
      var d = c.source;
      d != null && !a.has(d) && a.add(d);
      var E = c.name;
      E != null && !u.has(E) && u.add(E);
    }, this),
      (this._sources = a),
      (this._names = u),
      e.sources.forEach(function (c) {
        var m = e.sourceContentFor(c);
        m != null &&
          (i != null && (c = Fe.join(i, c)),
          s != null && (c = Fe.relative(s, c)),
          this.setSourceContent(c, m));
      }, this);
  };
  at.prototype._validateMapping = function (e, r, i, n) {
    if (r && typeof r.line != "number" && typeof r.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (
      !(
        e &&
        "line" in e &&
        "column" in e &&
        e.line > 0 &&
        e.column >= 0 &&
        !r &&
        !i &&
        !n
      )
    ) {
      if (
        e &&
        "line" in e &&
        "column" in e &&
        r &&
        "line" in r &&
        "column" in r &&
        e.line > 0 &&
        e.column >= 0 &&
        r.line > 0 &&
        r.column >= 0 &&
        i
      )
        return;
      throw new Error(
        "Invalid mapping: " +
          JSON.stringify({ generated: e, source: i, original: r, name: n })
      );
    }
  };
  at.prototype._serializeMappings = function () {
    for (
      var e = 0,
        r = 1,
        i = 0,
        n = 0,
        s = 0,
        a = 0,
        u = "",
        c,
        m,
        d,
        E,
        y = this._mappings.toArray(),
        x = 0,
        b = y.length;
      x < b;
      x++
    ) {
      if (((m = y[x]), (c = ""), m.generatedLine !== r))
        for (e = 0; m.generatedLine !== r; ) (c += ";"), r++;
      else if (x > 0) {
        if (!Fe.compareByGeneratedPositionsInflated(m, y[x - 1])) continue;
        c += ",";
      }
      (c += Jr.encode(m.generatedColumn - e)),
        (e = m.generatedColumn),
        m.source != null &&
          ((E = this._sources.indexOf(m.source)),
          (c += Jr.encode(E - a)),
          (a = E),
          (c += Jr.encode(m.originalLine - 1 - n)),
          (n = m.originalLine - 1),
          (c += Jr.encode(m.originalColumn - i)),
          (i = m.originalColumn),
          m.name != null &&
            ((d = this._names.indexOf(m.name)),
            (c += Jr.encode(d - s)),
            (s = d))),
        (u += c);
    }
    return u;
  };
  at.prototype._generateSourcesContent = function (e, r) {
    return e.map(function (i) {
      if (!this._sourcesContents) return null;
      r != null && (i = Fe.relative(r, i));
      var n = Fe.toSetString(i);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, n)
        ? this._sourcesContents[n]
        : null;
    }, this);
  };
  at.prototype.toJSON = function () {
    var e = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings(),
    };
    return (
      this._file != null && (e.file = this._file),
      this._sourceRoot != null && (e.sourceRoot = this._sourceRoot),
      this._sourcesContents &&
        (e.sourcesContent = this._generateSourcesContent(
          e.sources,
          e.sourceRoot
        )),
      e
    );
  };
  at.prototype.toString = function () {
    return JSON.stringify(this.toJSON());
  };
  Fo.SourceMapGenerator = at;
});
var wo = j((nr) => {
  nr.GREATEST_LOWER_BOUND = 1;
  nr.LEAST_UPPER_BOUND = 2;
  function as(t, e, r, i, n, s) {
    var a = Math.floor((e - t) / 2) + t,
      u = n(r, i[a], !0);
    return u === 0
      ? a
      : u > 0
      ? e - a > 1
        ? as(a, e, r, i, n, s)
        : s == nr.LEAST_UPPER_BOUND
        ? e < i.length
          ? e
          : -1
        : a
      : a - t > 1
      ? as(t, a, r, i, n, s)
      : s == nr.LEAST_UPPER_BOUND
      ? a
      : t < 0
      ? -1
      : t;
  }
  nr.search = function (e, r, i, n) {
    if (r.length === 0) return -1;
    var s = as(-1, r.length, e, r, i, n || nr.GREATEST_LOWER_BOUND);
    if (s < 0) return -1;
    for (; s - 1 >= 0 && i(r[s], r[s - 1], !0) === 0; ) --s;
    return s;
  };
});
var Bo = j((_o) => {
  function os(t, e, r) {
    var i = t[e];
    (t[e] = t[r]), (t[r] = i);
  }
  function Bp(t, e) {
    return Math.round(t + Math.random() * (e - t));
  }
  function us(t, e, r, i) {
    if (r < i) {
      var n = Bp(r, i),
        s = r - 1;
      os(t, n, i);
      for (var a = t[i], u = r; u < i; u++)
        e(t[u], a) <= 0 && ((s += 1), os(t, s, u));
      os(t, s + 1, u);
      var c = s + 1;
      us(t, e, r, c - 1), us(t, e, c + 1, i);
    }
  }
  _o.quickSort = function (t, e) {
    us(t, e, 0, t.length - 1);
  };
});
var Io = j((Li) => {
  var U = Sr(),
    ls = wo(),
    Cr = ns().ArraySet,
    kp = es(),
    Xr = Bo().quickSort;
  function ge(t, e) {
    var r = t;
    return (
      typeof t == "string" && (r = U.parseSourceMapInput(t)),
      r.sections != null ? new At(r, e) : new Le(r, e)
    );
  }
  ge.fromSourceMap = function (t, e) {
    return Le.fromSourceMap(t, e);
  };
  ge.prototype._version = 3;
  ge.prototype.__generatedMappings = null;
  Object.defineProperty(ge.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return (
        this.__generatedMappings ||
          this._parseMappings(this._mappings, this.sourceRoot),
        this.__generatedMappings
      );
    },
  });
  ge.prototype.__originalMappings = null;
  Object.defineProperty(ge.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return (
        this.__originalMappings ||
          this._parseMappings(this._mappings, this.sourceRoot),
        this.__originalMappings
      );
    },
  });
  ge.prototype._charIsMappingSeparator = function (e, r) {
    var i = e.charAt(r);
    return i === ";" || i === ",";
  };
  ge.prototype._parseMappings = function (e, r) {
    throw new Error("Subclasses must implement _parseMappings");
  };
  ge.GENERATED_ORDER = 1;
  ge.ORIGINAL_ORDER = 2;
  ge.GREATEST_LOWER_BOUND = 1;
  ge.LEAST_UPPER_BOUND = 2;
  ge.prototype.eachMapping = function (e, r, i) {
    var n = r || null,
      s = i || ge.GENERATED_ORDER,
      a;
    switch (s) {
      case ge.GENERATED_ORDER:
        a = this._generatedMappings;
        break;
      case ge.ORIGINAL_ORDER:
        a = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var u = this.sourceRoot;
    a.map(function (c) {
      var m = c.source === null ? null : this._sources.at(c.source);
      return (
        (m = U.computeSourceURL(u, m, this._sourceMapURL)),
        {
          source: m,
          generatedLine: c.generatedLine,
          generatedColumn: c.generatedColumn,
          originalLine: c.originalLine,
          originalColumn: c.originalColumn,
          name: c.name === null ? null : this._names.at(c.name),
        }
      );
    }, this).forEach(e, n);
  };
  ge.prototype.allGeneratedPositionsFor = function (e) {
    var r = U.getArg(e, "line"),
      i = {
        source: U.getArg(e, "source"),
        originalLine: r,
        originalColumn: U.getArg(e, "column", 0),
      };
    if (((i.source = this._findSourceIndex(i.source)), i.source < 0)) return [];
    var n = [],
      s = this._findMapping(
        i,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        U.compareByOriginalPositions,
        ls.LEAST_UPPER_BOUND
      );
    if (s >= 0) {
      var a = this._originalMappings[s];
      if (e.column === void 0)
        for (var u = a.originalLine; a && a.originalLine === u; )
          n.push({
            line: U.getArg(a, "generatedLine", null),
            column: U.getArg(a, "generatedColumn", null),
            lastColumn: U.getArg(a, "lastGeneratedColumn", null),
          }),
            (a = this._originalMappings[++s]);
      else
        for (
          var c = a.originalColumn;
          a && a.originalLine === r && a.originalColumn == c;

        )
          n.push({
            line: U.getArg(a, "generatedLine", null),
            column: U.getArg(a, "generatedColumn", null),
            lastColumn: U.getArg(a, "lastGeneratedColumn", null),
          }),
            (a = this._originalMappings[++s]);
    }
    return n;
  };
  Li.SourceMapConsumer = ge;
  function Le(t, e) {
    var r = t;
    typeof t == "string" && (r = U.parseSourceMapInput(t));
    var i = U.getArg(r, "version"),
      n = U.getArg(r, "sources"),
      s = U.getArg(r, "names", []),
      a = U.getArg(r, "sourceRoot", null),
      u = U.getArg(r, "sourcesContent", null),
      c = U.getArg(r, "mappings"),
      m = U.getArg(r, "file", null);
    if (i != this._version) throw new Error("Unsupported version: " + i);
    a && (a = U.normalize(a)),
      (n = n
        .map(String)
        .map(U.normalize)
        .map(function (d) {
          return a && U.isAbsolute(a) && U.isAbsolute(d) ? U.relative(a, d) : d;
        })),
      (this._names = Cr.fromArray(s.map(String), !0)),
      (this._sources = Cr.fromArray(n, !0)),
      (this._absoluteSources = this._sources.toArray().map(function (d) {
        return U.computeSourceURL(a, d, e);
      })),
      (this.sourceRoot = a),
      (this.sourcesContent = u),
      (this._mappings = c),
      (this._sourceMapURL = e),
      (this.file = m);
  }
  Le.prototype = Object.create(ge.prototype);
  Le.prototype.consumer = ge;
  Le.prototype._findSourceIndex = function (t) {
    var e = t;
    if (
      (this.sourceRoot != null && (e = U.relative(this.sourceRoot, e)),
      this._sources.has(e))
    )
      return this._sources.indexOf(e);
    var r;
    for (r = 0; r < this._absoluteSources.length; ++r)
      if (this._absoluteSources[r] == t) return r;
    return -1;
  };
  Le.fromSourceMap = function (e, r) {
    var i = Object.create(Le.prototype),
      n = (i._names = Cr.fromArray(e._names.toArray(), !0)),
      s = (i._sources = Cr.fromArray(e._sources.toArray(), !0));
    (i.sourceRoot = e._sourceRoot),
      (i.sourcesContent = e._generateSourcesContent(
        i._sources.toArray(),
        i.sourceRoot
      )),
      (i.file = e._file),
      (i._sourceMapURL = r),
      (i._absoluteSources = i._sources.toArray().map(function (x) {
        return U.computeSourceURL(i.sourceRoot, x, r);
      }));
    for (
      var a = e._mappings.toArray().slice(),
        u = (i.__generatedMappings = []),
        c = (i.__originalMappings = []),
        m = 0,
        d = a.length;
      m < d;
      m++
    ) {
      var E = a[m],
        y = new ko();
      (y.generatedLine = E.generatedLine),
        (y.generatedColumn = E.generatedColumn),
        E.source &&
          ((y.source = s.indexOf(E.source)),
          (y.originalLine = E.originalLine),
          (y.originalColumn = E.originalColumn),
          E.name && (y.name = n.indexOf(E.name)),
          c.push(y)),
        u.push(y);
    }
    return Xr(i.__originalMappings, U.compareByOriginalPositions), i;
  };
  Le.prototype._version = 3;
  Object.defineProperty(Le.prototype, "sources", {
    get: function () {
      return this._absoluteSources.slice();
    },
  });
  function ko() {
    (this.generatedLine = 0),
      (this.generatedColumn = 0),
      (this.source = null),
      (this.originalLine = null),
      (this.originalColumn = null),
      (this.name = null);
  }
  Le.prototype._parseMappings = function (e, r) {
    for (
      var i = 1,
        n = 0,
        s = 0,
        a = 0,
        u = 0,
        c = 0,
        m = e.length,
        d = 0,
        E = {},
        y = {},
        x = [],
        b = [],
        w,
        _,
        O,
        L,
        R;
      d < m;

    )
      if (e.charAt(d) === ";") i++, d++, (n = 0);
      else if (e.charAt(d) === ",") d++;
      else {
        for (
          w = new ko(), w.generatedLine = i, L = d;
          L < m && !this._charIsMappingSeparator(e, L);
          L++
        );
        if (((_ = e.slice(d, L)), (O = E[_]), O)) d += _.length;
        else {
          for (O = []; d < L; )
            kp.decode(e, d, y), (R = y.value), (d = y.rest), O.push(R);
          if (O.length === 2)
            throw new Error("Found a source, but no line and column");
          if (O.length === 3)
            throw new Error("Found a source and line, but no column");
          E[_] = O;
        }
        (w.generatedColumn = n + O[0]),
          (n = w.generatedColumn),
          O.length > 1 &&
            ((w.source = u + O[1]),
            (u += O[1]),
            (w.originalLine = s + O[2]),
            (s = w.originalLine),
            (w.originalLine += 1),
            (w.originalColumn = a + O[3]),
            (a = w.originalColumn),
            O.length > 4 && ((w.name = c + O[4]), (c += O[4]))),
          b.push(w),
          typeof w.originalLine == "number" && x.push(w);
      }
    Xr(b, U.compareByGeneratedPositionsDeflated),
      (this.__generatedMappings = b),
      Xr(x, U.compareByOriginalPositions),
      (this.__originalMappings = x);
  };
  Le.prototype._findMapping = function (e, r, i, n, s, a) {
    if (e[i] <= 0)
      throw new TypeError(
        "Line must be greater than or equal to 1, got " + e[i]
      );
    if (e[n] < 0)
      throw new TypeError(
        "Column must be greater than or equal to 0, got " + e[n]
      );
    return ls.search(e, r, s, a);
  };
  Le.prototype.computeColumnSpans = function () {
    for (var e = 0; e < this._generatedMappings.length; ++e) {
      var r = this._generatedMappings[e];
      if (e + 1 < this._generatedMappings.length) {
        var i = this._generatedMappings[e + 1];
        if (r.generatedLine === i.generatedLine) {
          r.lastGeneratedColumn = i.generatedColumn - 1;
          continue;
        }
      }
      r.lastGeneratedColumn = 1 / 0;
    }
  };
  Le.prototype.originalPositionFor = function (e) {
    var r = {
        generatedLine: U.getArg(e, "line"),
        generatedColumn: U.getArg(e, "column"),
      },
      i = this._findMapping(
        r,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        U.compareByGeneratedPositionsDeflated,
        U.getArg(e, "bias", ge.GREATEST_LOWER_BOUND)
      );
    if (i >= 0) {
      var n = this._generatedMappings[i];
      if (n.generatedLine === r.generatedLine) {
        var s = U.getArg(n, "source", null);
        s !== null &&
          ((s = this._sources.at(s)),
          (s = U.computeSourceURL(this.sourceRoot, s, this._sourceMapURL)));
        var a = U.getArg(n, "name", null);
        return (
          a !== null && (a = this._names.at(a)),
          {
            source: s,
            line: U.getArg(n, "originalLine", null),
            column: U.getArg(n, "originalColumn", null),
            name: a,
          }
        );
      }
    }
    return { source: null, line: null, column: null, name: null };
  };
  Le.prototype.hasContentsOfAllSources = function () {
    return this.sourcesContent
      ? this.sourcesContent.length >= this._sources.size() &&
          !this.sourcesContent.some(function (e) {
            return e == null;
          })
      : !1;
  };
  Le.prototype.sourceContentFor = function (e, r) {
    if (!this.sourcesContent) return null;
    var i = this._findSourceIndex(e);
    if (i >= 0) return this.sourcesContent[i];
    var n = e;
    this.sourceRoot != null && (n = U.relative(this.sourceRoot, n));
    var s;
    if (this.sourceRoot != null && (s = U.urlParse(this.sourceRoot))) {
      var a = n.replace(/^file:\/\//, "");
      if (s.scheme == "file" && this._sources.has(a))
        return this.sourcesContent[this._sources.indexOf(a)];
      if ((!s.path || s.path == "/") && this._sources.has("/" + n))
        return this.sourcesContent[this._sources.indexOf("/" + n)];
    }
    if (r) return null;
    throw new Error('"' + n + '" is not in the SourceMap.');
  };
  Le.prototype.generatedPositionFor = function (e) {
    var r = U.getArg(e, "source");
    if (((r = this._findSourceIndex(r)), r < 0))
      return { line: null, column: null, lastColumn: null };
    var i = {
        source: r,
        originalLine: U.getArg(e, "line"),
        originalColumn: U.getArg(e, "column"),
      },
      n = this._findMapping(
        i,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        U.compareByOriginalPositions,
        U.getArg(e, "bias", ge.GREATEST_LOWER_BOUND)
      );
    if (n >= 0) {
      var s = this._originalMappings[n];
      if (s.source === i.source)
        return {
          line: U.getArg(s, "generatedLine", null),
          column: U.getArg(s, "generatedColumn", null),
          lastColumn: U.getArg(s, "lastGeneratedColumn", null),
        };
    }
    return { line: null, column: null, lastColumn: null };
  };
  Li.BasicSourceMapConsumer = Le;
  function At(t, e) {
    var r = t;
    typeof t == "string" && (r = U.parseSourceMapInput(t));
    var i = U.getArg(r, "version"),
      n = U.getArg(r, "sections");
    if (i != this._version) throw new Error("Unsupported version: " + i);
    (this._sources = new Cr()), (this._names = new Cr());
    var s = { line: -1, column: 0 };
    this._sections = n.map(function (a) {
      if (a.url)
        throw new Error("Support for url field in sections not implemented.");
      var u = U.getArg(a, "offset"),
        c = U.getArg(u, "line"),
        m = U.getArg(u, "column");
      if (c < s.line || (c === s.line && m < s.column))
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return (
        (s = u),
        {
          generatedOffset: { generatedLine: c + 1, generatedColumn: m + 1 },
          consumer: new ge(U.getArg(a, "map"), e),
        }
      );
    });
  }
  At.prototype = Object.create(ge.prototype);
  At.prototype.constructor = ge;
  At.prototype._version = 3;
  Object.defineProperty(At.prototype, "sources", {
    get: function () {
      for (var t = [], e = 0; e < this._sections.length; e++)
        for (var r = 0; r < this._sections[e].consumer.sources.length; r++)
          t.push(this._sections[e].consumer.sources[r]);
      return t;
    },
  });
  At.prototype.originalPositionFor = function (e) {
    var r = {
        generatedLine: U.getArg(e, "line"),
        generatedColumn: U.getArg(e, "column"),
      },
      i = ls.search(r, this._sections, function (s, a) {
        var u = s.generatedLine - a.generatedOffset.generatedLine;
        return u || s.generatedColumn - a.generatedOffset.generatedColumn;
      }),
      n = this._sections[i];
    return n
      ? n.consumer.originalPositionFor({
          line: r.generatedLine - (n.generatedOffset.generatedLine - 1),
          column:
            r.generatedColumn -
            (n.generatedOffset.generatedLine === r.generatedLine
              ? n.generatedOffset.generatedColumn - 1
              : 0),
          bias: e.bias,
        })
      : { source: null, line: null, column: null, name: null };
  };
  At.prototype.hasContentsOfAllSources = function () {
    return this._sections.every(function (e) {
      return e.consumer.hasContentsOfAllSources();
    });
  };
  At.prototype.sourceContentFor = function (e, r) {
    for (var i = 0; i < this._sections.length; i++) {
      var n = this._sections[i],
        s = n.consumer.sourceContentFor(e, !0);
      if (s) return s;
    }
    if (r) return null;
    throw new Error('"' + e + '" is not in the SourceMap.');
  };
  At.prototype.generatedPositionFor = function (e) {
    for (var r = 0; r < this._sections.length; r++) {
      var i = this._sections[r];
      if (i.consumer._findSourceIndex(U.getArg(e, "source")) !== -1) {
        var n = i.consumer.generatedPositionFor(e);
        if (n) {
          var s = {
            line: n.line + (i.generatedOffset.generatedLine - 1),
            column:
              n.column +
              (i.generatedOffset.generatedLine === n.line
                ? i.generatedOffset.generatedColumn - 1
                : 0),
          };
          return s;
        }
      }
    }
    return { line: null, column: null };
  };
  At.prototype._parseMappings = function (e, r) {
    (this.__generatedMappings = []), (this.__originalMappings = []);
    for (var i = 0; i < this._sections.length; i++)
      for (
        var n = this._sections[i], s = n.consumer._generatedMappings, a = 0;
        a < s.length;
        a++
      ) {
        var u = s[a],
          c = n.consumer._sources.at(u.source);
        (c = U.computeSourceURL(n.consumer.sourceRoot, c, this._sourceMapURL)),
          this._sources.add(c),
          (c = this._sources.indexOf(c));
        var m = null;
        u.name &&
          ((m = n.consumer._names.at(u.name)),
          this._names.add(m),
          (m = this._names.indexOf(m)));
        var d = {
          source: c,
          generatedLine:
            u.generatedLine + (n.generatedOffset.generatedLine - 1),
          generatedColumn:
            u.generatedColumn +
            (n.generatedOffset.generatedLine === u.generatedLine
              ? n.generatedOffset.generatedColumn - 1
              : 0),
          originalLine: u.originalLine,
          originalColumn: u.originalColumn,
          name: m,
        };
        this.__generatedMappings.push(d),
          typeof d.originalLine == "number" && this.__originalMappings.push(d);
      }
    Xr(this.__generatedMappings, U.compareByGeneratedPositionsDeflated),
      Xr(this.__originalMappings, U.compareByOriginalPositions);
  };
  Li.IndexedSourceMapConsumer = At;
});
var To = j((No) => {
  var Ip = ss().SourceMapGenerator,
    Ri = Sr(),
    Np = /(\r?\n)/,
    Tp = 10,
    Fr = "$$$isSourceNode$$$";
  function et(t, e, r, i, n) {
    (this.children = []),
      (this.sourceContents = {}),
      (this.line = t ?? null),
      (this.column = e ?? null),
      (this.source = r ?? null),
      (this.name = n ?? null),
      (this[Fr] = !0),
      i != null && this.add(i);
  }
  et.fromStringWithSourceMap = function (e, r, i) {
    var n = new et(),
      s = e.split(Np),
      a = 0,
      u = function () {
        var y = b(),
          x = b() || "";
        return y + x;
        function b() {
          return a < s.length ? s[a++] : void 0;
        }
      },
      c = 1,
      m = 0,
      d = null;
    return (
      r.eachMapping(function (y) {
        if (d !== null)
          if (c < y.generatedLine) E(d, u()), c++, (m = 0);
          else {
            var x = s[a] || "",
              b = x.substr(0, y.generatedColumn - m);
            (s[a] = x.substr(y.generatedColumn - m)),
              (m = y.generatedColumn),
              E(d, b),
              (d = y);
            return;
          }
        for (; c < y.generatedLine; ) n.add(u()), c++;
        if (m < y.generatedColumn) {
          var x = s[a] || "";
          n.add(x.substr(0, y.generatedColumn)),
            (s[a] = x.substr(y.generatedColumn)),
            (m = y.generatedColumn);
        }
        d = y;
      }, this),
      a < s.length && (d && E(d, u()), n.add(s.splice(a).join(""))),
      r.sources.forEach(function (y) {
        var x = r.sourceContentFor(y);
        x != null &&
          (i != null && (y = Ri.join(i, y)), n.setSourceContent(y, x));
      }),
      n
    );
    function E(y, x) {
      if (y === null || y.source === void 0) n.add(x);
      else {
        var b = i ? Ri.join(i, y.source) : y.source;
        n.add(new et(y.originalLine, y.originalColumn, b, x, y.name));
      }
    }
  };
  et.prototype.add = function (e) {
    if (Array.isArray(e))
      e.forEach(function (r) {
        this.add(r);
      }, this);
    else if (e[Fr] || typeof e == "string") e && this.children.push(e);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
          e
      );
    return this;
  };
  et.prototype.prepend = function (e) {
    if (Array.isArray(e))
      for (var r = e.length - 1; r >= 0; r--) this.prepend(e[r]);
    else if (e[Fr] || typeof e == "string") this.children.unshift(e);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
          e
      );
    return this;
  };
  et.prototype.walk = function (e) {
    for (var r, i = 0, n = this.children.length; i < n; i++)
      (r = this.children[i]),
        r[Fr]
          ? r.walk(e)
          : r !== "" &&
            e(r, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name,
            });
  };
  et.prototype.join = function (e) {
    var r,
      i,
      n = this.children.length;
    if (n > 0) {
      for (r = [], i = 0; i < n - 1; i++) r.push(this.children[i]), r.push(e);
      r.push(this.children[i]), (this.children = r);
    }
    return this;
  };
  et.prototype.replaceRight = function (e, r) {
    var i = this.children[this.children.length - 1];
    return (
      i[Fr]
        ? i.replaceRight(e, r)
        : typeof i == "string"
        ? (this.children[this.children.length - 1] = i.replace(e, r))
        : this.children.push("".replace(e, r)),
      this
    );
  };
  et.prototype.setSourceContent = function (e, r) {
    this.sourceContents[Ri.toSetString(e)] = r;
  };
  et.prototype.walkSourceContents = function (e) {
    for (var r = 0, i = this.children.length; r < i; r++)
      this.children[r][Fr] && this.children[r].walkSourceContents(e);
    for (
      var n = Object.keys(this.sourceContents), r = 0, i = n.length;
      r < i;
      r++
    )
      e(Ri.fromSetString(n[r]), this.sourceContents[n[r]]);
  };
  et.prototype.toString = function () {
    var e = "";
    return (
      this.walk(function (r) {
        e += r;
      }),
      e
    );
  };
  et.prototype.toStringWithSourceMap = function (e) {
    var r = { code: "", line: 1, column: 0 },
      i = new Ip(e),
      n = !1,
      s = null,
      a = null,
      u = null,
      c = null;
    return (
      this.walk(function (m, d) {
        (r.code += m),
          d.source !== null && d.line !== null && d.column !== null
            ? ((s !== d.source ||
                a !== d.line ||
                u !== d.column ||
                c !== d.name) &&
                i.addMapping({
                  source: d.source,
                  original: { line: d.line, column: d.column },
                  generated: { line: r.line, column: r.column },
                  name: d.name,
                }),
              (s = d.source),
              (a = d.line),
              (u = d.column),
              (c = d.name),
              (n = !0))
            : n &&
              (i.addMapping({ generated: { line: r.line, column: r.column } }),
              (s = null),
              (n = !1));
        for (var E = 0, y = m.length; E < y; E++)
          m.charCodeAt(E) === Tp
            ? (r.line++,
              (r.column = 0),
              E + 1 === y
                ? ((s = null), (n = !1))
                : n &&
                  i.addMapping({
                    source: d.source,
                    original: { line: d.line, column: d.column },
                    generated: { line: r.line, column: r.column },
                    name: d.name,
                  }))
            : r.column++;
      }),
      this.walkSourceContents(function (m, d) {
        i.setSourceContent(m, d);
      }),
      { code: r.code, map: i }
    );
  };
  No.SourceNode = et;
});
var Po = j((Mi) => {
  Mi.SourceMapGenerator = ss().SourceMapGenerator;
  Mi.SourceMapConsumer = Io().SourceMapConsumer;
  Mi.SourceNode = To().SourceNode;
});
var Oo = j((my, Pp) => {
  Pp.exports = {
    name: "@javascript-obfuscator/escodegen",
    description: "`escodegen` fork for `javascript-obfuscator``",
    homepage: "http://github.com/estools/escodegen",
    main: "escodegen.js",
    files: ["LICENSE.BSD", "README.md", "bin", "escodegen.js", "package.json"],
    version: "2.3.0",
    engines: { node: ">=6.0" },
    maintainers: [
      {
        name: "Yusuke Suzuki",
        email: "utatane.tea@gmail.com",
        web: "http://github.com/Constellation",
      },
      {
        name: "Timofey Kachalov",
        email: "sanex3339@yandex.ru",
        web: "https://github.com/sanex3339",
      },
    ],
    repository: { type: "git", url: "http://github.com/estools/escodegen.git" },
    dependencies: {
      "@javascript-obfuscator/estraverse": "^5.3.0",
      esutils: "^2.0.2",
      esprima: "^4.0.1",
      optionator: "^0.8.1",
    },
    optionalDependencies: { "source-map": "~0.6.1" },
    devDependencies: {
      acorn: "^8.7.0",
      bluebird: "^3.4.7",
      "bower-registry-client": "^1.0.0",
      chai: "^4.2.0",
      "chai-exclude": "^2.0.2",
      "commonjs-everywhere": "^0.9.7",
      gulp: "^3.8.10",
      "gulp-eslint": "^3.0.1",
      "gulp-mocha": "^3.0.1",
      semver: "^5.1.0",
    },
    license: "BSD-2-Clause",
    scripts: {
      test: "gulp travis",
      "unit-test": "gulp test",
      lint: "gulp lint",
    },
  };
});
var cs = j((Rt) => {
  (function () {
    "use strict";
    var t,
      e,
      r,
      i,
      n,
      s,
      a,
      u,
      c,
      m,
      d,
      E,
      y,
      x,
      b,
      w,
      _,
      O,
      L,
      R,
      C,
      v,
      S,
      A,
      T,
      P;
    (n = io()), (s = lo()), (t = n.Syntax);
    function Q(o) {
      return Ce.Expression.hasOwnProperty(o.type);
    }
    function I(o) {
      return Ce.Statement.hasOwnProperty(o.type);
    }
    (e = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      NullishCoalescing: 3,
      LogicalOR: 3,
      LogicalAND: 4,
      BitwiseOR: 5,
      BitwiseXOR: 6,
      BitwiseAND: 7,
      Equality: 8,
      Relational: 9,
      BitwiseSHIFT: 10,
      Additive: 11,
      Multiplicative: 12,
      Exponentiation: 13,
      Await: 14,
      Unary: 14,
      Postfix: 15,
      OptionalChaining: 16,
      Call: 17,
      New: 18,
      TaggedTemplate: 19,
      Member: 20,
      Primary: 21,
    }),
      (r = {
        "??": e.NullishCoalescing,
        "||": e.LogicalOR,
        "&&": e.LogicalAND,
        "|": e.BitwiseOR,
        "^": e.BitwiseXOR,
        "&": e.BitwiseAND,
        "==": e.Equality,
        "!=": e.Equality,
        "===": e.Equality,
        "!==": e.Equality,
        is: e.Equality,
        isnt: e.Equality,
        "<": e.Relational,
        ">": e.Relational,
        "<=": e.Relational,
        ">=": e.Relational,
        in: e.Relational,
        instanceof: e.Relational,
        "<<": e.BitwiseSHIFT,
        ">>": e.BitwiseSHIFT,
        ">>>": e.BitwiseSHIFT,
        "+": e.Additive,
        "-": e.Additive,
        "*": e.Multiplicative,
        "%": e.Multiplicative,
        "/": e.Multiplicative,
        "**": e.Exponentiation,
      });
    var B = 1,
      W = 1 << 1,
      Z = 1 << 2,
      re = 1 << 3,
      J = 1 << 4,
      $ = 1 << 5,
      Ae = W | Z,
      Te = B | W,
      M = B | W | Z,
      bt = B,
      Pt = Z,
      zt = B | Z,
      ie = B,
      qe = B | $,
      ki = 0,
      Kf = B | J,
      Yf = B | re;
    function Ua() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: { style: "    ", base: 0, adjustMultilineComment: !1 },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1,
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1,
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null,
      };
    }
    function tr(o, p) {
      var f = "";
      for (p |= 0; p > 0; p >>>= 1, o += o) p & 1 && (f += o);
      return f;
    }
    function Qf(o) {
      return /[\r\n]/g.test(o);
    }
    function Pe(o) {
      var p = o.length;
      return p && s.code.isLineTerminator(o.charCodeAt(p - 1));
    }
    function Wa(o, p) {
      var f;
      for (f in p) p.hasOwnProperty(f) && (o[f] = p[f]);
      return o;
    }
    function Ii(o, p) {
      var f, h;
      function g(D) {
        return (
          typeof D == "object" && D instanceof Object && !(D instanceof RegExp)
        );
      }
      for (f in p)
        p.hasOwnProperty(f) &&
          ((h = p[f]),
          g(h) ? (g(o[f]) ? Ii(o[f], h) : (o[f] = Ii({}, h))) : (o[f] = h));
      return o;
    }
    function Jf(o) {
      var p, f, h, g, D;
      if (o !== o) throw new Error("Numeric literal whose value is NaN");
      if (o < 0 || (o === 0 && 1 / o < 0))
        throw new Error("Numeric literal whose value is negative");
      if (o === 1 / 0) return c ? "null" : m ? "1e400" : "1e+400";
      if (((p = "" + o), !m || p.length < 3)) return p;
      for (
        f = p.indexOf("."),
          !c &&
            p.charCodeAt(0) === 48 &&
            f === 1 &&
            ((f = 0), (p = p.slice(1))),
          h = p,
          p = p.replace("e+", "e"),
          g = 0,
          (D = h.indexOf("e")) > 0 &&
            ((g = +h.slice(D + 1)), (h = h.slice(0, D))),
          f >= 0 &&
            ((g -= h.length - f - 1),
            (h = +(h.slice(0, f) + h.slice(f + 1)) + "")),
          D = 0;
        h.charCodeAt(h.length + D - 1) === 48;

      )
        --D;
      return (
        D !== 0 && ((g -= D), (h = h.slice(0, D))),
        g !== 0 && (h += "e" + g),
        (h.length < p.length ||
          (d &&
            o > 1e12 &&
            Math.floor(o) === o &&
            (h = "0x" + o.toString(16)).length < p.length)) &&
          +h === o &&
          (p = h),
        p
      );
    }
    function za(o, p) {
      return (o & -2) === 8232
        ? (p ? "u" : "\\u") + (o === 8232 ? "2028" : "2029")
        : o === 10 || o === 13
        ? (p ? "" : "\\") + (o === 10 ? "n" : "r")
        : String.fromCharCode(o);
    }
    function Xf(o) {
      var p, f, h, g, D, F, k, q;
      if (((f = o.toString()), o.source)) {
        if (((p = f.match(/\/([^/]*)$/)), !p)) return f;
        for (
          h = p[1], f = "", k = !1, q = !1, g = 0, D = o.source.length;
          g < D;
          ++g
        )
          (F = o.source.charCodeAt(g)),
            q
              ? ((f += za(F, q)), (q = !1))
              : (k
                  ? F === 93 && (k = !1)
                  : F === 47
                  ? (f += "\\")
                  : F === 91 && (k = !0),
                (f += za(F, q)),
                (q = F === 92));
        return "/" + f + "/" + h;
      }
      return f;
    }
    function Zf(o, p) {
      var f;
      return o === 8
        ? "\\b"
        : o === 12
        ? "\\f"
        : o === 9
        ? "\\t"
        : ((f = o.toString(16).toUpperCase()),
          c || o > 255
            ? "\\u" + "0000".slice(f.length) + f
            : o === 0 && !s.code.isDecimalDigit(p)
            ? "\\0"
            : o === 11
            ? "\\x0B"
            : "\\x" + "00".slice(f.length) + f);
    }
    function ep(o) {
      if (o === 92) return "\\\\";
      if (o === 10) return "\\n";
      if (o === 13) return "\\r";
      if (o === 8232) return "\\u2028";
      if (o === 8233) return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function tp(o) {
      var p, f, h, g;
      for (g = E === "double" ? '"' : "'", p = 0, f = o.length; p < f; ++p)
        if (((h = o.charCodeAt(p)), h === 39)) {
          g = '"';
          break;
        } else if (h === 34) {
          g = "'";
          break;
        } else h === 92 && ++p;
      return g + o + g;
    }
    function rp(o) {
      var p = "",
        f,
        h,
        g,
        D = 0,
        F = 0,
        k,
        q;
      for (f = 0, h = o.length; f < h; ++f) {
        if (((g = o.charCodeAt(f)), g === 39)) ++D;
        else if (g === 34) ++F;
        else if (g === 47 && c) p += "\\";
        else if (s.code.isLineTerminator(g) || g === 92) {
          p += ep(g);
          continue;
        } else if (
          !s.code.isIdentifierPartES5(g) &&
          ((c && g < 32) || (!c && !y && (g < 32 || g > 126)))
        ) {
          p += Zf(g, o.charCodeAt(f + 1));
          continue;
        }
        p += String.fromCharCode(g);
      }
      if (
        ((k = !(E === "double" || (E === "auto" && F < D))),
        (q = k ? "'" : '"'),
        !(k ? D : F))
      )
        return q + p + q;
      for (o = p, p = q, f = 0, h = o.length; f < h; ++f)
        (g = o.charCodeAt(f)),
          ((g === 39 && k) || (g === 34 && !k)) && (p += "\\"),
          (p += String.fromCharCode(g));
      return p + q;
    }
    function $a(o) {
      var p,
        f,
        h,
        g = "";
      for (p = 0, f = o.length; p < f; ++p)
        (h = o[p]), (g += Array.isArray(h) ? $a(h) : h);
      return g;
    }
    function ce(o, p) {
      if (!v) return Array.isArray(o) ? $a(o) : o;
      if (p == null) {
        if (o instanceof i) return o;
        p = {};
      }
      return p.loc == null
        ? new i(null, null, v, o, p.name || null)
        : new i(
            p.loc.start.line,
            p.loc.start.column,
            v === !0 ? p.loc.source || null : v,
            o,
            p.name || null
          );
    }
    function Oe() {
      return b || " ";
    }
    function Y(o, p) {
      var f, h, g, D;
      return (
        (f = ce(o).toString()),
        f.length === 0
          ? [p]
          : ((h = ce(p).toString()),
            h.length === 0
              ? [o]
              : ((g = f.charCodeAt(f.length - 1)),
                (D = h.charCodeAt(0)),
                ((g === 43 || g === 45) && g === D) ||
                (s.code.isIdentifierPartES5(g) &&
                  s.code.isIdentifierPartES5(D)) ||
                (g === 47 && D === 105)
                  ? [o, Oe(), p]
                  : s.code.isWhiteSpace(g) ||
                    s.code.isLineTerminator(g) ||
                    s.code.isWhiteSpace(D) ||
                    s.code.isLineTerminator(D)
                  ? [o, p]
                  : [o, b, p]))
      );
    }
    function je(o) {
      return [a, o];
    }
    function De(o) {
      var p;
      (p = a), (a += u), o(a), (a = p);
    }
    function ip(o) {
      var p;
      for (
        p = o.length - 1;
        p >= 0 && !s.code.isLineTerminator(o.charCodeAt(p));
        --p
      );
      return o.length - 1 - p;
    }
    function np(o, p) {
      var f, h, g, D, F, k, q, ae;
      for (
        f = o.split(/\r\n|[\r\n]/), k = Number.MAX_VALUE, h = 1, g = f.length;
        h < g;
        ++h
      ) {
        for (
          D = f[h], F = 0;
          F < D.length && s.code.isWhiteSpace(D.charCodeAt(F));

        )
          ++F;
        k > F && (k = F);
      }
      for (
        typeof p < "u"
          ? ((q = a), f[1][k] === "*" && (p += " "), (a = p))
          : (k & 1 && --k, (q = a)),
          h = 1,
          g = f.length;
        h < g;
        ++h
      )
        (ae = ce(je(f[h].slice(k)))), (f[h] = v ? ae.join("") : ae);
      return (
        (a = q),
        f.join(`
`)
      );
    }
    function Ot(o, p) {
      if (o.type === "Line") {
        if (Pe(o.value)) return "//" + o.value;
        var f = "//" + o.value;
        return (
          A ||
            (f += `
`),
          f
        );
      }
      return R.format.indent.adjustMultilineComment && /[\n\r]/.test(o.value)
        ? np("/*" + o.value + "*/", p)
        : "/*" + o.value + "*/";
    }
    function Ha(o, p) {
      var f, h, g, D, F, k, q, ae, we, rr, Ar, Qa, Ja, kt;
      if (o.leadingComments && o.leadingComments.length > 0) {
        if (((D = p), A)) {
          for (
            g = o.leadingComments[0],
              p = [],
              ae = g.extendedRange,
              we = g.range,
              Ar = S.substring(ae[0], we[0]),
              kt = (Ar.match(/\n/g) || []).length,
              kt > 0
                ? (p.push(
                    tr(
                      `
`,
                      kt
                    )
                  ),
                  p.push(je(Ot(g))))
                : (p.push(Ar), p.push(Ot(g))),
              rr = we,
              f = 1,
              h = o.leadingComments.length;
            f < h;
            f++
          )
            (g = o.leadingComments[f]),
              (we = g.range),
              (Qa = S.substring(rr[1], we[0])),
              (kt = (Qa.match(/\n/g) || []).length),
              p.push(
                tr(
                  `
`,
                  kt
                )
              ),
              p.push(je(Ot(g))),
              (rr = we);
          (Ja = S.substring(we[1], ae[1])),
            (kt = (Ja.match(/\n/g) || []).length),
            p.push(
              tr(
                `
`,
                kt
              )
            );
        } else
          for (
            g = o.leadingComments[0],
              p = [],
              O &&
                o.type === t.Program &&
                o.body.length === 0 &&
                p.push(`
`),
              p.push(Ot(g)),
              Pe(ce(p).toString()) ||
                p.push(`
`),
              f = 1,
              h = o.leadingComments.length;
            f < h;
            ++f
          )
            (g = o.leadingComments[f]),
              (q = [Ot(g)]),
              Pe(ce(q).toString()) ||
                q.push(`
`),
              p.push(je(q));
        p.push(je(D));
      }
      if (o.trailingComments)
        if (A)
          (g = o.trailingComments[0]),
            (ae = g.extendedRange),
            (we = g.range),
            (Ar = S.substring(ae[0], we[0])),
            (kt = (Ar.match(/\n/g) || []).length),
            kt > 0
              ? (p.push(
                  tr(
                    `
`,
                    kt
                  )
                ),
                p.push(je(Ot(g))))
              : (p.push(Ar), p.push(Ot(g)));
        else
          for (
            F = !Pe(ce(p).toString()),
              k = tr(" ", ip(ce([a, p, u]).toString())),
              f = 0,
              h = o.trailingComments.length;
            f < h;
            ++f
          )
            (g = o.trailingComments[f]),
              F
                ? (f === 0 ? (p = [p, u]) : (p = [p, k]), p.push(Ot(g, k)))
                : (p = [p, je(Ot(g))]),
              f !== h - 1 &&
                !Pe(ce(p).toString()) &&
                (p = [
                  p,
                  `
`,
                ]);
      return p;
    }
    function br(o, p, f) {
      var h,
        g = 0;
      for (h = o; h < p; h++)
        S[h] ===
          `
` && g++;
      for (h = 1; h < g; h++) f.push(x);
    }
    function Se(o, p, f) {
      return p < f ? ["(", o, ")"] : o;
    }
    function Ka(o) {
      var p, f, h;
      for (h = o.split(/\r\n|\n/), p = 1, f = h.length; p < f; p++)
        h[p] = x + a + h[p];
      return h;
    }
    function sp(o, p) {
      var f, h, g;
      return (
        (f = o[R.verbatim]),
        typeof f == "string"
          ? (h = Se(Ka(f), e.Sequence, p))
          : ((h = Ka(f.content)),
            (g = f.precedence != null ? f.precedence : e.Sequence),
            (h = Se(h, g, p))),
        ce(h, o)
      );
    }
    function Ce() {}
    (Ce.prototype.maybeBlock = function (o, p) {
      var f,
        h,
        g = this;
      return (
        (h = !R.comment || !o.leadingComments),
        o.type === t.BlockStatement && h
          ? [b, this.generateStatement(o, p)]
          : o.type === t.EmptyStatement && h
          ? ";"
          : (De(function () {
              f = [x, je(g.generateStatement(o, p))];
            }),
            f)
      );
    }),
      (Ce.prototype.maybeBlockSuffix = function (o, p) {
        var f = Pe(ce(p).toString());
        return o.type === t.BlockStatement &&
          (!R.comment || !o.leadingComments) &&
          !f
          ? [p, b]
          : f
          ? [p, a]
          : [p, x, a];
      });
    function Je(o) {
      var p = o.name;
      return o.type === t.PrivateIdentifier && (p = "#" + p), ce(p, o);
    }
    function Hr(o, p) {
      return o.async ? "async" + (p ? Oe() : b) : "";
    }
    function Ni(o) {
      var p = o.generator && !R.moz.starlessGenerator;
      return p ? "*" + b : "";
    }
    function Ya(o) {
      var p = o.value,
        f = "";
      return (
        p.async && (f += Hr(p, !o.computed)),
        p.generator && (f += Ni(p) ? "*" : ""),
        f
      );
    }
    (Ce.prototype.generatePattern = function (o, p, f) {
      return o.type === t.Identifier ? Je(o) : this.generateExpression(o, p, f);
    }),
      (Ce.prototype.generateFunctionParams = function (o) {
        var p, f, h, g;
        if (
          ((g = !1),
          o.type === t.ArrowFunctionExpression &&
            !o.rest &&
            (!o.defaults || o.defaults.length === 0) &&
            o.params.length === 1 &&
            o.params[0].type === t.Identifier)
        )
          h = [Hr(o, !0), Je(o.params[0])];
        else {
          for (
            h = o.type === t.ArrowFunctionExpression ? [Hr(o, !1)] : [],
              h.push("("),
              o.defaults && (g = !0),
              p = 0,
              f = o.params.length;
            p < f;
            ++p
          )
            g && o.defaults[p]
              ? h.push(
                  this.generateAssignment(
                    o.params[p],
                    o.defaults[p],
                    "=",
                    e.Assignment,
                    M
                  )
                )
              : h.push(this.generatePattern(o.params[p], e.Assignment, M)),
              p + 1 < f && h.push("," + b);
          o.rest &&
            (o.params.length && h.push("," + b),
            h.push("..."),
            h.push(Je(o.rest))),
            h.push(")");
        }
        return h;
      }),
      (Ce.prototype.generateFunctionBody = function (o) {
        var p, f;
        return (
          (p = this.generateFunctionParams(o)),
          o.type === t.ArrowFunctionExpression && (p.push(b), p.push("=>")),
          o.expression
            ? (p.push(b),
              (f = this.generateExpression(o.body, e.Assignment, M)),
              f.toString().charAt(0) === "{" && (f = ["(", f, ")"]),
              p.push(f))
            : p.push(this.maybeBlock(o.body, Yf)),
          p
        );
      }),
      (Ce.prototype.generateIterationForStatement = function (o, p, f) {
        var h = ["for" + (p.await ? Oe() + "await" : "") + b + "("],
          g = this;
        return (
          De(function () {
            p.left.type === t.VariableDeclaration
              ? De(function () {
                  h.push(p.left.kind + Oe()),
                    h.push(g.generateStatement(p.left.declarations[0], ki));
                })
              : h.push(g.generateExpression(p.left, e.Call, M)),
              (h = Y(h, o)),
              (h = [Y(h, g.generateExpression(p.right, e.Assignment, M)), ")"]);
          }),
          h.push(this.maybeBlock(p.body, f)),
          h
        );
      }),
      (Ce.prototype.generatePropertyKey = function (o, p) {
        var f = [];
        return (
          p && f.push("["),
          f.push(this.generateExpression(o, e.Assignment, M)),
          p && f.push("]"),
          f
        );
      }),
      (Ce.prototype.generateAssignment = function (o, p, f, h, g) {
        return (
          e.Assignment < h && (g |= B),
          Se(
            [
              this.generateExpression(o, e.Call, g),
              b + f + b,
              this.generateExpression(p, e.Assignment, g),
            ],
            e.Assignment,
            h
          )
        );
      }),
      (Ce.prototype.semicolon = function (o) {
        return !_ && o & $ ? "" : ";";
      }),
      (Ce.Statement = {
        BlockStatement: function (o, p) {
          var f,
            h,
            g = ["{", x],
            D = this;
          return (
            De(function () {
              o.body.length === 0 &&
                A &&
                ((f = o.range),
                f[1] - f[0] > 2 &&
                  ((h = S.substring(f[0] + 1, f[1] - 1)),
                  h[0] ===
                    `
` && (g = ["{"]),
                  g.push(h)));
              var F, k, q, ae;
              for (
                ae = ie, p & re && (ae |= J), F = 0, k = o.body.length;
                F < k;
                ++F
              )
                A &&
                  (F === 0 &&
                    (o.body[0].leadingComments &&
                      ((f = o.body[0].leadingComments[0].extendedRange),
                      (h = S.substring(f[0], f[1])),
                      h[0] ===
                        `
` && (g = ["{"])),
                    o.body[0].leadingComments ||
                      br(o.range[0], o.body[0].range[0], g)),
                  F > 0 &&
                    !o.body[F - 1].trailingComments &&
                    !o.body[F].leadingComments &&
                    br(o.body[F - 1].range[1], o.body[F].range[0], g)),
                  F === k - 1 && (ae |= $),
                  o.body[F].leadingComments && A
                    ? (q = D.generateStatement(o.body[F], ae))
                    : (q = je(D.generateStatement(o.body[F], ae))),
                  g.push(q),
                  Pe(ce(q).toString()) ||
                    (A && F < k - 1 && o.body[F + 1].leadingComments) ||
                    g.push(x),
                  A &&
                    F === k - 1 &&
                    (o.body[F].trailingComments ||
                      br(o.body[F].range[1], o.range[1], g));
            }),
            g.push(je("}")),
            g
          );
        },
        BreakStatement: function (o, p) {
          return o.label
            ? "break " + o.label.name + this.semicolon(p)
            : "break" + this.semicolon(p);
        },
        ContinueStatement: function (o, p) {
          return o.label
            ? "continue " + o.label.name + this.semicolon(p)
            : "continue" + this.semicolon(p);
        },
        ClassBody: function (o, p) {
          var f = ["{", x],
            h = this;
          return (
            De(function (g) {
              var D, F;
              for (D = 0, F = o.body.length; D < F; ++D)
                f.push(g),
                  f.push(h.generateExpression(o.body[D], e.Sequence, M)),
                  D + 1 < F && f.push(x);
            }),
            Pe(ce(f).toString()) || f.push(x),
            f.push(a),
            f.push("}"),
            f
          );
        },
        ClassDeclaration: function (o, p) {
          var f, h;
          return (
            (f = ["class"]),
            o.id && (f = Y(f, this.generateExpression(o.id, e.Sequence, M))),
            o.superClass &&
              ((h = Y(
                "extends",
                this.generateExpression(o.superClass, e.Unary, M)
              )),
              (f = Y(f, h))),
            f.push(b),
            f.push(this.generateStatement(o.body, qe)),
            f
          );
        },
        DirectiveStatement: function (o, p) {
          return R.raw && o.raw
            ? o.raw + this.semicolon(p)
            : tp(o.directive) + this.semicolon(p);
        },
        DoWhileStatement: function (o, p) {
          var f = Y("do", this.maybeBlock(o.body, ie));
          return (
            (f = this.maybeBlockSuffix(o.body, f)),
            Y(f, [
              "while" + b + "(",
              this.generateExpression(o.test, e.Sequence, M),
              ")" + this.semicolon(p),
            ])
          );
        },
        CatchClause: function (o, p) {
          var f,
            h = this;
          return (
            De(function () {
              var g;
              o.param
                ? ((f = [
                    "catch" + b + "(",
                    h.generateExpression(o.param, e.Sequence, M),
                    ")",
                  ]),
                  o.guard &&
                    ((g = h.generateExpression(o.guard, e.Sequence, M)),
                    f.splice(2, 0, " if ", g)))
                : (f = ["catch"]);
            }),
            f.push(this.maybeBlock(o.body, ie)),
            f
          );
        },
        DebuggerStatement: function (o, p) {
          return "debugger" + this.semicolon(p);
        },
        EmptyStatement: function (o, p) {
          return ";";
        },
        ExportDefaultDeclaration: function (o, p) {
          var f = ["export"],
            h;
          return (
            (h = p & $ ? qe : ie),
            (f = Y(f, "default")),
            I(o.declaration)
              ? (f = Y(f, this.generateStatement(o.declaration, h)))
              : (f = Y(
                  f,
                  this.generateExpression(o.declaration, e.Assignment, M) +
                    this.semicolon(p)
                )),
            f
          );
        },
        ExportNamedDeclaration: function (o, p) {
          var f = ["export"],
            h,
            g = this;
          return (
            (h = p & $ ? qe : ie),
            o.declaration
              ? Y(f, this.generateStatement(o.declaration, h))
              : (o.specifiers &&
                  (o.specifiers.length === 0
                    ? (f = Y(f, "{" + b + "}"))
                    : o.specifiers[0].type === t.ExportBatchSpecifier
                    ? (f = Y(
                        f,
                        this.generateExpression(o.specifiers[0], e.Sequence, M)
                      ))
                    : ((f = Y(f, "{")),
                      De(function (D) {
                        var F, k;
                        for (
                          f.push(x), F = 0, k = o.specifiers.length;
                          F < k;
                          ++F
                        )
                          f.push(D),
                            f.push(
                              g.generateExpression(
                                o.specifiers[F],
                                e.Sequence,
                                M
                              )
                            ),
                            F + 1 < k && f.push("," + x);
                      }),
                      Pe(ce(f).toString()) || f.push(x),
                      f.push(a + "}")),
                  o.source
                    ? (f = Y(f, [
                        "from" + b,
                        this.generateExpression(o.source, e.Sequence, M),
                        this.semicolon(p),
                      ]))
                    : f.push(this.semicolon(p))),
                f)
          );
        },
        ExportAllDeclaration: function (o, p) {
          var f = ["export" + b, "*" + b];
          return (
            o.exported && f.push("as " + o.exported.name + " "),
            (f = Y(f, [
              "from" + b,
              this.generateExpression(o.source, e.Sequence, M),
              this.semicolon(p),
            ])),
            f
          );
        },
        ExpressionStatement: function (o, p) {
          var f, h;
          function g(k) {
            var q;
            return k.slice(0, 5) !== "class"
              ? !1
              : ((q = k.charCodeAt(5)),
                q === 123 ||
                  s.code.isWhiteSpace(q) ||
                  s.code.isLineTerminator(q));
          }
          function D(k) {
            var q;
            return k.slice(0, 8) !== "function"
              ? !1
              : ((q = k.charCodeAt(8)),
                q === 40 ||
                  s.code.isWhiteSpace(q) ||
                  q === 42 ||
                  s.code.isLineTerminator(q));
          }
          function F(k) {
            var q, ae, we;
            if (
              k.slice(0, 5) !== "async" ||
              !s.code.isWhiteSpace(k.charCodeAt(5))
            )
              return !1;
            for (
              ae = 6, we = k.length;
              ae < we && s.code.isWhiteSpace(k.charCodeAt(ae));
              ++ae
            );
            return ae === we || k.slice(ae, ae + 8) !== "function"
              ? !1
              : ((q = k.charCodeAt(ae + 8)),
                q === 40 ||
                  s.code.isWhiteSpace(q) ||
                  q === 42 ||
                  s.code.isLineTerminator(q));
          }
          return (
            (f = [this.generateExpression(o.expression, e.Sequence, M)]),
            (h = ce(f).toString()),
            h.charCodeAt(0) === 123 ||
            g(h) ||
            D(h) ||
            F(h) ||
            (L &&
              p & J &&
              o.expression.type === t.Literal &&
              typeof o.expression.value == "string")
              ? (f = ["(", f, ")" + this.semicolon(p)])
              : f.push(this.semicolon(p)),
            f
          );
        },
        ImportDeclaration: function (o, p) {
          var f,
            h,
            g = this;
          return o.specifiers.length === 0
            ? [
                "import",
                b,
                this.generateExpression(o.source, e.Sequence, M),
                this.semicolon(p),
              ]
            : ((f = ["import"]),
              (h = 0),
              o.specifiers[h].type === t.ImportDefaultSpecifier &&
                ((f = Y(f, [
                  this.generateExpression(o.specifiers[h], e.Sequence, M),
                ])),
                ++h),
              o.specifiers[h] &&
                (h !== 0 && f.push(","),
                o.specifiers[h].type === t.ImportNamespaceSpecifier
                  ? (f = Y(f, [
                      b,
                      this.generateExpression(o.specifiers[h], e.Sequence, M),
                    ]))
                  : (f.push(b + "{"),
                    o.specifiers.length - h === 1
                      ? (f.push(b),
                        f.push(
                          this.generateExpression(
                            o.specifiers[h],
                            e.Sequence,
                            M
                          )
                        ),
                        f.push(b + "}" + b))
                      : (De(function (D) {
                          var F, k;
                          for (
                            f.push(x), F = h, k = o.specifiers.length;
                            F < k;
                            ++F
                          )
                            f.push(D),
                              f.push(
                                g.generateExpression(
                                  o.specifiers[F],
                                  e.Sequence,
                                  M
                                )
                              ),
                              F + 1 < k && f.push("," + x);
                        }),
                        Pe(ce(f).toString()) || f.push(x),
                        f.push(a + "}" + b)))),
              (f = Y(f, [
                "from" + b,
                this.generateExpression(o.source, e.Sequence, M),
                this.semicolon(p),
              ])),
              f);
        },
        VariableDeclarator: function (o, p) {
          var f = p & B ? M : Ae;
          return o.init
            ? [
                this.generateExpression(o.id, e.Assignment, f),
                b,
                "=",
                b,
                this.generateExpression(o.init, e.Assignment, f),
              ]
            : this.generatePattern(o.id, e.Assignment, f);
        },
        VariableDeclaration: function (o, p) {
          var f,
            h,
            g,
            D,
            F,
            k = this;
          (f = [o.kind]), (F = p & B ? ie : ki);
          function q() {
            for (
              D = o.declarations[0],
                R.comment && D.leadingComments
                  ? (f.push(`
`),
                    f.push(je(k.generateStatement(D, F))))
                  : (f.push(Oe()), f.push(k.generateStatement(D, F))),
                h = 1,
                g = o.declarations.length;
              h < g;
              ++h
            )
              (D = o.declarations[h]),
                R.comment && D.leadingComments
                  ? (f.push("," + x), f.push(je(k.generateStatement(D, F))))
                  : (f.push("," + b), f.push(k.generateStatement(D, F)));
          }
          return (
            o.declarations.length > 1 ? De(q) : q(),
            f.push(this.semicolon(p)),
            f
          );
        },
        StaticBlock: function (o, p) {
          return ["static" + b, this.BlockStatement(o, p)];
        },
        ThrowStatement: function (o, p) {
          return [
            Y("throw", this.generateExpression(o.argument, e.Sequence, M)),
            this.semicolon(p),
          ];
        },
        TryStatement: function (o, p) {
          var f, h, g, D;
          if (
            ((f = ["try", this.maybeBlock(o.block, ie)]),
            (f = this.maybeBlockSuffix(o.block, f)),
            o.handlers)
          )
            for (h = 0, g = o.handlers.length; h < g; ++h)
              (f = Y(f, this.generateStatement(o.handlers[h], ie))),
                (o.finalizer || h + 1 !== g) &&
                  (f = this.maybeBlockSuffix(o.handlers[h].body, f));
          else {
            for (D = o.guardedHandlers || [], h = 0, g = D.length; h < g; ++h)
              (f = Y(f, this.generateStatement(D[h], ie))),
                (o.finalizer || h + 1 !== g) &&
                  (f = this.maybeBlockSuffix(D[h].body, f));
            if (o.handler)
              if (Array.isArray(o.handler))
                for (h = 0, g = o.handler.length; h < g; ++h)
                  (f = Y(f, this.generateStatement(o.handler[h], ie))),
                    (o.finalizer || h + 1 !== g) &&
                      (f = this.maybeBlockSuffix(o.handler[h].body, f));
              else
                (f = Y(f, this.generateStatement(o.handler, ie))),
                  o.finalizer && (f = this.maybeBlockSuffix(o.handler.body, f));
          }
          return (
            o.finalizer &&
              (f = Y(f, ["finally", this.maybeBlock(o.finalizer, ie)])),
            f
          );
        },
        SwitchStatement: function (o, p) {
          var f,
            h,
            g,
            D,
            F,
            k = this;
          if (
            (De(function () {
              f = [
                "switch" + b + "(",
                k.generateExpression(o.discriminant, e.Sequence, M),
                ")" + b + "{" + x,
              ];
            }),
            o.cases)
          )
            for (F = ie, g = 0, D = o.cases.length; g < D; ++g)
              g === D - 1 && (F |= $),
                (h = je(this.generateStatement(o.cases[g], F))),
                f.push(h),
                Pe(ce(h).toString()) || f.push(x);
          return f.push(je("}")), f;
        },
        SwitchCase: function (o, p) {
          var f,
            h,
            g,
            D,
            F,
            k = this;
          return (
            De(function () {
              for (
                o.test
                  ? (f = [
                      Y("case", k.generateExpression(o.test, e.Sequence, M)),
                      ":",
                    ])
                  : (f = ["default:"]),
                  g = 0,
                  D = o.consequent.length,
                  D &&
                    o.consequent[0].type === t.BlockStatement &&
                    ((h = k.maybeBlock(o.consequent[0], ie)),
                    f.push(h),
                    (g = 1)),
                  g !== D && !Pe(ce(f).toString()) && f.push(x),
                  F = ie;
                g < D;
                ++g
              )
                g === D - 1 && p & $ && (F |= $),
                  (h = je(k.generateStatement(o.consequent[g], F))),
                  f.push(h),
                  g + 1 !== D && !Pe(ce(h).toString()) && f.push(x);
            }),
            f
          );
        },
        IfStatement: function (o, p) {
          var f,
            h,
            g,
            D = this;
          return (
            De(function () {
              f = [
                "if" + b + "(",
                D.generateExpression(o.test, e.Sequence, M),
                ")",
              ];
            }),
            (g = p & $),
            (h = ie),
            g && (h |= $),
            o.alternate
              ? (f.push(this.maybeBlock(o.consequent, ie)),
                (f = this.maybeBlockSuffix(o.consequent, f)),
                o.alternate.type === t.IfStatement
                  ? (f = Y(f, [
                      "else ",
                      this.generateStatement(o.alternate, h),
                    ]))
                  : (f = Y(f, Y("else", this.maybeBlock(o.alternate, h)))))
              : f.push(this.maybeBlock(o.consequent, h)),
            f
          );
        },
        ForStatement: function (o, p) {
          var f,
            h = this;
          return (
            De(function () {
              (f = ["for" + b + "("]),
                o.init
                  ? o.init.type === t.VariableDeclaration
                    ? f.push(h.generateStatement(o.init, ki))
                    : (f.push(h.generateExpression(o.init, e.Sequence, Ae)),
                      f.push(";"))
                  : f.push(";"),
                o.test &&
                  (f.push(b),
                  f.push(h.generateExpression(o.test, e.Sequence, M))),
                f.push(";"),
                o.update &&
                  (f.push(b),
                  f.push(h.generateExpression(o.update, e.Sequence, M))),
                f.push(")");
            }),
            f.push(this.maybeBlock(o.body, p & $ ? qe : ie)),
            f
          );
        },
        ForInStatement: function (o, p) {
          return this.generateIterationForStatement("in", o, p & $ ? qe : ie);
        },
        ForOfStatement: function (o, p) {
          return this.generateIterationForStatement("of", o, p & $ ? qe : ie);
        },
        LabeledStatement: function (o, p) {
          return [o.label.name + ":", this.maybeBlock(o.body, p & $ ? qe : ie)];
        },
        Program: function (o, p) {
          var f, h, g, D, F;
          for (
            D = o.body.length,
              f = [
                O && D > 0
                  ? `
`
                  : "",
              ],
              F = Kf,
              g = 0;
            g < D;
            ++g
          )
            !O && g === D - 1 && (F |= $),
              A &&
                (g === 0 &&
                  (o.body[0].leadingComments ||
                    br(o.range[0], o.body[g].range[0], f)),
                g > 0 &&
                  !o.body[g - 1].trailingComments &&
                  !o.body[g].leadingComments &&
                  br(o.body[g - 1].range[1], o.body[g].range[0], f)),
              (h = je(this.generateStatement(o.body[g], F))),
              f.push(h),
              g + 1 < D &&
                !Pe(ce(h).toString()) &&
                ((A && o.body[g + 1].leadingComments) || f.push(x)),
              A &&
                g === D - 1 &&
                (o.body[g].trailingComments ||
                  br(o.body[g].range[1], o.range[1], f));
          return f;
        },
        FunctionDeclaration: function (o, p) {
          return [
            Hr(o, !0),
            "function",
            Ni(o) || Oe(),
            o.id ? Je(o.id) : "",
            this.generateFunctionBody(o),
          ];
        },
        ReturnStatement: function (o, p) {
          return o.argument
            ? [
                Y("return", this.generateExpression(o.argument, e.Sequence, M)),
                this.semicolon(p),
              ]
            : ["return" + this.semicolon(p)];
        },
        WhileStatement: function (o, p) {
          var f,
            h = this;
          return (
            De(function () {
              f = [
                "while" + b + "(",
                h.generateExpression(o.test, e.Sequence, M),
                ")",
              ];
            }),
            f.push(this.maybeBlock(o.body, p & $ ? qe : ie)),
            f
          );
        },
        WithStatement: function (o, p) {
          var f,
            h = this;
          return (
            De(function () {
              f = [
                "with" + b + "(",
                h.generateExpression(o.object, e.Sequence, M),
                ")",
              ];
            }),
            f.push(this.maybeBlock(o.body, p & $ ? qe : ie)),
            f
          );
        },
      }),
      Wa(Ce.prototype, Ce.Statement),
      (Ce.Expression = {
        SequenceExpression: function (o, p, f) {
          var h, g, D;
          for (
            e.Sequence < p && (f |= B), h = [], g = 0, D = o.expressions.length;
            g < D;
            ++g
          )
            h.push(this.generateExpression(o.expressions[g], e.Assignment, f)),
              g + 1 < D && h.push("," + b);
          return Se(h, e.Sequence, p);
        },
        AssignmentExpression: function (o, p, f) {
          return this.generateAssignment(o.left, o.right, o.operator, p, f);
        },
        ArrowFunctionExpression: function (o, p, f) {
          return Se(this.generateFunctionBody(o), e.ArrowFunction, p);
        },
        ConditionalExpression: function (o, p, f) {
          return (
            e.Conditional < p && (f |= B),
            Se(
              [
                this.generateExpression(o.test, e.LogicalOR, f),
                b + "?" + b,
                this.generateExpression(o.consequent, e.Assignment, f),
                b + ":" + b,
                this.generateExpression(o.alternate, e.Assignment, f),
              ],
              e.Conditional,
              p
            )
          );
        },
        LogicalExpression: function (o, p, f) {
          return this.BinaryExpression(o, p, f);
        },
        BinaryExpression: function (o, p, f) {
          var h, g, D, F, k, q;
          switch (((F = r[o.operator]), (g = F), (D = F + 1), o.operator)) {
            case "**":
              (g = e.Postfix), (D = F);
              break;
            case "??":
              o.left.type === t.LogicalExpression &&
                (o.left.operator === "||" || o.left.operator === "&&") &&
                (g = r[o.left.operator] + 1),
                o.right.type === t.LogicalExpression &&
                  o.right.operator === "&&" &&
                  (D = r[o.right.operator] + 1);
              break;
            case "||":
              o.left.type === t.LogicalExpression &&
                o.left.operator === "??" &&
                (g = r[o.left.operator] + 1);
              break;
          }
          return (
            F < p && (f |= B),
            (k = this.generateExpression(o.left, g, f)),
            (q = k.toString()),
            q.charCodeAt(q.length - 1) === 47 &&
            s.code.isIdentifierPartES5(o.operator.charCodeAt(0))
              ? (h = [k, Oe(), o.operator])
              : (h = Y(k, o.operator)),
            (k = this.generateExpression(o.right, D, f)),
            (o.operator === "/" && k.toString().charAt(0) === "/") ||
            (o.operator.slice(-1) === "<" && k.toString().slice(0, 3) === "!--")
              ? (h.push(Oe()), h.push(k))
              : (h = Y(h, k)),
            o.operator === "in" && !(f & B) ? ["(", h, ")"] : Se(h, F, p)
          );
        },
        CallExpression: function (o, p, f) {
          var h, g, D, F;
          for (
            h = [this.generateExpression(o.callee, e.Call, Te)],
              o.optional && h.push("?."),
              h.push("("),
              g = 0,
              D = o.arguments.length;
            g < D;
            ++g
          )
            h.push(this.generateExpression(o.arguments[g], e.Assignment, M)),
              g + 1 < D && h.push("," + b);
          return (
            h.push(")"),
            f & W
              ? ((F = o.callee.id === null && o.callee.params.length === 0),
                F ? Se(h, p, e.Call) : Se(h, e.Call, p))
              : ["(", h, ")"]
          );
        },
        ChainExpression: function (o, p, f) {
          e.OptionalChaining < p && (f |= W);
          var h = this.generateExpression(o.expression, e.OptionalChaining, f);
          return Se(h, e.OptionalChaining, p);
        },
        NewExpression: function (o, p, f) {
          var h, g, D, F, k;
          if (
            ((g = o.arguments.length),
            (k = f & Z && !w && g === 0 ? zt : bt),
            (h = Y("new", this.generateExpression(o.callee, e.New, k))),
            !(f & Z) || w || g > 0)
          ) {
            for (h.push("("), D = 0, F = g; D < F; ++D)
              h.push(this.generateExpression(o.arguments[D], e.Assignment, M)),
                D + 1 < F && h.push("," + b);
            h.push(")");
          }
          return Se(h, e.New, p);
        },
        MemberExpression: function (o, p, f) {
          var h, g;
          return (
            (h = [this.generateExpression(o.object, e.Call, f & W ? Te : bt)]),
            o.computed
              ? (o.optional && h.push("?."),
                h.push("["),
                h.push(
                  this.generateExpression(
                    o.property,
                    e.Sequence,
                    f & W ? M : zt
                  )
                ),
                h.push("]"))
              : (!o.optional &&
                  o.object.type === t.Literal &&
                  typeof o.object.value == "number" &&
                  ((g = ce(h).toString()),
                  g.indexOf(".") < 0 &&
                    !/[eExX]/.test(g) &&
                    s.code.isDecimalDigit(g.charCodeAt(g.length - 1)) &&
                    !(g.length >= 2 && g.charCodeAt(0) === 48) &&
                    h.push(" ")),
                h.push(o.optional ? "?." : "."),
                h.push(Je(o.property))),
            Se(h, e.Member, p)
          );
        },
        MetaProperty: function (o, p, f) {
          var h;
          return (
            (h = []),
            h.push(typeof o.meta == "string" ? o.meta : Je(o.meta)),
            h.push("."),
            h.push(typeof o.property == "string" ? o.property : Je(o.property)),
            Se(h, e.Member, p)
          );
        },
        UnaryExpression: function (o, p, f) {
          var h, g, D, F, k;
          return (
            (g = this.generateExpression(o.argument, e.Unary, M)),
            b === ""
              ? (h = Y(o.operator, g))
              : ((h = [o.operator]),
                o.operator.length > 2
                  ? (h = Y(h, g))
                  : ((F = ce(h).toString()),
                    (k = F.charCodeAt(F.length - 1)),
                    (D = g.toString().charCodeAt(0)),
                    (((k === 43 || k === 45) && k === D) ||
                      (s.code.isIdentifierPartES5(k) &&
                        s.code.isIdentifierPartES5(D))) &&
                      h.push(Oe()),
                    h.push(g))),
            Se(h, e.Unary, p)
          );
        },
        YieldExpression: function (o, p, f) {
          var h;
          return (
            o.delegate ? (h = "yield*") : (h = "yield"),
            o.argument &&
              (h = Y(h, this.generateExpression(o.argument, e.Yield, M))),
            Se(h, e.Yield, p)
          );
        },
        AwaitExpression: function (o, p, f) {
          var h = Y(
            o.all ? "await*" : "await",
            this.generateExpression(o.argument, e.Await, M)
          );
          return Se(h, e.Await, p);
        },
        UpdateExpression: function (o, p, f) {
          return o.prefix
            ? Se(
                [o.operator, this.generateExpression(o.argument, e.Unary, M)],
                e.Unary,
                p
              )
            : Se(
                [this.generateExpression(o.argument, e.Postfix, M), o.operator],
                e.Postfix,
                p
              );
        },
        FunctionExpression: function (o, p, f) {
          var h = [Hr(o, !0), "function"];
          return (
            o.id
              ? (h.push(Ni(o) || Oe()), h.push(Je(o.id)))
              : h.push(Ni(o) || b),
            h.push(this.generateFunctionBody(o)),
            h
          );
        },
        ArrayPattern: function (o, p, f) {
          return this.ArrayExpression(o, p, f, !0);
        },
        ArrayExpression: function (o, p, f, h) {
          var g,
            D,
            F = this;
          return o.elements.length
            ? ((D = h ? !1 : o.elements.length > 1),
              (g = ["[", D ? x : ""]),
              De(function (k) {
                var q, ae;
                for (q = 0, ae = o.elements.length; q < ae; ++q)
                  o.elements[q]
                    ? (g.push(D ? k : ""),
                      g.push(
                        F.generateExpression(o.elements[q], e.Assignment, M)
                      ))
                    : (D && g.push(k), q + 1 === ae && g.push(",")),
                    q + 1 < ae && g.push("," + (D ? x : b));
              }),
              D && !Pe(ce(g).toString()) && g.push(x),
              g.push(D ? a : ""),
              g.push("]"),
              g)
            : "[]";
        },
        RestElement: function (o, p, f) {
          return "..." + this.generatePattern(o.argument);
        },
        ClassExpression: function (o, p, f) {
          var h, g;
          return (
            (h = ["class"]),
            o.id && (h = Y(h, this.generateExpression(o.id, e.Sequence, M))),
            o.superClass &&
              ((g = Y(
                "extends",
                this.generateExpression(o.superClass, e.Unary, M)
              )),
              (h = Y(h, g))),
            h.push(b),
            h.push(this.generateStatement(o.body, qe)),
            h
          );
        },
        MethodDefinition: function (o, p, f) {
          var h, g;
          return (
            o.static ? (h = ["static" + b]) : (h = []),
            o.kind === "get" || o.kind === "set"
              ? (g = [
                  Y(o.kind, this.generatePropertyKey(o.key, o.computed)),
                  this.generateFunctionBody(o.value),
                ])
              : (g = [
                  Ya(o),
                  this.generatePropertyKey(o.key, o.computed),
                  this.generateFunctionBody(o.value),
                ]),
            Y(h, g)
          );
        },
        PrivateIdentifier: function (o, p, f) {
          return Je(o);
        },
        Property: function (o, p, f) {
          return o.kind === "get" || o.kind === "set"
            ? [
                o.kind,
                Oe(),
                this.generatePropertyKey(o.key, o.computed),
                this.generateFunctionBody(o.value),
              ]
            : o.shorthand
            ? o.value.type === "AssignmentPattern"
              ? this.AssignmentPattern(o.value, e.Sequence, M)
              : this.generatePropertyKey(o.key, o.computed)
            : o.method
            ? [
                Ya(o),
                this.generatePropertyKey(o.key, o.computed),
                this.generateFunctionBody(o.value),
              ]
            : [
                this.generatePropertyKey(o.key, o.computed),
                ":" + b,
                this.generateExpression(o.value, e.Assignment, M),
              ];
        },
        PropertyDefinition: function (o, p, f) {
          var h;
          return (
            o.static ? (h = ["static "]) : (h = []),
            h.push(this.generatePropertyKey(o.key, o.computed)),
            o.value &&
              (h.push(b + "=" + b),
              h.push(this.generateExpression(o.value, e.Assignment, M))),
            h.push(this.semicolon(f)),
            h
          );
        },
        ObjectExpression: function (o, p, f) {
          var h,
            g,
            D,
            F = this;
          return o.properties.length
            ? ((h = o.properties.length > 1),
              De(function () {
                D = F.generateExpression(o.properties[0], e.Sequence, M);
              }),
              !h && !Qf(ce(D).toString())
                ? ["{", b, D, b, "}"]
                : (De(function (k) {
                    var q, ae;
                    if (((g = ["{", x, k, D]), h))
                      for (
                        g.push("," + x), q = 1, ae = o.properties.length;
                        q < ae;
                        ++q
                      )
                        g.push(k),
                          g.push(
                            F.generateExpression(o.properties[q], e.Sequence, M)
                          ),
                          q + 1 < ae && g.push("," + x);
                  }),
                  Pe(ce(g).toString()) || g.push(x),
                  g.push(a),
                  g.push("}"),
                  g))
            : "{}";
        },
        AssignmentPattern: function (o, p, f) {
          return this.generateAssignment(o.left, o.right, "=", p, f);
        },
        ObjectPattern: function (o, p, f) {
          var h,
            g,
            D,
            F,
            k,
            q = this;
          if (!o.properties.length) return "{}";
          if (((F = !1), o.properties.length === 1))
            (k = o.properties[0]),
              k.type === t.Property &&
                k.value.type !== t.Identifier &&
                (F = !0);
          else
            for (g = 0, D = o.properties.length; g < D; ++g)
              if (
                ((k = o.properties[g]), k.type === t.Property && !k.shorthand)
              ) {
                F = !0;
                break;
              }
          return (
            (h = ["{", F ? x : ""]),
            De(function (ae) {
              var we, rr;
              for (we = 0, rr = o.properties.length; we < rr; ++we)
                h.push(F ? ae : ""),
                  h.push(q.generateExpression(o.properties[we], e.Sequence, M)),
                  we + 1 < rr && h.push("," + (F ? x : b));
            }),
            F && !Pe(ce(h).toString()) && h.push(x),
            h.push(F ? a : ""),
            h.push("}"),
            h
          );
        },
        ThisExpression: function (o, p, f) {
          return "this";
        },
        Super: function (o, p, f) {
          return "super";
        },
        Identifier: function (o, p, f) {
          return Je(o);
        },
        ImportDefaultSpecifier: function (o, p, f) {
          return Je(o.id || o.local);
        },
        ImportNamespaceSpecifier: function (o, p, f) {
          var h = ["*"],
            g = o.id || o.local;
          return g && h.push(b + "as" + Oe() + Je(g)), h;
        },
        ImportSpecifier: function (o, p, f) {
          var h = o.imported,
            g = [h.name],
            D = o.local;
          return (
            D && D.name !== h.name && g.push(Oe() + "as" + Oe() + Je(D)), g
          );
        },
        ExportSpecifier: function (o, p, f) {
          var h = o.local,
            g = [h.name],
            D = o.exported;
          return (
            D && D.name !== h.name && g.push(Oe() + "as" + Oe() + Je(D)), g
          );
        },
        Literal: function (o, p, f) {
          var h;
          if (o.hasOwnProperty("raw") && C && R.raw)
            try {
              if (
                ((h = C(o.raw).body[0].expression),
                h.type === t.Literal && h.value === o.value)
              )
                return o.raw;
            } catch {}
          return o.regex
            ? "/" + o.regex.pattern + "/" + o.regex.flags
            : typeof o.bigint == "string" && o.raw
            ? o.raw
            : o.value === null
            ? "null"
            : typeof o.value == "string"
            ? rp(o.value)
            : typeof o.value == "number"
            ? o.raw && o.raw.indexOf("_") !== -1
              ? o.raw
              : Jf(o.value)
            : typeof o.value == "boolean"
            ? o.value
              ? "true"
              : "false"
            : Xf(o.value);
        },
        GeneratorExpression: function (o, p, f) {
          return this.ComprehensionExpression(o, p, f);
        },
        ComprehensionExpression: function (o, p, f) {
          var h,
            g,
            D,
            F,
            k = this;
          return (
            (h = o.type === t.GeneratorExpression ? ["("] : ["["]),
            R.moz.comprehensionExpressionStartsWithAssignment &&
              ((F = this.generateExpression(o.body, e.Assignment, M)),
              h.push(F)),
            o.blocks &&
              De(function () {
                for (g = 0, D = o.blocks.length; g < D; ++g)
                  (F = k.generateExpression(o.blocks[g], e.Sequence, M)),
                    g > 0 || R.moz.comprehensionExpressionStartsWithAssignment
                      ? (h = Y(h, F))
                      : h.push(F);
              }),
            o.filter &&
              ((h = Y(h, "if" + b)),
              (F = this.generateExpression(o.filter, e.Sequence, M)),
              (h = Y(h, ["(", F, ")"]))),
            R.moz.comprehensionExpressionStartsWithAssignment ||
              ((F = this.generateExpression(o.body, e.Assignment, M)),
              (h = Y(h, F))),
            h.push(o.type === t.GeneratorExpression ? ")" : "]"),
            h
          );
        },
        ComprehensionBlock: function (o, p, f) {
          var h;
          return (
            o.left.type === t.VariableDeclaration
              ? (h = [
                  o.left.kind,
                  Oe(),
                  this.generateStatement(o.left.declarations[0], ki),
                ])
              : (h = this.generateExpression(o.left, e.Call, M)),
            (h = Y(h, o.of ? "of" : "in")),
            (h = Y(h, this.generateExpression(o.right, e.Sequence, M))),
            ["for" + b + "(", h, ")"]
          );
        },
        SpreadElement: function (o, p, f) {
          return ["...", this.generateExpression(o.argument, e.Assignment, M)];
        },
        TaggedTemplateExpression: function (o, p, f) {
          var h = Te;
          f & W || (h = bt);
          var g = [
            this.generateExpression(o.tag, e.Call, h),
            this.generateExpression(o.quasi, e.Primary, Pt),
          ];
          return Se(g, e.TaggedTemplate, p);
        },
        TemplateElement: function (o, p, f) {
          return o.value.raw;
        },
        TemplateLiteral: function (o, p, f) {
          var h, g, D;
          for (h = ["`"], g = 0, D = o.quasis.length; g < D; ++g)
            h.push(this.generateExpression(o.quasis[g], e.Primary, M)),
              g + 1 < D &&
                (h.push("${" + b),
                h.push(
                  this.generateExpression(o.expressions[g], e.Sequence, M)
                ),
                h.push(b + "}"));
          return h.push("`"), h;
        },
        ModuleSpecifier: function (o, p, f) {
          return this.Literal(o, p, f);
        },
        ImportExpression: function (o, p, f) {
          return Se(
            [
              "import(",
              this.generateExpression(o.source, e.Assignment, M),
              ")",
            ],
            e.Call,
            p
          );
        },
      }),
      Wa(Ce.prototype, Ce.Expression),
      (Ce.prototype.generateExpression = function (o, p, f) {
        var h, g;
        return (
          (g = o.type || t.Property),
          R.verbatim && o.hasOwnProperty(R.verbatim)
            ? sp(o, p)
            : ((h = this[g](o, p, f)), R.comment && (h = Ha(o, h)), ce(h, o))
        );
      }),
      (Ce.prototype.generateStatement = function (o, p) {
        var f, h;
        return (
          (f = this[o.type](o, p)),
          R.comment && (f = Ha(o, f)),
          (h = ce(f).toString()),
          o.type === t.Program &&
            !O &&
            x === "" &&
            h.charAt(h.length - 1) ===
              `
` &&
            (f = v ? ce(f).replaceRight(/\s+$/, "") : h.replace(/\s+$/, "")),
          ce(f, o)
        );
      });
    function ap(o) {
      var p;
      if (((p = new Ce()), I(o))) return p.generateStatement(o, ie);
      if (Q(o)) return p.generateExpression(o, e.Sequence, M);
      throw new Error("Unknown node type: " + o.type);
    }
    function op(o, p) {
      var f = Ua(),
        h,
        g;
      return (
        p != null
          ? (typeof p.indent == "string" && (f.format.indent.style = p.indent),
            typeof p.base == "number" && (f.format.indent.base = p.base),
            (p = Ii(f, p)),
            (u = p.format.indent.style),
            typeof p.base == "string"
              ? (a = p.base)
              : (a = tr(u, p.format.indent.base)))
          : ((p = f),
            (u = p.format.indent.style),
            (a = tr(u, p.format.indent.base))),
        (c = p.format.json),
        (m = p.format.renumber),
        (d = c ? !1 : p.format.hexadecimal),
        (E = c ? "double" : p.format.quotes),
        (y = p.format.escapeless),
        (x = p.format.newline),
        (b = p.format.space),
        p.format.compact && (x = b = u = a = ""),
        (w = p.format.parentheses),
        (_ = p.format.semicolons),
        (O = p.format.safeConcatenation),
        (L = p.directive),
        (C = c ? null : p.parse),
        (v = p.sourceMap),
        (S = p.sourceCode),
        (A = p.format.preserveBlankLines && S !== null),
        (R = p),
        v &&
          (Rt.browser
            ? (i = global.sourceMap.SourceNode)
            : (i = Po().SourceNode)),
        (h = ap(o)),
        v
          ? ((g = h.toStringWithSourceMap({
              file: p.file,
              sourceRoot: p.sourceMapRoot,
            })),
            p.sourceContent &&
              g.map.setSourceContent(p.sourceMap, p.sourceContent),
            p.sourceMapWithCode ? g : g.map.toString())
          : ((g = { code: h.toString(), map: null }),
            p.sourceMapWithCode ? g : g.code)
      );
    }
    (T = {
      indent: { style: "", base: 0 },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1,
    }),
      (P = Ua().format),
      (Rt.version = Oo().version),
      (Rt.generate = op),
      (Rt.attachComments = n.attachComments),
      (Rt.Precedence = Ii({}, e)),
      (Rt.browser = !1),
      (Rt.FORMAT_MINIFY = T),
      (Rt.FORMAT_DEFAULTS = P);
  })();
});
var Fs = j((Ey, xu) => {
  "use strict";
  xu.exports = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var e = {},
      r = Symbol("test"),
      i = Object(r);
    if (
      typeof r == "string" ||
      Object.prototype.toString.call(r) !== "[object Symbol]" ||
      Object.prototype.toString.call(i) !== "[object Symbol]"
    )
      return !1;
    var n = 42;
    e[r] = n;
    for (r in e) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(e).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(e).length !== 0)
    )
      return !1;
    var s = Object.getOwnPropertySymbols(e);
    if (
      s.length !== 1 ||
      s[0] !== r ||
      !Object.prototype.propertyIsEnumerable.call(e, r)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(e, r);
      if (a.value !== n || a.enumerable !== !0) return !1;
    }
    return !0;
  };
});
var Qi = j((xy, bu) => {
  "use strict";
  var hh = Fs();
  bu.exports = function () {
    return hh() && !!Symbol.toStringTag;
  };
});
var Du = j((by, vu) => {
  "use strict";
  var Au = typeof Symbol < "u" && Symbol,
    dh = Fs();
  vu.exports = function () {
    return typeof Au != "function" ||
      typeof Symbol != "function" ||
      typeof Au("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : dh();
  };
});
var Fu = j((Ay, Cu) => {
  "use strict";
  var Su = { foo: {} },
    mh = Object;
  Cu.exports = function () {
    return (
      { __proto__: Su }.foo === Su.foo && !({ __proto__: null } instanceof mh)
    );
  };
});
var Bu = j((vy, _u) => {
  "use strict";
  var yh = "Function.prototype.bind called on incompatible ",
    gh = Object.prototype.toString,
    Eh = Math.max,
    xh = "[object Function]",
    wu = function (e, r) {
      for (var i = [], n = 0; n < e.length; n += 1) i[n] = e[n];
      for (var s = 0; s < r.length; s += 1) i[s + e.length] = r[s];
      return i;
    },
    bh = function (e, r) {
      for (var i = [], n = r || 0, s = 0; n < e.length; n += 1, s += 1)
        i[s] = e[n];
      return i;
    },
    Ah = function (t, e) {
      for (var r = "", i = 0; i < t.length; i += 1)
        (r += t[i]), i + 1 < t.length && (r += e);
      return r;
    };
  _u.exports = function (e) {
    var r = this;
    if (typeof r != "function" || gh.apply(r) !== xh)
      throw new TypeError(yh + r);
    for (
      var i = bh(arguments, 1),
        n,
        s = function () {
          if (this instanceof n) {
            var d = r.apply(this, wu(i, arguments));
            return Object(d) === d ? d : this;
          }
          return r.apply(e, wu(i, arguments));
        },
        a = Eh(0, r.length - i.length),
        u = [],
        c = 0;
      c < a;
      c++
    )
      u[c] = "$" + c;
    if (
      ((n = Function(
        "binder",
        "return function (" +
          Ah(u, ",") +
          "){ return binder.apply(this,arguments); }"
      )(s)),
      r.prototype)
    ) {
      var m = function () {};
      (m.prototype = r.prototype),
        (n.prototype = new m()),
        (m.prototype = null);
    }
    return n;
  };
});
var Ji = j((Dy, ku) => {
  "use strict";
  var vh = Bu();
  ku.exports = Function.prototype.bind || vh;
});
var Nu = j((Sy, Iu) => {
  "use strict";
  var Dh = Function.prototype.call,
    Sh = Object.prototype.hasOwnProperty,
    Ch = Ji();
  Iu.exports = Ch.call(Dh, Sh);
});
var cr = j((Cy, Ru) => {
  "use strict";
  var se,
    Or = SyntaxError,
    Lu = Function,
    Pr = TypeError,
    ws = function (t) {
      try {
        return Lu('"use strict"; return (' + t + ").constructor;")();
      } catch {}
    },
    ur = Object.getOwnPropertyDescriptor;
  if (ur)
    try {
      ur({}, "");
    } catch {
      ur = null;
    }
  var _s = function () {
      throw new Pr();
    },
    Fh = ur
      ? (function () {
          try {
            return arguments.callee, _s;
          } catch {
            try {
              return ur(arguments, "callee").get;
            } catch {
              return _s;
            }
          }
        })()
      : _s,
    Nr = Du()(),
    wh = Fu()(),
    _e =
      Object.getPrototypeOf ||
      (wh
        ? function (t) {
            return t.__proto__;
          }
        : null),
    Tr = {},
    _h = typeof Uint8Array > "u" || !_e ? se : _e(Uint8Array),
    lr = {
      "%AggregateError%": typeof AggregateError > "u" ? se : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? se : ArrayBuffer,
      "%ArrayIteratorPrototype%": Nr && _e ? _e([][Symbol.iterator]()) : se,
      "%AsyncFromSyncIteratorPrototype%": se,
      "%AsyncFunction%": Tr,
      "%AsyncGenerator%": Tr,
      "%AsyncGeneratorFunction%": Tr,
      "%AsyncIteratorPrototype%": Tr,
      "%Atomics%": typeof Atomics > "u" ? se : Atomics,
      "%BigInt%": typeof BigInt > "u" ? se : BigInt,
      "%BigInt64Array%": typeof BigInt64Array > "u" ? se : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array > "u" ? se : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? se : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? se : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? se : Float64Array,
      "%FinalizationRegistry%":
        typeof FinalizationRegistry > "u" ? se : FinalizationRegistry,
      "%Function%": Lu,
      "%GeneratorFunction%": Tr,
      "%Int8Array%": typeof Int8Array > "u" ? se : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? se : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? se : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": Nr && _e ? _e(_e([][Symbol.iterator]())) : se,
      "%JSON%": typeof JSON == "object" ? JSON : se,
      "%Map%": typeof Map > "u" ? se : Map,
      "%MapIteratorPrototype%":
        typeof Map > "u" || !Nr || !_e ? se : _e(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? se : Promise,
      "%Proxy%": typeof Proxy > "u" ? se : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? se : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? se : Set,
      "%SetIteratorPrototype%":
        typeof Set > "u" || !Nr || !_e ? se : _e(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%":
        typeof SharedArrayBuffer > "u" ? se : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": Nr && _e ? _e(""[Symbol.iterator]()) : se,
      "%Symbol%": Nr ? Symbol : se,
      "%SyntaxError%": Or,
      "%ThrowTypeError%": Fh,
      "%TypedArray%": _h,
      "%TypeError%": Pr,
      "%Uint8Array%": typeof Uint8Array > "u" ? se : Uint8Array,
      "%Uint8ClampedArray%":
        typeof Uint8ClampedArray > "u" ? se : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? se : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? se : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? se : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? se : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? se : WeakSet,
    };
  if (_e)
    try {
      null.error;
    } catch (t) {
      (Tu = _e(_e(t))), (lr["%Error.prototype%"] = Tu);
    }
  var Tu,
    Bh = function t(e) {
      var r;
      if (e === "%AsyncFunction%") r = ws("async function () {}");
      else if (e === "%GeneratorFunction%") r = ws("function* () {}");
      else if (e === "%AsyncGeneratorFunction%")
        r = ws("async function* () {}");
      else if (e === "%AsyncGenerator%") {
        var i = t("%AsyncGeneratorFunction%");
        i && (r = i.prototype);
      } else if (e === "%AsyncIteratorPrototype%") {
        var n = t("%AsyncGenerator%");
        n && _e && (r = _e(n.prototype));
      }
      return (lr[e] = r), r;
    },
    Pu = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype",
      ],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"],
    },
    si = Ji(),
    Xi = Nu(),
    kh = si.call(Function.call, Array.prototype.concat),
    Ih = si.call(Function.apply, Array.prototype.splice),
    Ou = si.call(Function.call, String.prototype.replace),
    Zi = si.call(Function.call, String.prototype.slice),
    Nh = si.call(Function.call, RegExp.prototype.exec),
    Th =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Ph = /\\(\\)?/g,
    Oh = function (e) {
      var r = Zi(e, 0, 1),
        i = Zi(e, -1);
      if (r === "%" && i !== "%")
        throw new Or("invalid intrinsic syntax, expected closing `%`");
      if (i === "%" && r !== "%")
        throw new Or("invalid intrinsic syntax, expected opening `%`");
      var n = [];
      return (
        Ou(e, Th, function (s, a, u, c) {
          n[n.length] = u ? Ou(c, Ph, "$1") : a || s;
        }),
        n
      );
    },
    Lh = function (e, r) {
      var i = e,
        n;
      if ((Xi(Pu, i) && ((n = Pu[i]), (i = "%" + n[0] + "%")), Xi(lr, i))) {
        var s = lr[i];
        if ((s === Tr && (s = Bh(i)), typeof s > "u" && !r))
          throw new Pr(
            "intrinsic " +
              e +
              " exists, but is not available. Please file an issue!"
          );
        return { alias: n, name: i, value: s };
      }
      throw new Or("intrinsic " + e + " does not exist!");
    };
  Ru.exports = function (e, r) {
    if (typeof e != "string" || e.length === 0)
      throw new Pr("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
      throw new Pr('"allowMissing" argument must be a boolean');
    if (Nh(/^%?[^%]*%?$/, e) === null)
      throw new Or(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var i = Oh(e),
      n = i.length > 0 ? i[0] : "",
      s = Lh("%" + n + "%", r),
      a = s.name,
      u = s.value,
      c = !1,
      m = s.alias;
    m && ((n = m[0]), Ih(i, kh([0, 1], m)));
    for (var d = 1, E = !0; d < i.length; d += 1) {
      var y = i[d],
        x = Zi(y, 0, 1),
        b = Zi(y, -1);
      if (
        (x === '"' ||
          x === "'" ||
          x === "`" ||
          b === '"' ||
          b === "'" ||
          b === "`") &&
        x !== b
      )
        throw new Or("property names with quotes must have matching quotes");
      if (
        ((y === "constructor" || !E) && (c = !0),
        (n += "." + y),
        (a = "%" + n + "%"),
        Xi(lr, a))
      )
        u = lr[a];
      else if (u != null) {
        if (!(y in u)) {
          if (!r)
            throw new Pr(
              "base intrinsic for " +
                e +
                " exists, but the property is not available."
            );
          return;
        }
        if (ur && d + 1 >= i.length) {
          var w = ur(u, y);
          (E = !!w),
            E && "get" in w && !("originalValue" in w.get)
              ? (u = w.get)
              : (u = u[y]);
        } else (E = Xi(u, y)), (u = u[y]);
        E && !c && (lr[a] = u);
      }
    }
    return u;
  };
});
var en = j((Fy, Mu) => {
  "use strict";
  var Rh = cr(),
    Bs = Rh("%Object.defineProperty%", !0),
    ks = function () {
      if (Bs)
        try {
          return Bs({}, "a", { value: 1 }), !0;
        } catch {
          return !1;
        }
      return !1;
    };
  ks.hasArrayLengthDefineBug = function () {
    if (!ks()) return null;
    try {
      return Bs([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  };
  Mu.exports = ks;
});
var rn = j((wy, Vu) => {
  "use strict";
  var Mh = cr(),
    tn = Mh("%Object.getOwnPropertyDescriptor%", !0);
  if (tn)
    try {
      tn([], "length");
    } catch {
      tn = null;
    }
  Vu.exports = tn;
});
var Ns = j((_y, qu) => {
  "use strict";
  var Vh = en()(),
    Is = cr(),
    ai = Vh && Is("%Object.defineProperty%", !0);
  if (ai)
    try {
      ai({}, "a", { value: 1 });
    } catch {
      ai = !1;
    }
  var Gh = Is("%SyntaxError%"),
    Lr = Is("%TypeError%"),
    Gu = rn();
  qu.exports = function (e, r, i) {
    if (!e || (typeof e != "object" && typeof e != "function"))
      throw new Lr("`obj` must be an object or a function`");
    if (typeof r != "string" && typeof r != "symbol")
      throw new Lr("`property` must be a string or a symbol`");
    if (
      arguments.length > 3 &&
      typeof arguments[3] != "boolean" &&
      arguments[3] !== null
    )
      throw new Lr("`nonEnumerable`, if provided, must be a boolean or null");
    if (
      arguments.length > 4 &&
      typeof arguments[4] != "boolean" &&
      arguments[4] !== null
    )
      throw new Lr("`nonWritable`, if provided, must be a boolean or null");
    if (
      arguments.length > 5 &&
      typeof arguments[5] != "boolean" &&
      arguments[5] !== null
    )
      throw new Lr("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new Lr("`loose`, if provided, must be a boolean");
    var n = arguments.length > 3 ? arguments[3] : null,
      s = arguments.length > 4 ? arguments[4] : null,
      a = arguments.length > 5 ? arguments[5] : null,
      u = arguments.length > 6 ? arguments[6] : !1,
      c = !!Gu && Gu(e, r);
    if (ai)
      ai(e, r, {
        configurable: a === null && c ? c.configurable : !a,
        enumerable: n === null && c ? c.enumerable : !n,
        value: i,
        writable: s === null && c ? c.writable : !s,
      });
    else if (u || (!n && !s && !a)) e[r] = i;
    else
      throw new Gh(
        "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
      );
  };
});
var Hu = j((By, $u) => {
  "use strict";
  var zu = cr(),
    ju = Ns(),
    qh = en()(),
    Uu = rn(),
    Wu = zu("%TypeError%"),
    jh = zu("%Math.floor%");
  $u.exports = function (e, r) {
    if (typeof e != "function") throw new Wu("`fn` is not a function");
    if (typeof r != "number" || r < 0 || r > 4294967295 || jh(r) !== r)
      throw new Wu("`length` must be a positive 32-bit integer");
    var i = arguments.length > 2 && !!arguments[2],
      n = !0,
      s = !0;
    if ("length" in e && Uu) {
      var a = Uu(e, "length");
      a && !a.configurable && (n = !1), a && !a.writable && (s = !1);
    }
    return (
      (n || s || !i) && (qh ? ju(e, "length", r, !0, !0) : ju(e, "length", r)),
      e
    );
  };
});
var ui = j((ky, nn) => {
  "use strict";
  var Ts = Ji(),
    Rr = cr(),
    Uh = Hu(),
    Wh = Rr("%TypeError%"),
    Yu = Rr("%Function.prototype.apply%"),
    Qu = Rr("%Function.prototype.call%"),
    Ju = Rr("%Reflect.apply%", !0) || Ts.call(Qu, Yu),
    oi = Rr("%Object.defineProperty%", !0),
    zh = Rr("%Math.max%");
  if (oi)
    try {
      oi({}, "a", { value: 1 });
    } catch {
      oi = null;
    }
  nn.exports = function (e) {
    if (typeof e != "function") throw new Wh("a function is required");
    var r = Ju(Ts, Qu, arguments);
    return Uh(r, 1 + zh(0, e.length - (arguments.length - 1)), !0);
  };
  var Ku = function () {
    return Ju(Ts, Yu, arguments);
  };
  oi ? oi(nn.exports, "apply", { value: Ku }) : (nn.exports.apply = Ku);
});
var Ps = j((Iy, el) => {
  "use strict";
  var Xu = cr(),
    Zu = ui(),
    $h = Zu(Xu("String.prototype.indexOf"));
  el.exports = function (e, r) {
    var i = Xu(e, !!r);
    return typeof i == "function" && $h(e, ".prototype.") > -1 ? Zu(i) : i;
  };
});
var il = j((Ny, rl) => {
  "use strict";
  var Hh = Qi()(),
    Kh = Ps(),
    Os = Kh("Object.prototype.toString"),
    sn = function (e) {
      return Hh && e && typeof e == "object" && Symbol.toStringTag in e
        ? !1
        : Os(e) === "[object Arguments]";
    },
    tl = function (e) {
      return sn(e)
        ? !0
        : e !== null &&
            typeof e == "object" &&
            typeof e.length == "number" &&
            e.length >= 0 &&
            Os(e) !== "[object Array]" &&
            Os(e.callee) === "[object Function]";
    },
    Yh = (function () {
      return sn(arguments);
    })();
  sn.isLegacyArguments = tl;
  rl.exports = Yh ? sn : tl;
});
var al = j((Ty, sl) => {
  "use strict";
  var Qh = Object.prototype.toString,
    Jh = Function.prototype.toString,
    Xh = /^\s*(?:function)?\*/,
    nl = Qi()(),
    Ls = Object.getPrototypeOf,
    Zh = function () {
      if (!nl) return !1;
      try {
        return Function("return function*() {}")();
      } catch {}
    },
    Rs;
  sl.exports = function (e) {
    if (typeof e != "function") return !1;
    if (Xh.test(Jh.call(e))) return !0;
    if (!nl) {
      var r = Qh.call(e);
      return r === "[object GeneratorFunction]";
    }
    if (!Ls) return !1;
    if (typeof Rs > "u") {
      var i = Zh();
      Rs = i ? Ls(i) : !1;
    }
    return Ls(e) === Rs;
  };
});
var cl = j((Py, ll) => {
  "use strict";
  var ul = Function.prototype.toString,
    Mr = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
    Vs,
    an;
  if (typeof Mr == "function" && typeof Object.defineProperty == "function")
    try {
      (Vs = Object.defineProperty({}, "length", {
        get: function () {
          throw an;
        },
      })),
        (an = {}),
        Mr(
          function () {
            throw 42;
          },
          null,
          Vs
        );
    } catch (t) {
      t !== an && (Mr = null);
    }
  else Mr = null;
  var ed = /^\s*class\b/,
    Gs = function (e) {
      try {
        var r = ul.call(e);
        return ed.test(r);
      } catch {
        return !1;
      }
    },
    Ms = function (e) {
      try {
        return Gs(e) ? !1 : (ul.call(e), !0);
      } catch {
        return !1;
      }
    },
    on = Object.prototype.toString,
    td = "[object Object]",
    rd = "[object Function]",
    id = "[object GeneratorFunction]",
    nd = "[object HTMLAllCollection]",
    sd = "[object HTML document.all class]",
    ad = "[object HTMLCollection]",
    od = typeof Symbol == "function" && !!Symbol.toStringTag,
    ud = !(0 in [,]),
    qs = function () {
      return !1;
    };
  typeof document == "object" &&
    ((ol = document.all),
    on.call(ol) === on.call(document.all) &&
      (qs = function (e) {
        if ((ud || !e) && (typeof e > "u" || typeof e == "object"))
          try {
            var r = on.call(e);
            return (
              (r === nd || r === sd || r === ad || r === td) && e("") == null
            );
          } catch {}
        return !1;
      }));
  var ol;
  ll.exports = Mr
    ? function (e) {
        if (qs(e)) return !0;
        if (!e || (typeof e != "function" && typeof e != "object")) return !1;
        try {
          Mr(e, null, Vs);
        } catch (r) {
          if (r !== an) return !1;
        }
        return !Gs(e) && Ms(e);
      }
    : function (e) {
        if (qs(e)) return !0;
        if (!e || (typeof e != "function" && typeof e != "object")) return !1;
        if (od) return Ms(e);
        if (Gs(e)) return !1;
        var r = on.call(e);
        return r !== rd && r !== id && !/^\[object HTML/.test(r) ? !1 : Ms(e);
      };
});
var hl = j((Oy, pl) => {
  "use strict";
  var ld = cl(),
    cd = Object.prototype.toString,
    fl = Object.prototype.hasOwnProperty,
    fd = function (e, r, i) {
      for (var n = 0, s = e.length; n < s; n++)
        fl.call(e, n) && (i == null ? r(e[n], n, e) : r.call(i, e[n], n, e));
    },
    pd = function (e, r, i) {
      for (var n = 0, s = e.length; n < s; n++)
        i == null ? r(e.charAt(n), n, e) : r.call(i, e.charAt(n), n, e);
    },
    hd = function (e, r, i) {
      for (var n in e)
        fl.call(e, n) && (i == null ? r(e[n], n, e) : r.call(i, e[n], n, e));
    },
    dd = function (e, r, i) {
      if (!ld(r)) throw new TypeError("iterator must be a function");
      var n;
      arguments.length >= 3 && (n = i),
        cd.call(e) === "[object Array]"
          ? fd(e, r, n)
          : typeof e == "string"
          ? pd(e, r, n)
          : hd(e, r, n);
    };
  pl.exports = dd;
});
var ml = j((Ly, dl) => {
  "use strict";
  var js = [
      "BigInt64Array",
      "BigUint64Array",
      "Float32Array",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Uint8Array",
      "Uint8ClampedArray",
    ],
    md = typeof globalThis > "u" ? global : globalThis;
  dl.exports = function () {
    for (var e = [], r = 0; r < js.length; r++)
      typeof md[js[r]] == "function" && (e[e.length] = js[r]);
    return e;
  };
});
var Hs = j((Ry, xl) => {
  "use strict";
  var ln = hl(),
    yd = ml(),
    yl = ui(),
    zs = Ps(),
    un = rn(),
    gd = zs("Object.prototype.toString"),
    El = Qi()(),
    gl = typeof globalThis > "u" ? global : globalThis,
    Ws = yd(),
    $s = zs("String.prototype.slice"),
    Us = Object.getPrototypeOf,
    Ed =
      zs("Array.prototype.indexOf", !0) ||
      function (e, r) {
        for (var i = 0; i < e.length; i += 1) if (e[i] === r) return i;
        return -1;
      },
    cn = { __proto__: null };
  El && un && Us
    ? ln(Ws, function (t) {
        var e = new gl[t]();
        if (Symbol.toStringTag in e) {
          var r = Us(e),
            i = un(r, Symbol.toStringTag);
          if (!i) {
            var n = Us(r);
            i = un(n, Symbol.toStringTag);
          }
          cn["$" + t] = yl(i.get);
        }
      })
    : ln(Ws, function (t) {
        var e = new gl[t](),
          r = e.slice || e.set;
        r && (cn["$" + t] = yl(r));
      });
  var xd = function (e) {
      var r = !1;
      return (
        ln(cn, function (i, n) {
          if (!r)
            try {
              "$" + i(e) === n && (r = $s(n, 1));
            } catch {}
        }),
        r
      );
    },
    bd = function (e) {
      var r = !1;
      return (
        ln(cn, function (i, n) {
          if (!r)
            try {
              i(e), (r = $s(n, 1));
            } catch {}
        }),
        r
      );
    };
  xl.exports = function (e) {
    if (!e || typeof e != "object") return !1;
    if (!El) {
      var r = $s(gd(e), 8, -1);
      return Ed(Ws, r) > -1 ? r : r !== "Object" ? !1 : bd(e);
    }
    return un ? xd(e) : null;
  };
});
var Al = j((My, bl) => {
  "use strict";
  var Ad = Hs();
  bl.exports = function (e) {
    return !!Ad(e);
  };
});
var Ol = j((ee) => {
  "use strict";
  var vd = il(),
    Dd = al(),
    St = Hs(),
    vl = Al();
  function Vr(t) {
    return t.call.bind(t);
  }
  var Dl = typeof BigInt < "u",
    Sl = typeof Symbol < "u",
    ft = Vr(Object.prototype.toString),
    Sd = Vr(Number.prototype.valueOf),
    Cd = Vr(String.prototype.valueOf),
    Fd = Vr(Boolean.prototype.valueOf);
  Dl && (Cl = Vr(BigInt.prototype.valueOf));
  var Cl;
  Sl && (Fl = Vr(Symbol.prototype.valueOf));
  var Fl;
  function ci(t, e) {
    if (typeof t != "object") return !1;
    try {
      return e(t), !0;
    } catch {
      return !1;
    }
  }
  ee.isArgumentsObject = vd;
  ee.isGeneratorFunction = Dd;
  ee.isTypedArray = vl;
  function wd(t) {
    return (
      (typeof Promise < "u" && t instanceof Promise) ||
      (t !== null &&
        typeof t == "object" &&
        typeof t.then == "function" &&
        typeof t.catch == "function")
    );
  }
  ee.isPromise = wd;
  function _d(t) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? ArrayBuffer.isView(t)
      : vl(t) || _l(t);
  }
  ee.isArrayBufferView = _d;
  function Bd(t) {
    return St(t) === "Uint8Array";
  }
  ee.isUint8Array = Bd;
  function kd(t) {
    return St(t) === "Uint8ClampedArray";
  }
  ee.isUint8ClampedArray = kd;
  function Id(t) {
    return St(t) === "Uint16Array";
  }
  ee.isUint16Array = Id;
  function Nd(t) {
    return St(t) === "Uint32Array";
  }
  ee.isUint32Array = Nd;
  function Td(t) {
    return St(t) === "Int8Array";
  }
  ee.isInt8Array = Td;
  function Pd(t) {
    return St(t) === "Int16Array";
  }
  ee.isInt16Array = Pd;
  function Od(t) {
    return St(t) === "Int32Array";
  }
  ee.isInt32Array = Od;
  function Ld(t) {
    return St(t) === "Float32Array";
  }
  ee.isFloat32Array = Ld;
  function Rd(t) {
    return St(t) === "Float64Array";
  }
  ee.isFloat64Array = Rd;
  function Md(t) {
    return St(t) === "BigInt64Array";
  }
  ee.isBigInt64Array = Md;
  function Vd(t) {
    return St(t) === "BigUint64Array";
  }
  ee.isBigUint64Array = Vd;
  function fn(t) {
    return ft(t) === "[object Map]";
  }
  fn.working = typeof Map < "u" && fn(new Map());
  function Gd(t) {
    return typeof Map > "u" ? !1 : fn.working ? fn(t) : t instanceof Map;
  }
  ee.isMap = Gd;
  function pn(t) {
    return ft(t) === "[object Set]";
  }
  pn.working = typeof Set < "u" && pn(new Set());
  function qd(t) {
    return typeof Set > "u" ? !1 : pn.working ? pn(t) : t instanceof Set;
  }
  ee.isSet = qd;
  function hn(t) {
    return ft(t) === "[object WeakMap]";
  }
  hn.working = typeof WeakMap < "u" && hn(new WeakMap());
  function jd(t) {
    return typeof WeakMap > "u"
      ? !1
      : hn.working
      ? hn(t)
      : t instanceof WeakMap;
  }
  ee.isWeakMap = jd;
  function Ys(t) {
    return ft(t) === "[object WeakSet]";
  }
  Ys.working = typeof WeakSet < "u" && Ys(new WeakSet());
  function Ud(t) {
    return Ys(t);
  }
  ee.isWeakSet = Ud;
  function dn(t) {
    return ft(t) === "[object ArrayBuffer]";
  }
  dn.working = typeof ArrayBuffer < "u" && dn(new ArrayBuffer());
  function wl(t) {
    return typeof ArrayBuffer > "u"
      ? !1
      : dn.working
      ? dn(t)
      : t instanceof ArrayBuffer;
  }
  ee.isArrayBuffer = wl;
  function mn(t) {
    return ft(t) === "[object DataView]";
  }
  mn.working =
    typeof ArrayBuffer < "u" &&
    typeof DataView < "u" &&
    mn(new DataView(new ArrayBuffer(1), 0, 1));
  function _l(t) {
    return typeof DataView > "u"
      ? !1
      : mn.working
      ? mn(t)
      : t instanceof DataView;
  }
  ee.isDataView = _l;
  var Ks = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function li(t) {
    return ft(t) === "[object SharedArrayBuffer]";
  }
  function Bl(t) {
    return typeof Ks > "u"
      ? !1
      : (typeof li.working > "u" && (li.working = li(new Ks())),
        li.working ? li(t) : t instanceof Ks);
  }
  ee.isSharedArrayBuffer = Bl;
  function Wd(t) {
    return ft(t) === "[object AsyncFunction]";
  }
  ee.isAsyncFunction = Wd;
  function zd(t) {
    return ft(t) === "[object Map Iterator]";
  }
  ee.isMapIterator = zd;
  function $d(t) {
    return ft(t) === "[object Set Iterator]";
  }
  ee.isSetIterator = $d;
  function Hd(t) {
    return ft(t) === "[object Generator]";
  }
  ee.isGeneratorObject = Hd;
  function Kd(t) {
    return ft(t) === "[object WebAssembly.Module]";
  }
  ee.isWebAssemblyCompiledModule = Kd;
  function kl(t) {
    return ci(t, Sd);
  }
  ee.isNumberObject = kl;
  function Il(t) {
    return ci(t, Cd);
  }
  ee.isStringObject = Il;
  function Nl(t) {
    return ci(t, Fd);
  }
  ee.isBooleanObject = Nl;
  function Tl(t) {
    return Dl && ci(t, Cl);
  }
  ee.isBigIntObject = Tl;
  function Pl(t) {
    return Sl && ci(t, Fl);
  }
  ee.isSymbolObject = Pl;
  function Yd(t) {
    return kl(t) || Il(t) || Nl(t) || Tl(t) || Pl(t);
  }
  ee.isBoxedPrimitive = Yd;
  function Qd(t) {
    return typeof Uint8Array < "u" && (wl(t) || Bl(t));
  }
  ee.isAnyArrayBuffer = Qd;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (t) {
    Object.defineProperty(ee, t, {
      enumerable: !1,
      value: function () {
        throw new Error(t + " is not supported in userland");
      },
    });
  });
});
var Rl = j((Gy, Ll) => {
  Ll.exports = function (e) {
    return (
      e &&
      typeof e == "object" &&
      typeof e.copy == "function" &&
      typeof e.fill == "function" &&
      typeof e.readUInt8 == "function"
    );
  };
});
var Ml = j((qy, Qs) => {
  typeof Object.create == "function"
    ? (Qs.exports = function (e, r) {
        r &&
          ((e.super_ = r),
          (e.prototype = Object.create(r.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })));
      })
    : (Qs.exports = function (e, r) {
        if (r) {
          e.super_ = r;
          var i = function () {};
          (i.prototype = r.prototype),
            (e.prototype = new i()),
            (e.prototype.constructor = e);
        }
      });
});
var qr = j((te) => {
  var Vl =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        for (var r = Object.keys(e), i = {}, n = 0; n < r.length; n++)
          i[r[n]] = Object.getOwnPropertyDescriptor(e, r[n]);
        return i;
      },
    Jd = /%[sdj%]/g;
  te.format = function (t) {
    if (!An(t)) {
      for (var e = [], r = 0; r < arguments.length; r++)
        e.push(Kt(arguments[r]));
      return e.join(" ");
    }
    for (
      var r = 1,
        i = arguments,
        n = i.length,
        s = String(t).replace(Jd, function (u) {
          if (u === "%%") return "%";
          if (r >= n) return u;
          switch (u) {
            case "%s":
              return String(i[r++]);
            case "%d":
              return Number(i[r++]);
            case "%j":
              try {
                return JSON.stringify(i[r++]);
              } catch {
                return "[Circular]";
              }
            default:
              return u;
          }
        }),
        a = i[r];
      r < n;
      a = i[++r]
    )
      bn(a) || !Gr(a) ? (s += " " + a) : (s += " " + Kt(a));
    return s;
  };
  te.deprecate = function (t, e) {
    if (typeof process < "u" && process.noDeprecation === !0) return t;
    if (typeof process > "u")
      return function () {
        return te.deprecate(t, e).apply(this, arguments);
      };
    var r = !1;
    function i() {
      if (!r) {
        if (process.throwDeprecation) throw new Error(e);
        process.traceDeprecation ? console.trace(e) : console.error(e),
          (r = !0);
      }
      return t.apply(this, arguments);
    }
    return i;
  };
  var yn = {},
    Xd = /^$/;
  te.debuglog = function (t) {
    if (((t = t.toUpperCase()), !yn[t]))
      if (Xd.test(t)) {
        var e = process.pid;
        yn[t] = function () {
          var r = te.format.apply(te, arguments);
          console.error("%s %d: %s", t, e, r);
        };
      } else yn[t] = function () {};
    return yn[t];
  };
  function Kt(t, e) {
    var r = { seen: [], stylize: e0 };
    return (
      arguments.length >= 3 && (r.depth = arguments[2]),
      arguments.length >= 4 && (r.colors = arguments[3]),
      ea(e) ? (r.showHidden = e) : e && te._extend(r, e),
      pr(r.showHidden) && (r.showHidden = !1),
      pr(r.depth) && (r.depth = 2),
      pr(r.colors) && (r.colors = !1),
      pr(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = Zd),
      En(r, t, r.depth)
    );
  }
  te.inspect = Kt;
  Kt.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  };
  Kt.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
  };
  function Zd(t, e) {
    var r = Kt.styles[e];
    return r
      ? "\x1B[" + Kt.colors[r][0] + "m" + t + "\x1B[" + Kt.colors[r][1] + "m"
      : t;
  }
  function e0(t, e) {
    return t;
  }
  function t0(t) {
    var e = {};
    return (
      t.forEach(function (r, i) {
        e[r] = !0;
      }),
      e
    );
  }
  function En(t, e, r) {
    if (
      t.customInspect &&
      e &&
      gn(e.inspect) &&
      e.inspect !== te.inspect &&
      !(e.constructor && e.constructor.prototype === e)
    ) {
      var i = e.inspect(r, t);
      return An(i) || (i = En(t, i, r)), i;
    }
    var n = r0(t, e);
    if (n) return n;
    var s = Object.keys(e),
      a = t0(s);
    if (
      (t.showHidden && (s = Object.getOwnPropertyNames(e)),
      pi(e) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
    )
      return Js(e);
    if (s.length === 0) {
      if (gn(e)) {
        var u = e.name ? ": " + e.name : "";
        return t.stylize("[Function" + u + "]", "special");
      }
      if (fi(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
      if (xn(e)) return t.stylize(Date.prototype.toString.call(e), "date");
      if (pi(e)) return Js(e);
    }
    var c = "",
      m = !1,
      d = ["{", "}"];
    if ((Gl(e) && ((m = !0), (d = ["[", "]"])), gn(e))) {
      var E = e.name ? ": " + e.name : "";
      c = " [Function" + E + "]";
    }
    if (
      (fi(e) && (c = " " + RegExp.prototype.toString.call(e)),
      xn(e) && (c = " " + Date.prototype.toUTCString.call(e)),
      pi(e) && (c = " " + Js(e)),
      s.length === 0 && (!m || e.length == 0))
    )
      return d[0] + c + d[1];
    if (r < 0)
      return fi(e)
        ? t.stylize(RegExp.prototype.toString.call(e), "regexp")
        : t.stylize("[Object]", "special");
    t.seen.push(e);
    var y;
    return (
      m
        ? (y = i0(t, e, r, a, s))
        : (y = s.map(function (x) {
            return Zs(t, e, r, a, x, m);
          })),
      t.seen.pop(),
      n0(y, c, d)
    );
  }
  function r0(t, e) {
    if (pr(e)) return t.stylize("undefined", "undefined");
    if (An(e)) {
      var r =
        "'" +
        JSON.stringify(e)
          .replace(/^"|"$/g, "")
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return t.stylize(r, "string");
    }
    if (ql(e)) return t.stylize("" + e, "number");
    if (ea(e)) return t.stylize("" + e, "boolean");
    if (bn(e)) return t.stylize("null", "null");
  }
  function Js(t) {
    return "[" + Error.prototype.toString.call(t) + "]";
  }
  function i0(t, e, r, i, n) {
    for (var s = [], a = 0, u = e.length; a < u; ++a)
      jl(e, String(a)) ? s.push(Zs(t, e, r, i, String(a), !0)) : s.push("");
    return (
      n.forEach(function (c) {
        c.match(/^\d+$/) || s.push(Zs(t, e, r, i, c, !0));
      }),
      s
    );
  }
  function Zs(t, e, r, i, n, s) {
    var a, u, c;
    if (
      ((c = Object.getOwnPropertyDescriptor(e, n) || { value: e[n] }),
      c.get
        ? c.set
          ? (u = t.stylize("[Getter/Setter]", "special"))
          : (u = t.stylize("[Getter]", "special"))
        : c.set && (u = t.stylize("[Setter]", "special")),
      jl(i, n) || (a = "[" + n + "]"),
      u ||
        (t.seen.indexOf(c.value) < 0
          ? (bn(r) ? (u = En(t, c.value, null)) : (u = En(t, c.value, r - 1)),
            u.indexOf(`
`) > -1 &&
              (s
                ? (u = u
                    .split(
                      `
`
                    )
                    .map(function (m) {
                      return "  " + m;
                    })
                    .join(
                      `
`
                    )
                    .slice(2))
                : (u =
                    `
` +
                    u
                      .split(
                        `
`
                      )
                      .map(function (m) {
                        return "   " + m;
                      }).join(`
`))))
          : (u = t.stylize("[Circular]", "special"))),
      pr(a))
    ) {
      if (s && n.match(/^\d+$/)) return u;
      (a = JSON.stringify("" + n)),
        a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((a = a.slice(1, -1)), (a = t.stylize(a, "name")))
          : ((a = a
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (a = t.stylize(a, "string")));
    }
    return a + ": " + u;
  }
  function n0(t, e, r) {
    var i = 0,
      n = t.reduce(function (s, a) {
        return (
          i++,
          a.indexOf(`
`) >= 0 && i++,
          s + a.replace(/\u001b\[\d\d?m/g, "").length + 1
        );
      }, 0);
    return n > 60
      ? r[0] +
          (e === ""
            ? ""
            : e +
              `
 `) +
          " " +
          t.join(`,
  `) +
          " " +
          r[1]
      : r[0] + e + " " + t.join(", ") + " " + r[1];
  }
  te.types = Ol();
  function Gl(t) {
    return Array.isArray(t);
  }
  te.isArray = Gl;
  function ea(t) {
    return typeof t == "boolean";
  }
  te.isBoolean = ea;
  function bn(t) {
    return t === null;
  }
  te.isNull = bn;
  function s0(t) {
    return t == null;
  }
  te.isNullOrUndefined = s0;
  function ql(t) {
    return typeof t == "number";
  }
  te.isNumber = ql;
  function An(t) {
    return typeof t == "string";
  }
  te.isString = An;
  function a0(t) {
    return typeof t == "symbol";
  }
  te.isSymbol = a0;
  function pr(t) {
    return t === void 0;
  }
  te.isUndefined = pr;
  function fi(t) {
    return Gr(t) && ta(t) === "[object RegExp]";
  }
  te.isRegExp = fi;
  te.types.isRegExp = fi;
  function Gr(t) {
    return typeof t == "object" && t !== null;
  }
  te.isObject = Gr;
  function xn(t) {
    return Gr(t) && ta(t) === "[object Date]";
  }
  te.isDate = xn;
  te.types.isDate = xn;
  function pi(t) {
    return Gr(t) && (ta(t) === "[object Error]" || t instanceof Error);
  }
  te.isError = pi;
  te.types.isNativeError = pi;
  function gn(t) {
    return typeof t == "function";
  }
  te.isFunction = gn;
  function o0(t) {
    return (
      t === null ||
      typeof t == "boolean" ||
      typeof t == "number" ||
      typeof t == "string" ||
      typeof t == "symbol" ||
      typeof t > "u"
    );
  }
  te.isPrimitive = o0;
  te.isBuffer = Rl();
  function ta(t) {
    return Object.prototype.toString.call(t);
  }
  function Xs(t) {
    return t < 10 ? "0" + t.toString(10) : t.toString(10);
  }
  var u0 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function l0() {
    var t = new Date(),
      e = [Xs(t.getHours()), Xs(t.getMinutes()), Xs(t.getSeconds())].join(":");
    return [t.getDate(), u0[t.getMonth()], e].join(" ");
  }
  te.log = function () {
    console.log("%s - %s", l0(), te.format.apply(te, arguments));
  };
  te.inherits = Ml();
  te._extend = function (t, e) {
    if (!e || !Gr(e)) return t;
    for (var r = Object.keys(e), i = r.length; i--; ) t[r[i]] = e[r[i]];
    return t;
  };
  function jl(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  var fr = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  te.promisify = function (e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (fr && e[fr]) {
      var r = e[fr];
      if (typeof r != "function")
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function'
        );
      return (
        Object.defineProperty(r, fr, {
          value: r,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        r
      );
    }
    function r() {
      for (
        var i,
          n,
          s = new Promise(function (c, m) {
            (i = c), (n = m);
          }),
          a = [],
          u = 0;
        u < arguments.length;
        u++
      )
        a.push(arguments[u]);
      a.push(function (c, m) {
        c ? n(c) : i(m);
      });
      try {
        e.apply(this, a);
      } catch (c) {
        n(c);
      }
      return s;
    }
    return (
      Object.setPrototypeOf(r, Object.getPrototypeOf(e)),
      fr &&
        Object.defineProperty(r, fr, {
          value: r,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
      Object.defineProperties(r, Vl(e))
    );
  };
  te.promisify.custom = fr;
  function c0(t, e) {
    if (!t) {
      var r = new Error("Promise was rejected with a falsy value");
      (r.reason = t), (t = r);
    }
    return e(t);
  }
  function f0(t) {
    if (typeof t != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function e() {
      for (var r = [], i = 0; i < arguments.length; i++) r.push(arguments[i]);
      var n = r.pop();
      if (typeof n != "function")
        throw new TypeError("The last argument must be of type Function");
      var s = this,
        a = function () {
          return n.apply(s, arguments);
        };
      t.apply(this, r).then(
        function (u) {
          process.nextTick(a.bind(null, null, u));
        },
        function (u) {
          process.nextTick(c0.bind(null, u, a));
        }
      );
    }
    return (
      Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
      Object.defineProperties(e, Vl(t)),
      e
    );
  }
  te.callbackify = f0;
});
var sa = j((Uy, zl) => {
  "use strict";
  function jr(t) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (jr = function (r) {
            return typeof r;
          })
        : (jr = function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
      jr(t)
    );
  }
  function p0(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function h0(t, e) {
    return e && (jr(e) === "object" || typeof e == "function") ? e : d0(t);
  }
  function d0(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function ia(t) {
    return (
      (ia = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      ia(t)
    );
  }
  function m0(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && na(t, e);
  }
  function na(t, e) {
    return (
      (na =
        Object.setPrototypeOf ||
        function (i, n) {
          return (i.__proto__ = n), i;
        }),
      na(t, e)
    );
  }
  var Wl = {},
    Ur,
    ra;
  function hi(t, e, r) {
    r || (r = Error);
    function i(s, a, u) {
      return typeof e == "string" ? e : e(s, a, u);
    }
    var n = (function (s) {
      m0(a, s);
      function a(u, c, m) {
        var d;
        return (
          p0(this, a),
          (d = h0(this, ia(a).call(this, i(u, c, m)))),
          (d.code = t),
          d
        );
      }
      return a;
    })(r);
    Wl[t] = n;
  }
  function Ul(t, e) {
    if (Array.isArray(t)) {
      var r = t.length;
      return (
        (t = t.map(function (i) {
          return String(i);
        })),
        r > 2
          ? "one of "
              .concat(e, " ")
              .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
          : r === 2
          ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
          : "of ".concat(e, " ").concat(t[0])
      );
    } else return "of ".concat(e, " ").concat(String(t));
  }
  function y0(t, e, r) {
    return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
  }
  function g0(t, e, r) {
    return (
      (r === void 0 || r > t.length) && (r = t.length),
      t.substring(r - e.length, r) === e
    );
  }
  function E0(t, e, r) {
    return (
      typeof r != "number" && (r = 0),
      r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1
    );
  }
  hi("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
  hi(
    "ERR_INVALID_ARG_TYPE",
    function (t, e, r) {
      Ur === void 0 && (Ur = hr()),
        Ur(typeof t == "string", "'name' must be a string");
      var i;
      typeof e == "string" && y0(e, "not ")
        ? ((i = "must not be"), (e = e.replace(/^not /, "")))
        : (i = "must be");
      var n;
      if (g0(t, " argument"))
        n = "The ".concat(t, " ").concat(i, " ").concat(Ul(e, "type"));
      else {
        var s = E0(t, ".") ? "property" : "argument";
        n = 'The "'
          .concat(t, '" ')
          .concat(s, " ")
          .concat(i, " ")
          .concat(Ul(e, "type"));
      }
      return (n += ". Received type ".concat(jr(r))), n;
    },
    TypeError
  );
  hi(
    "ERR_INVALID_ARG_VALUE",
    function (t, e) {
      var r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : "is invalid";
      ra === void 0 && (ra = qr());
      var i = ra.inspect(e);
      return (
        i.length > 128 && (i = "".concat(i.slice(0, 128), "...")),
        "The argument '".concat(t, "' ").concat(r, ". Received ").concat(i)
      );
    },
    TypeError,
    RangeError
  );
  hi(
    "ERR_INVALID_RETURN_VALUE",
    function (t, e, r) {
      var i;
      return (
        r && r.constructor && r.constructor.name
          ? (i = "instance of ".concat(r.constructor.name))
          : (i = "type ".concat(jr(r))),
        "Expected ".concat(t, ' to be returned from the "').concat(e, '"') +
          " function but got ".concat(i, ".")
      );
    },
    TypeError
  );
  hi(
    "ERR_MISSING_ARGS",
    function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      Ur === void 0 && (Ur = hr()),
        Ur(e.length > 0, "At least one arg needs to be specified");
      var i = "The ",
        n = e.length;
      switch (
        ((e = e.map(function (s) {
          return '"'.concat(s, '"');
        })),
        n)
      ) {
        case 1:
          i += "".concat(e[0], " argument");
          break;
        case 2:
          i += "".concat(e[0], " and ").concat(e[1], " arguments");
          break;
        default:
          (i += e.slice(0, n - 1).join(", ")),
            (i += ", and ".concat(e[n - 1], " arguments"));
          break;
      }
      return "".concat(i, " must be specified");
    },
    TypeError
  );
  zl.exports.codes = Wl;
});
var Ql = j((Wy, Yl) => {
  "use strict";
  function x0(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {},
        i = Object.keys(r);
      typeof Object.getOwnPropertySymbols == "function" &&
        (i = i.concat(
          Object.getOwnPropertySymbols(r).filter(function (n) {
            return Object.getOwnPropertyDescriptor(r, n).enumerable;
          })
        )),
        i.forEach(function (n) {
          b0(t, n, r[n]);
        });
    }
    return t;
  }
  function b0(t, e, r) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  function A0(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function $l(t, e) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function v0(t, e, r) {
    return e && $l(t.prototype, e), r && $l(t, r), t;
  }
  function Wr(t, e) {
    return e && (pt(e) === "object" || typeof e == "function") ? e : aa(t);
  }
  function aa(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function D0(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && gi(t, e);
  }
  function oa(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (oa = function (i) {
        if (i === null || !C0(i)) return i;
        if (typeof i != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof e < "u") {
          if (e.has(i)) return e.get(i);
          e.set(i, n);
        }
        function n() {
          return vn(i, arguments, Yt(this).constructor);
        }
        return (
          (n.prototype = Object.create(i.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          gi(n, i)
        );
      }),
      oa(t)
    );
  }
  function S0() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function vn(t, e, r) {
    return (
      S0()
        ? (vn = Reflect.construct)
        : (vn = function (n, s, a) {
            var u = [null];
            u.push.apply(u, s);
            var c = Function.bind.apply(n, u),
              m = new c();
            return a && gi(m, a.prototype), m;
          }),
      vn.apply(null, arguments)
    );
  }
  function C0(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  }
  function gi(t, e) {
    return (
      (gi =
        Object.setPrototypeOf ||
        function (i, n) {
          return (i.__proto__ = n), i;
        }),
      gi(t, e)
    );
  }
  function Yt(t) {
    return (
      (Yt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      Yt(t)
    );
  }
  function pt(t) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (pt = function (r) {
            return typeof r;
          })
        : (pt = function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
      pt(t)
    );
  }
  var F0 = qr(),
    ua = F0.inspect,
    w0 = sa(),
    _0 = w0.codes.ERR_INVALID_ARG_TYPE;
  function Hl(t, e, r) {
    return (
      (r === void 0 || r > t.length) && (r = t.length),
      t.substring(r - e.length, r) === e
    );
  }
  function B0(t, e) {
    if (((e = Math.floor(e)), t.length == 0 || e == 0)) return "";
    var r = t.length * e;
    for (e = Math.floor(Math.log(e) / Math.log(2)); e; ) (t += t), e--;
    return (t += t.substring(0, r - t.length)), t;
  }
  var Ct = "",
    di = "",
    mi = "",
    Me = "",
    dr = {
      deepStrictEqual: "Expected values to be strictly deep-equal:",
      strictEqual: "Expected values to be strictly equal:",
      strictEqualObject:
        'Expected "actual" to be reference-equal to "expected":',
      deepEqual: "Expected values to be loosely deep-equal:",
      equal: "Expected values to be loosely equal:",
      notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
      notStrictEqual: 'Expected "actual" to be strictly unequal to:',
      notStrictEqualObject:
        'Expected "actual" not to be reference-equal to "expected":',
      notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
      notEqual: 'Expected "actual" to be loosely unequal to:',
      notIdentical: "Values identical but not reference-equal:",
    },
    k0 = 10;
  function Kl(t) {
    var e = Object.keys(t),
      r = Object.create(Object.getPrototypeOf(t));
    return (
      e.forEach(function (i) {
        r[i] = t[i];
      }),
      Object.defineProperty(r, "message", { value: t.message }),
      r
    );
  }
  function yi(t) {
    return ua(t, {
      compact: !1,
      customInspect: !1,
      depth: 1e3,
      maxArrayLength: 1 / 0,
      showHidden: !1,
      breakLength: 1 / 0,
      showProxy: !1,
      sorted: !0,
      getters: !0,
    });
  }
  function I0(t, e, r) {
    var i = "",
      n = "",
      s = 0,
      a = "",
      u = !1,
      c = yi(t),
      m = c.split(`
`),
      d = yi(e).split(`
`),
      E = 0,
      y = "";
    if (
      (r === "strictEqual" &&
        pt(t) === "object" &&
        pt(e) === "object" &&
        t !== null &&
        e !== null &&
        (r = "strictEqualObject"),
      m.length === 1 && d.length === 1 && m[0] !== d[0])
    ) {
      var x = m[0].length + d[0].length;
      if (x <= k0) {
        if (
          (pt(t) !== "object" || t === null) &&
          (pt(e) !== "object" || e === null) &&
          (t !== 0 || e !== 0)
        )
          return (
            "".concat(
              dr[r],
              `

`
            ) +
            "".concat(m[0], " !== ").concat(
              d[0],
              `
`
            )
          );
      } else if (r !== "strictEqualObject") {
        var b =
          process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
        if (x < b) {
          for (; m[0][E] === d[0][E]; ) E++;
          E > 2 &&
            ((y = `
  `.concat(B0(" ", E), "^")),
            (E = 0));
        }
      }
    }
    for (
      var w = m[m.length - 1], _ = d[d.length - 1];
      w === _ &&
      (E++ < 2
        ? (a = `
  `
            .concat(w)
            .concat(a))
        : (i = w),
      m.pop(),
      d.pop(),
      !(m.length === 0 || d.length === 0));

    )
      (w = m[m.length - 1]), (_ = d[d.length - 1]);
    var O = Math.max(m.length, d.length);
    if (O === 0) {
      var L = c.split(`
`);
      if (L.length > 30)
        for (L[26] = "".concat(Ct, "...").concat(Me); L.length > 27; ) L.pop();
      return ""
        .concat(
          dr.notIdentical,
          `

`
        )
        .concat(
          L.join(`
`),
          `
`
        );
    }
    E > 3 &&
      ((a = `
`
        .concat(Ct, "...")
        .concat(Me)
        .concat(a)),
      (u = !0)),
      i !== "" &&
        ((a = `
  `
          .concat(i)
          .concat(a)),
        (i = ""));
    var R = 0,
      C =
        dr[r] +
        `
`
          .concat(di, "+ actual")
          .concat(Me, " ")
          .concat(mi, "- expected")
          .concat(Me),
      v = " ".concat(Ct, "...").concat(Me, " Lines skipped");
    for (E = 0; E < O; E++) {
      var S = E - s;
      if (m.length < E + 1)
        S > 1 &&
          E > 2 &&
          (S > 4
            ? ((n += `
`
                .concat(Ct, "...")
                .concat(Me)),
              (u = !0))
            : S > 3 &&
              ((n += `
  `.concat(d[E - 2])),
              R++),
          (n += `
  `.concat(d[E - 1])),
          R++),
          (s = E),
          (i += `
`
            .concat(mi, "-")
            .concat(Me, " ")
            .concat(d[E])),
          R++;
      else if (d.length < E + 1)
        S > 1 &&
          E > 2 &&
          (S > 4
            ? ((n += `
`
                .concat(Ct, "...")
                .concat(Me)),
              (u = !0))
            : S > 3 &&
              ((n += `
  `.concat(m[E - 2])),
              R++),
          (n += `
  `.concat(m[E - 1])),
          R++),
          (s = E),
          (n += `
`
            .concat(di, "+")
            .concat(Me, " ")
            .concat(m[E])),
          R++;
      else {
        var A = d[E],
          T = m[E],
          P = T !== A && (!Hl(T, ",") || T.slice(0, -1) !== A);
        P && Hl(A, ",") && A.slice(0, -1) === T && ((P = !1), (T += ",")),
          P
            ? (S > 1 &&
                E > 2 &&
                (S > 4
                  ? ((n += `
`
                      .concat(Ct, "...")
                      .concat(Me)),
                    (u = !0))
                  : S > 3 &&
                    ((n += `
  `.concat(m[E - 2])),
                    R++),
                (n += `
  `.concat(m[E - 1])),
                R++),
              (s = E),
              (n += `
`
                .concat(di, "+")
                .concat(Me, " ")
                .concat(T)),
              (i += `
`
                .concat(mi, "-")
                .concat(Me, " ")
                .concat(A)),
              (R += 2))
            : ((n += i),
              (i = ""),
              (S === 1 || E === 0) &&
                ((n += `
  `.concat(T)),
                R++));
      }
      if (R > 20 && E < O - 2)
        return (
          ""
            .concat(C)
            .concat(
              v,
              `
`
            )
            .concat(
              n,
              `
`
            )
            .concat(Ct, "...")
            .concat(Me)
            .concat(
              i,
              `
`
            ) + "".concat(Ct, "...").concat(Me)
        );
    }
    return ""
      .concat(C)
      .concat(
        u ? v : "",
        `
`
      )
      .concat(n)
      .concat(i)
      .concat(a)
      .concat(y);
  }
  var N0 = (function (t) {
    D0(e, t);
    function e(r) {
      var i;
      if ((A0(this, e), pt(r) !== "object" || r === null))
        throw new _0("options", "Object", r);
      var n = r.message,
        s = r.operator,
        a = r.stackStartFn,
        u = r.actual,
        c = r.expected,
        m = Error.stackTraceLimit;
      if (((Error.stackTraceLimit = 0), n != null))
        i = Wr(this, Yt(e).call(this, String(n)));
      else if (
        (process.stderr &&
          process.stderr.isTTY &&
          (process.stderr &&
          process.stderr.getColorDepth &&
          process.stderr.getColorDepth() !== 1
            ? ((Ct = "\x1B[34m"),
              (di = "\x1B[32m"),
              (Me = "\x1B[39m"),
              (mi = "\x1B[31m"))
            : ((Ct = ""), (di = ""), (Me = ""), (mi = ""))),
        pt(u) === "object" &&
          u !== null &&
          pt(c) === "object" &&
          c !== null &&
          "stack" in u &&
          u instanceof Error &&
          "stack" in c &&
          c instanceof Error &&
          ((u = Kl(u)), (c = Kl(c))),
        s === "deepStrictEqual" || s === "strictEqual")
      )
        i = Wr(this, Yt(e).call(this, I0(u, c, s)));
      else if (s === "notDeepStrictEqual" || s === "notStrictEqual") {
        var d = dr[s],
          E = yi(u).split(`
`);
        if (
          (s === "notStrictEqual" &&
            pt(u) === "object" &&
            u !== null &&
            (d = dr.notStrictEqualObject),
          E.length > 30)
        )
          for (E[26] = "".concat(Ct, "...").concat(Me); E.length > 27; )
            E.pop();
        E.length === 1
          ? (i = Wr(this, Yt(e).call(this, "".concat(d, " ").concat(E[0]))))
          : (i = Wr(
              this,
              Yt(e).call(
                this,
                ""
                  .concat(
                    d,
                    `

`
                  )
                  .concat(
                    E.join(`
`),
                    `
`
                  )
              )
            ));
      } else {
        var y = yi(u),
          x = "",
          b = dr[s];
        s === "notDeepEqual" || s === "notEqual"
          ? ((y = ""
              .concat(
                dr[s],
                `

`
              )
              .concat(y)),
            y.length > 1024 && (y = "".concat(y.slice(0, 1021), "...")))
          : ((x = "".concat(yi(c))),
            y.length > 512 && (y = "".concat(y.slice(0, 509), "...")),
            x.length > 512 && (x = "".concat(x.slice(0, 509), "...")),
            s === "deepEqual" || s === "equal"
              ? (y = ""
                  .concat(
                    b,
                    `

`
                  )
                  .concat(
                    y,
                    `

should equal

`
                  ))
              : (x = " ".concat(s, " ").concat(x))),
          (i = Wr(this, Yt(e).call(this, "".concat(y).concat(x))));
      }
      return (
        (Error.stackTraceLimit = m),
        (i.generatedMessage = !n),
        Object.defineProperty(aa(i), "name", {
          value: "AssertionError [ERR_ASSERTION]",
          enumerable: !1,
          writable: !0,
          configurable: !0,
        }),
        (i.code = "ERR_ASSERTION"),
        (i.actual = u),
        (i.expected = c),
        (i.operator = s),
        Error.captureStackTrace && Error.captureStackTrace(aa(i), a),
        i.stack,
        (i.name = "AssertionError"),
        Wr(i)
      );
    }
    return (
      v0(e, [
        {
          key: "toString",
          value: function () {
            return ""
              .concat(this.name, " [")
              .concat(this.code, "]: ")
              .concat(this.message);
          },
        },
        {
          key: ua.custom,
          value: function (i, n) {
            return ua(this, x0({}, n, { customInspect: !1, depth: 0 }));
          },
        },
      ]),
      e
    );
  })(oa(Error));
  Yl.exports = N0;
});
var Zl = j((zy, Xl) => {
  "use strict";
  function Jl(t, e) {
    if (t == null)
      throw new TypeError("Cannot convert first argument to object");
    for (var r = Object(t), i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      if (n != null)
        for (var s = Object.keys(Object(n)), a = 0, u = s.length; a < u; a++) {
          var c = s[a],
            m = Object.getOwnPropertyDescriptor(n, c);
          m !== void 0 && m.enumerable && (r[c] = n[c]);
        }
    }
    return r;
  }
  function T0() {
    Object.assign ||
      Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: Jl,
      });
  }
  Xl.exports = { assign: Jl, polyfill: T0 };
});
var la = j(($y, tc) => {
  "use strict";
  var ec = Object.prototype.toString;
  tc.exports = function (e) {
    var r = ec.call(e),
      i = r === "[object Arguments]";
    return (
      i ||
        (i =
          r !== "[object Array]" &&
          e !== null &&
          typeof e == "object" &&
          typeof e.length == "number" &&
          e.length >= 0 &&
          ec.call(e.callee) === "[object Function]"),
      i
    );
  };
});
var cc = j((Hy, lc) => {
  "use strict";
  var uc;
  Object.keys ||
    ((Ei = Object.prototype.hasOwnProperty),
    (ca = Object.prototype.toString),
    (rc = la()),
    (fa = Object.prototype.propertyIsEnumerable),
    (ic = !fa.call({ toString: null }, "toString")),
    (nc = fa.call(function () {}, "prototype")),
    (xi = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor",
    ]),
    (Dn = function (t) {
      var e = t.constructor;
      return e && e.prototype === t;
    }),
    (sc = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0,
    }),
    (ac = (function () {
      if (typeof window > "u") return !1;
      for (var t in window)
        try {
          if (
            !sc["$" + t] &&
            Ei.call(window, t) &&
            window[t] !== null &&
            typeof window[t] == "object"
          )
            try {
              Dn(window[t]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    })()),
    (oc = function (t) {
      if (typeof window > "u" || !ac) return Dn(t);
      try {
        return Dn(t);
      } catch {
        return !1;
      }
    }),
    (uc = function (e) {
      var r = e !== null && typeof e == "object",
        i = ca.call(e) === "[object Function]",
        n = rc(e),
        s = r && ca.call(e) === "[object String]",
        a = [];
      if (!r && !i && !n)
        throw new TypeError("Object.keys called on a non-object");
      var u = nc && i;
      if (s && e.length > 0 && !Ei.call(e, 0))
        for (var c = 0; c < e.length; ++c) a.push(String(c));
      if (n && e.length > 0)
        for (var m = 0; m < e.length; ++m) a.push(String(m));
      else
        for (var d in e)
          !(u && d === "prototype") && Ei.call(e, d) && a.push(String(d));
      if (ic)
        for (var E = oc(e), y = 0; y < xi.length; ++y)
          !(E && xi[y] === "constructor") && Ei.call(e, xi[y]) && a.push(xi[y]);
      return a;
    }));
  var Ei, ca, rc, fa, ic, nc, xi, Dn, sc, ac, oc;
  lc.exports = uc;
});
var dc = j((Ky, hc) => {
  "use strict";
  var P0 = Array.prototype.slice,
    O0 = la(),
    fc = Object.keys,
    Sn = fc
      ? function (e) {
          return fc(e);
        }
      : cc(),
    pc = Object.keys;
  Sn.shim = function () {
    if (Object.keys) {
      var e = (function () {
        var r = Object.keys(arguments);
        return r && r.length === arguments.length;
      })(1, 2);
      e ||
        (Object.keys = function (i) {
          return O0(i) ? pc(P0.call(i)) : pc(i);
        });
    } else Object.keys = Sn;
    return Object.keys || Sn;
  };
  hc.exports = Sn;
});
var bi = j((Yy, Ec) => {
  "use strict";
  var L0 = dc(),
    R0 = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
    M0 = Object.prototype.toString,
    V0 = Array.prototype.concat,
    mc = Ns(),
    G0 = function (t) {
      return typeof t == "function" && M0.call(t) === "[object Function]";
    },
    yc = en()(),
    q0 = function (t, e, r, i) {
      if (e in t) {
        if (i === !0) {
          if (t[e] === r) return;
        } else if (!G0(i) || !i()) return;
      }
      yc ? mc(t, e, r, !0) : mc(t, e, r);
    },
    gc = function (t, e) {
      var r = arguments.length > 2 ? arguments[2] : {},
        i = L0(e);
      R0 && (i = V0.call(i, Object.getOwnPropertySymbols(e)));
      for (var n = 0; n < i.length; n += 1) q0(t, i[n], e[i[n]], r[i[n]]);
    };
  gc.supportsDescriptors = !!yc;
  Ec.exports = gc;
});
var pa = j((Qy, bc) => {
  "use strict";
  var xc = function (t) {
    return t !== t;
  };
  bc.exports = function (e, r) {
    return e === 0 && r === 0
      ? 1 / e === 1 / r
      : !!(e === r || (xc(e) && xc(r)));
  };
});
var ha = j((Jy, Ac) => {
  "use strict";
  var j0 = pa();
  Ac.exports = function () {
    return typeof Object.is == "function" ? Object.is : j0;
  };
});
var Dc = j((Xy, vc) => {
  "use strict";
  var U0 = ha(),
    W0 = bi();
  vc.exports = function () {
    var e = U0();
    return (
      W0(
        Object,
        { is: e },
        {
          is: function () {
            return Object.is !== e;
          },
        }
      ),
      e
    );
  };
});
var da = j((Zy, Fc) => {
  "use strict";
  var z0 = bi(),
    $0 = ui(),
    H0 = pa(),
    Sc = ha(),
    K0 = Dc(),
    Cc = $0(Sc(), Object);
  z0(Cc, { getPolyfill: Sc, implementation: H0, shim: K0 });
  Fc.exports = Cc;
});
var ma = j((eg, wc) => {
  "use strict";
  wc.exports = function (e) {
    return e !== e;
  };
});
var ya = j((tg, _c) => {
  "use strict";
  var Y0 = ma();
  _c.exports = function () {
    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")
      ? Number.isNaN
      : Y0;
  };
});
var kc = j((rg, Bc) => {
  "use strict";
  var Q0 = bi(),
    J0 = ya();
  Bc.exports = function () {
    var e = J0();
    return (
      Q0(
        Number,
        { isNaN: e },
        {
          isNaN: function () {
            return Number.isNaN !== e;
          },
        }
      ),
      e
    );
  };
});
var Pc = j((ig, Tc) => {
  "use strict";
  var X0 = ui(),
    Z0 = bi(),
    em = ma(),
    Ic = ya(),
    tm = kc(),
    Nc = X0(Ic(), Number);
  Z0(Nc, { getPolyfill: Ic, implementation: em, shim: tm });
  Tc.exports = Nc;
});
var Zc = j((ng, Xc) => {
  "use strict";
  function Oc(t, e) {
    return nm(t) || im(t, e) || rm();
  }
  function rm() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function im(t, e) {
    var r = [],
      i = !0,
      n = !1,
      s = void 0;
    try {
      for (
        var a = t[Symbol.iterator](), u;
        !(i = (u = a.next()).done) && (r.push(u.value), !(e && r.length === e));
        i = !0
      );
    } catch (c) {
      (n = !0), (s = c);
    } finally {
      try {
        !i && a.return != null && a.return();
      } finally {
        if (n) throw s;
      }
    }
    return r;
  }
  function nm(t) {
    if (Array.isArray(t)) return t;
  }
  function tt(t) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (tt = function (r) {
            return typeof r;
          })
        : (tt = function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
      tt(t)
    );
  }
  var sm = /a/g.flags !== void 0,
    In = function (e) {
      var r = [];
      return (
        e.forEach(function (i) {
          return r.push(i);
        }),
        r
      );
    },
    Lc = function (e) {
      var r = [];
      return (
        e.forEach(function (i, n) {
          return r.push([n, i]);
        }),
        r
      );
    },
    Hc = Object.is ? Object.is : da(),
    Bn = Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols
      : function () {
          return [];
        },
    ga = Number.isNaN ? Number.isNaN : Pc();
  function xa(t) {
    return t.call.bind(t);
  }
  var vi = xa(Object.prototype.hasOwnProperty),
    kn = xa(Object.prototype.propertyIsEnumerable),
    Rc = xa(Object.prototype.toString),
    Ye = qr().types,
    am = Ye.isAnyArrayBuffer,
    om = Ye.isArrayBufferView,
    Mc = Ye.isDate,
    Cn = Ye.isMap,
    Vc = Ye.isRegExp,
    Fn = Ye.isSet,
    um = Ye.isNativeError,
    lm = Ye.isBoxedPrimitive,
    Gc = Ye.isNumberObject,
    qc = Ye.isStringObject,
    jc = Ye.isBooleanObject,
    Uc = Ye.isBigIntObject,
    cm = Ye.isSymbolObject,
    fm = Ye.isFloat32Array,
    pm = Ye.isFloat64Array;
  function hm(t) {
    if (t.length === 0 || t.length > 10) return !0;
    for (var e = 0; e < t.length; e++) {
      var r = t.charCodeAt(e);
      if (r < 48 || r > 57) return !0;
    }
    return t.length === 10 && t >= Math.pow(2, 32);
  }
  function wn(t) {
    return Object.keys(t)
      .filter(hm)
      .concat(Bn(t).filter(Object.prototype.propertyIsEnumerable.bind(t)));
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */ function Kc(t, e) {
    if (t === e) return 0;
    for (var r = t.length, i = e.length, n = 0, s = Math.min(r, i); n < s; ++n)
      if (t[n] !== e[n]) {
        (r = t[n]), (i = e[n]);
        break;
      }
    return r < i ? -1 : i < r ? 1 : 0;
  }
  var _n = void 0,
    dm = !0,
    mm = !1,
    Ea = 0,
    ba = 1,
    Yc = 2,
    Qc = 3;
  function ym(t, e) {
    return sm
      ? t.source === e.source && t.flags === e.flags
      : RegExp.prototype.toString.call(t) === RegExp.prototype.toString.call(e);
  }
  function gm(t, e) {
    if (t.byteLength !== e.byteLength) return !1;
    for (var r = 0; r < t.byteLength; r++) if (t[r] !== e[r]) return !1;
    return !0;
  }
  function Em(t, e) {
    return t.byteLength !== e.byteLength
      ? !1
      : Kc(
          new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
          new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
        ) === 0;
  }
  function xm(t, e) {
    return (
      t.byteLength === e.byteLength &&
      Kc(new Uint8Array(t), new Uint8Array(e)) === 0
    );
  }
  function bm(t, e) {
    return Gc(t)
      ? Gc(e) &&
          Hc(Number.prototype.valueOf.call(t), Number.prototype.valueOf.call(e))
      : qc(t)
      ? qc(e) &&
        String.prototype.valueOf.call(t) === String.prototype.valueOf.call(e)
      : jc(t)
      ? jc(e) &&
        Boolean.prototype.valueOf.call(t) === Boolean.prototype.valueOf.call(e)
      : Uc(t)
      ? Uc(e) &&
        BigInt.prototype.valueOf.call(t) === BigInt.prototype.valueOf.call(e)
      : cm(e) &&
        Symbol.prototype.valueOf.call(t) === Symbol.prototype.valueOf.call(e);
  }
  function ht(t, e, r, i) {
    if (t === e) return t !== 0 ? !0 : r ? Hc(t, e) : !0;
    if (r) {
      if (tt(t) !== "object") return typeof t == "number" && ga(t) && ga(e);
      if (
        tt(e) !== "object" ||
        t === null ||
        e === null ||
        Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)
      )
        return !1;
    } else {
      if (t === null || tt(t) !== "object")
        return e === null || tt(e) !== "object" ? t == e : !1;
      if (e === null || tt(e) !== "object") return !1;
    }
    var n = Rc(t),
      s = Rc(e);
    if (n !== s) return !1;
    if (Array.isArray(t)) {
      if (t.length !== e.length) return !1;
      var a = wn(t, _n),
        u = wn(e, _n);
      return a.length !== u.length ? !1 : Ai(t, e, r, i, ba, a);
    }
    if (n === "[object Object]" && ((!Cn(t) && Cn(e)) || (!Fn(t) && Fn(e))))
      return !1;
    if (Mc(t)) {
      if (
        !Mc(e) ||
        Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e)
      )
        return !1;
    } else if (Vc(t)) {
      if (!Vc(e) || !ym(t, e)) return !1;
    } else if (um(t) || t instanceof Error) {
      if (t.message !== e.message || t.name !== e.name) return !1;
    } else if (om(t)) {
      if (!r && (fm(t) || pm(t))) {
        if (!gm(t, e)) return !1;
      } else if (!Em(t, e)) return !1;
      var c = wn(t, _n),
        m = wn(e, _n);
      return c.length !== m.length ? !1 : Ai(t, e, r, i, Ea, c);
    } else {
      if (Fn(t)) return !Fn(e) || t.size !== e.size ? !1 : Ai(t, e, r, i, Yc);
      if (Cn(t)) return !Cn(e) || t.size !== e.size ? !1 : Ai(t, e, r, i, Qc);
      if (am(t)) {
        if (!xm(t, e)) return !1;
      } else if (lm(t) && !bm(t, e)) return !1;
    }
    return Ai(t, e, r, i, Ea);
  }
  function Wc(t, e) {
    return e.filter(function (r) {
      return kn(t, r);
    });
  }
  function Ai(t, e, r, i, n, s) {
    if (arguments.length === 5) {
      s = Object.keys(t);
      var a = Object.keys(e);
      if (s.length !== a.length) return !1;
    }
    for (var u = 0; u < s.length; u++) if (!vi(e, s[u])) return !1;
    if (r && arguments.length === 5) {
      var c = Bn(t);
      if (c.length !== 0) {
        var m = 0;
        for (u = 0; u < c.length; u++) {
          var d = c[u];
          if (kn(t, d)) {
            if (!kn(e, d)) return !1;
            s.push(d), m++;
          } else if (kn(e, d)) return !1;
        }
        var E = Bn(e);
        if (c.length !== E.length && Wc(e, E).length !== m) return !1;
      } else {
        var y = Bn(e);
        if (y.length !== 0 && Wc(e, y).length !== 0) return !1;
      }
    }
    if (
      s.length === 0 &&
      (n === Ea || (n === ba && t.length === 0) || t.size === 0)
    )
      return !0;
    if (i === void 0) i = { val1: new Map(), val2: new Map(), position: 0 };
    else {
      var x = i.val1.get(t);
      if (x !== void 0) {
        var b = i.val2.get(e);
        if (b !== void 0) return x === b;
      }
      i.position++;
    }
    i.val1.set(t, i.position), i.val2.set(e, i.position);
    var w = Cm(t, e, r, s, i, n);
    return i.val1.delete(t), i.val2.delete(e), w;
  }
  function zc(t, e, r, i) {
    for (var n = In(t), s = 0; s < n.length; s++) {
      var a = n[s];
      if (ht(e, a, r, i)) return t.delete(a), !0;
    }
    return !1;
  }
  function Jc(t) {
    switch (tt(t)) {
      case "undefined":
        return null;
      case "object":
        return;
      case "symbol":
        return !1;
      case "string":
        t = +t;
      case "number":
        if (ga(t)) return !1;
    }
    return !0;
  }
  function Am(t, e, r) {
    var i = Jc(r);
    return i ?? (e.has(i) && !t.has(i));
  }
  function vm(t, e, r, i, n) {
    var s = Jc(r);
    if (s != null) return s;
    var a = e.get(s);
    return (a === void 0 && !e.has(s)) || !ht(i, a, !1, n)
      ? !1
      : !t.has(s) && ht(i, a, !1, n);
  }
  function Dm(t, e, r, i) {
    for (var n = null, s = In(t), a = 0; a < s.length; a++) {
      var u = s[a];
      if (tt(u) === "object" && u !== null)
        n === null && (n = new Set()), n.add(u);
      else if (!e.has(u)) {
        if (r || !Am(t, e, u)) return !1;
        n === null && (n = new Set()), n.add(u);
      }
    }
    if (n !== null) {
      for (var c = In(e), m = 0; m < c.length; m++) {
        var d = c[m];
        if (tt(d) === "object" && d !== null) {
          if (!zc(n, d, r, i)) return !1;
        } else if (!r && !t.has(d) && !zc(n, d, r, i)) return !1;
      }
      return n.size === 0;
    }
    return !0;
  }
  function $c(t, e, r, i, n, s) {
    for (var a = In(t), u = 0; u < a.length; u++) {
      var c = a[u];
      if (ht(r, c, n, s) && ht(i, e.get(c), n, s)) return t.delete(c), !0;
    }
    return !1;
  }
  function Sm(t, e, r, i) {
    for (var n = null, s = Lc(t), a = 0; a < s.length; a++) {
      var u = Oc(s[a], 2),
        c = u[0],
        m = u[1];
      if (tt(c) === "object" && c !== null)
        n === null && (n = new Set()), n.add(c);
      else {
        var d = e.get(c);
        if ((d === void 0 && !e.has(c)) || !ht(m, d, r, i)) {
          if (r || !vm(t, e, c, m, i)) return !1;
          n === null && (n = new Set()), n.add(c);
        }
      }
    }
    if (n !== null) {
      for (var E = Lc(e), y = 0; y < E.length; y++) {
        var x = Oc(E[y], 2),
          c = x[0],
          b = x[1];
        if (tt(c) === "object" && c !== null) {
          if (!$c(n, t, c, b, r, i)) return !1;
        } else if (
          !r &&
          (!t.has(c) || !ht(t.get(c), b, !1, i)) &&
          !$c(n, t, c, b, !1, i)
        )
          return !1;
      }
      return n.size === 0;
    }
    return !0;
  }
  function Cm(t, e, r, i, n, s) {
    var a = 0;
    if (s === Yc) {
      if (!Dm(t, e, r, n)) return !1;
    } else if (s === Qc) {
      if (!Sm(t, e, r, n)) return !1;
    } else if (s === ba)
      for (; a < t.length; a++)
        if (vi(t, a)) {
          if (!vi(e, a) || !ht(t[a], e[a], r, n)) return !1;
        } else {
          if (vi(e, a)) return !1;
          for (var u = Object.keys(t); a < u.length; a++) {
            var c = u[a];
            if (!vi(e, c) || !ht(t[c], e[c], r, n)) return !1;
          }
          return u.length === Object.keys(e).length;
        }
    for (a = 0; a < i.length; a++) {
      var m = i[a];
      if (!ht(t[m], e[m], r, n)) return !1;
    }
    return !0;
  }
  function Fm(t, e) {
    return ht(t, e, mm);
  }
  function wm(t, e) {
    return ht(t, e, dm);
  }
  Xc.exports = { isDeepEqual: Fm, isDeepStrictEqual: wm };
});
var hr = j((sg, yf) => {
  "use strict";
  function Qt(t) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (Qt = function (r) {
            return typeof r;
          })
        : (Qt = function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
      Qt(t)
    );
  }
  function _m(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var Bm = sa(),
    Si = Bm.codes,
    ef = Si.ERR_AMBIGUOUS_ARGUMENT,
    Di = Si.ERR_INVALID_ARG_TYPE,
    km = Si.ERR_INVALID_ARG_VALUE,
    Im = Si.ERR_INVALID_RETURN_VALUE,
    Xt = Si.ERR_MISSING_ARGS,
    mr = Ql(),
    Nm = qr(),
    Tm = Nm.inspect,
    sf = qr().types,
    Pm = sf.isPromise,
    Aa = sf.isRegExp,
    Om = Object.assign ? Object.assign : Zl().assign,
    af = Object.is ? Object.is : da(),
    Jt,
    Nn;
  function Ci() {
    var t = Zc();
    (Jt = t.isDeepEqual), (Nn = t.isDeepStrictEqual);
  }
  var tf = !1,
    xe = (yf.exports = va),
    Tn = {};
  function Ft(t) {
    throw t.message instanceof Error ? t.message : new mr(t);
  }
  function of(t, e, r, i, n) {
    var s = arguments.length,
      a;
    if (s === 0) a = "Failed";
    else if (s === 1) (r = t), (t = void 0);
    else {
      if (tf === !1) {
        tf = !0;
        var u = process.emitWarning
          ? process.emitWarning
          : console.warn.bind(console);
        u(
          "assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.",
          "DeprecationWarning",
          "DEP0094"
        );
      }
      s === 2 && (i = "!=");
    }
    if (r instanceof Error) throw r;
    var c = {
      actual: t,
      expected: e,
      operator: i === void 0 ? "fail" : i,
      stackStartFn: n || of,
    };
    r !== void 0 && (c.message = r);
    var m = new mr(c);
    throw (a && ((m.message = a), (m.generatedMessage = !0)), m);
  }
  xe.fail = of;
  xe.AssertionError = mr;
  function uf(t, e, r, i) {
    if (!r) {
      var n = !1;
      if (e === 0) (n = !0), (i = "No value argument passed to `assert.ok()`");
      else if (i instanceof Error) throw i;
      var s = new mr({
        actual: r,
        expected: !0,
        message: i,
        operator: "==",
        stackStartFn: t,
      });
      throw ((s.generatedMessage = n), s);
    }
  }
  function va() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    uf.apply(void 0, [va, e.length].concat(e));
  }
  xe.ok = va;
  xe.equal = function t(e, r, i) {
    if (arguments.length < 2) throw new Xt("actual", "expected");
    e != r &&
      Ft({
        actual: e,
        expected: r,
        message: i,
        operator: "==",
        stackStartFn: t,
      });
  };
  xe.notEqual = function t(e, r, i) {
    if (arguments.length < 2) throw new Xt("actual", "expected");
    e == r &&
      Ft({
        actual: e,
        expected: r,
        message: i,
        operator: "!=",
        stackStartFn: t,
      });
  };
  xe.deepEqual = function t(e, r, i) {
    if (arguments.length < 2) throw new Xt("actual", "expected");
    Jt === void 0 && Ci(),
      Jt(e, r) ||
        Ft({
          actual: e,
          expected: r,
          message: i,
          operator: "deepEqual",
          stackStartFn: t,
        });
  };
  xe.notDeepEqual = function t(e, r, i) {
    if (arguments.length < 2) throw new Xt("actual", "expected");
    Jt === void 0 && Ci(),
      Jt(e, r) &&
        Ft({
          actual: e,
          expected: r,
          message: i,
          operator: "notDeepEqual",
          stackStartFn: t,
        });
  };
  xe.deepStrictEqual = function t(e, r, i) {
    if (arguments.length < 2) throw new Xt("actual", "expected");
    Jt === void 0 && Ci(),
      Nn(e, r) ||
        Ft({
          actual: e,
          expected: r,
          message: i,
          operator: "deepStrictEqual",
          stackStartFn: t,
        });
  };
  xe.notDeepStrictEqual = lf;
  function lf(t, e, r) {
    if (arguments.length < 2) throw new Xt("actual", "expected");
    Jt === void 0 && Ci(),
      Nn(t, e) &&
        Ft({
          actual: t,
          expected: e,
          message: r,
          operator: "notDeepStrictEqual",
          stackStartFn: lf,
        });
  }
  xe.strictEqual = function t(e, r, i) {
    if (arguments.length < 2) throw new Xt("actual", "expected");
    af(e, r) ||
      Ft({
        actual: e,
        expected: r,
        message: i,
        operator: "strictEqual",
        stackStartFn: t,
      });
  };
  xe.notStrictEqual = function t(e, r, i) {
    if (arguments.length < 2) throw new Xt("actual", "expected");
    af(e, r) &&
      Ft({
        actual: e,
        expected: r,
        message: i,
        operator: "notStrictEqual",
        stackStartFn: t,
      });
  };
  var rf = function t(e, r, i) {
    var n = this;
    _m(this, t),
      r.forEach(function (s) {
        s in e &&
          (i !== void 0 &&
          typeof i[s] == "string" &&
          Aa(e[s]) &&
          e[s].test(i[s])
            ? (n[s] = i[s])
            : (n[s] = e[s]));
      });
  };
  function Lm(t, e, r, i, n, s) {
    if (!(r in t) || !Nn(t[r], e[r])) {
      if (!i) {
        var a = new rf(t, n),
          u = new rf(e, n, t),
          c = new mr({
            actual: a,
            expected: u,
            operator: "deepStrictEqual",
            stackStartFn: s,
          });
        throw ((c.actual = t), (c.expected = e), (c.operator = s.name), c);
      }
      Ft({
        actual: t,
        expected: e,
        message: i,
        operator: s.name,
        stackStartFn: s,
      });
    }
  }
  function cf(t, e, r, i) {
    if (typeof e != "function") {
      if (Aa(e)) return e.test(t);
      if (arguments.length === 2)
        throw new Di("expected", ["Function", "RegExp"], e);
      if (Qt(t) !== "object" || t === null) {
        var n = new mr({
          actual: t,
          expected: e,
          message: r,
          operator: "deepStrictEqual",
          stackStartFn: i,
        });
        throw ((n.operator = i.name), n);
      }
      var s = Object.keys(e);
      if (e instanceof Error) s.push("name", "message");
      else if (s.length === 0)
        throw new km("error", e, "may not be an empty object");
      return (
        Jt === void 0 && Ci(),
        s.forEach(function (a) {
          (typeof t[a] == "string" && Aa(e[a]) && e[a].test(t[a])) ||
            Lm(t, e, a, r, s, i);
        }),
        !0
      );
    }
    return e.prototype !== void 0 && t instanceof e
      ? !0
      : Error.isPrototypeOf(e)
      ? !1
      : e.call({}, t) === !0;
  }
  function ff(t) {
    if (typeof t != "function") throw new Di("fn", "Function", t);
    try {
      t();
    } catch (e) {
      return e;
    }
    return Tn;
  }
  function nf(t) {
    return (
      Pm(t) ||
      (t !== null &&
        Qt(t) === "object" &&
        typeof t.then == "function" &&
        typeof t.catch == "function")
    );
  }
  function pf(t) {
    return Promise.resolve().then(function () {
      var e;
      if (typeof t == "function") {
        if (((e = t()), !nf(e)))
          throw new Im("instance of Promise", "promiseFn", e);
      } else if (nf(t)) e = t;
      else throw new Di("promiseFn", ["Function", "Promise"], t);
      return Promise.resolve()
        .then(function () {
          return e;
        })
        .then(function () {
          return Tn;
        })
        .catch(function (r) {
          return r;
        });
    });
  }
  function hf(t, e, r, i) {
    if (typeof r == "string") {
      if (arguments.length === 4)
        throw new Di("error", ["Object", "Error", "Function", "RegExp"], r);
      if (Qt(e) === "object" && e !== null) {
        if (e.message === r)
          throw new ef(
            "error/message",
            'The error message "'.concat(
              e.message,
              '" is identical to the message.'
            )
          );
      } else if (e === r)
        throw new ef(
          "error/message",
          'The error "'.concat(e, '" is identical to the message.')
        );
      (i = r), (r = void 0);
    } else if (r != null && Qt(r) !== "object" && typeof r != "function")
      throw new Di("error", ["Object", "Error", "Function", "RegExp"], r);
    if (e === Tn) {
      var n = "";
      r && r.name && (n += " (".concat(r.name, ")")),
        (n += i ? ": ".concat(i) : ".");
      var s = t.name === "rejects" ? "rejection" : "exception";
      Ft({
        actual: void 0,
        expected: r,
        operator: t.name,
        message: "Missing expected ".concat(s).concat(n),
        stackStartFn: t,
      });
    }
    if (r && !cf(e, r, i, t)) throw e;
  }
  function df(t, e, r, i) {
    if (e !== Tn) {
      if ((typeof r == "string" && ((i = r), (r = void 0)), !r || cf(e, r))) {
        var n = i ? ": ".concat(i) : ".",
          s = t.name === "doesNotReject" ? "rejection" : "exception";
        Ft({
          actual: e,
          expected: r,
          operator: t.name,
          message:
            "Got unwanted ".concat(s).concat(
              n,
              `
`
            ) + 'Actual message: "'.concat(e && e.message, '"'),
          stackStartFn: t,
        });
      }
      throw e;
    }
  }
  xe.throws = function t(e) {
    for (
      var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
      n < r;
      n++
    )
      i[n - 1] = arguments[n];
    hf.apply(void 0, [t, ff(e)].concat(i));
  };
  xe.rejects = function t(e) {
    for (
      var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
      n < r;
      n++
    )
      i[n - 1] = arguments[n];
    return pf(e).then(function (s) {
      return hf.apply(void 0, [t, s].concat(i));
    });
  };
  xe.doesNotThrow = function t(e) {
    for (
      var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
      n < r;
      n++
    )
      i[n - 1] = arguments[n];
    df.apply(void 0, [t, ff(e)].concat(i));
  };
  xe.doesNotReject = function t(e) {
    for (
      var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
      n < r;
      n++
    )
      i[n - 1] = arguments[n];
    return pf(e).then(function (s) {
      return df.apply(void 0, [t, s].concat(i));
    });
  };
  xe.ifError = function t(e) {
    if (e != null) {
      var r = "ifError got unwanted exception: ";
      Qt(e) === "object" && typeof e.message == "string"
        ? e.message.length === 0 && e.constructor
          ? (r += e.constructor.name)
          : (r += e.message)
        : (r += Tm(e));
      var i = new mr({
          actual: e,
          expected: null,
          operator: "ifError",
          message: r,
          stackStartFn: t,
        }),
        n = e.stack;
      if (typeof n == "string") {
        var s = n.split(`
`);
        s.shift();
        for (
          var a = i.stack.split(`
`),
            u = 0;
          u < s.length;
          u++
        ) {
          var c = a.indexOf(s[u]);
          if (c !== -1) {
            a = a.slice(0, c);
            break;
          }
        }
        i.stack = ""
          .concat(
            a.join(`
`),
            `
`
          )
          .concat(
            s.join(`
`)
          );
      }
      throw i;
    }
  };
  function mf() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    uf.apply(void 0, [mf, e.length].concat(e));
  }
  xe.strict = Om(mf, xe, {
    equal: xe.strictEqual,
    deepEqual: xe.deepStrictEqual,
    notEqual: xe.notStrictEqual,
    notDeepEqual: xe.notDeepStrictEqual,
  });
  xe.strict.strict = xe.strict;
});
var Fi = j((gf) => {
  (function t(e) {
    "use strict";
    var r, i, n, s, a, u;
    function c(C) {
      var v = {},
        S,
        A;
      for (S in C)
        C.hasOwnProperty(S) &&
          ((A = C[S]),
          typeof A == "object" && A !== null ? (v[S] = c(A)) : (v[S] = A));
      return v;
    }
    function m(C, v) {
      var S, A, T, P;
      for (A = C.length, T = 0; A; )
        (S = A >>> 1),
          (P = T + S),
          v(C[P]) ? (A = S) : ((T = P + 1), (A -= S + 1));
      return T;
    }
    (r = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression",
    }),
      (n = {
        AssignmentExpression: ["left", "right"],
        AssignmentPattern: ["left", "right"],
        ArrayExpression: ["elements"],
        ArrayPattern: ["elements"],
        ArrowFunctionExpression: ["params", "body"],
        AwaitExpression: ["argument"],
        BlockStatement: ["body"],
        BinaryExpression: ["left", "right"],
        BreakStatement: ["label"],
        CallExpression: ["callee", "arguments"],
        CatchClause: ["param", "body"],
        ChainExpression: ["expression"],
        ClassBody: ["body"],
        ClassDeclaration: ["id", "superClass", "body"],
        ClassExpression: ["id", "superClass", "body"],
        ComprehensionBlock: ["left", "right"],
        ComprehensionExpression: ["blocks", "filter", "body"],
        ConditionalExpression: ["test", "consequent", "alternate"],
        ContinueStatement: ["label"],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ["body", "test"],
        EmptyStatement: [],
        ExportAllDeclaration: ["source"],
        ExportDefaultDeclaration: ["declaration"],
        ExportNamedDeclaration: ["declaration", "specifiers", "source"],
        ExportSpecifier: ["exported", "local"],
        ExpressionStatement: ["expression"],
        ForStatement: ["init", "test", "update", "body"],
        ForInStatement: ["left", "right", "body"],
        ForOfStatement: ["left", "right", "body"],
        FunctionDeclaration: ["id", "params", "body"],
        FunctionExpression: ["id", "params", "body"],
        GeneratorExpression: ["blocks", "filter", "body"],
        Identifier: [],
        IfStatement: ["test", "consequent", "alternate"],
        ImportExpression: ["source"],
        ImportDeclaration: ["specifiers", "source"],
        ImportDefaultSpecifier: ["local"],
        ImportNamespaceSpecifier: ["local"],
        ImportSpecifier: ["imported", "local"],
        Literal: [],
        LabeledStatement: ["label", "body"],
        LogicalExpression: ["left", "right"],
        MemberExpression: ["object", "property"],
        MetaProperty: ["meta", "property"],
        MethodDefinition: ["key", "value"],
        ModuleSpecifier: [],
        NewExpression: ["callee", "arguments"],
        ObjectExpression: ["properties"],
        ObjectPattern: ["properties"],
        PrivateIdentifier: [],
        Program: ["body"],
        Property: ["key", "value"],
        PropertyDefinition: ["key", "value"],
        RestElement: ["argument"],
        ReturnStatement: ["argument"],
        SequenceExpression: ["expressions"],
        SpreadElement: ["argument"],
        Super: [],
        SwitchStatement: ["discriminant", "cases"],
        SwitchCase: ["test", "consequent"],
        TaggedTemplateExpression: ["tag", "quasi"],
        TemplateElement: [],
        TemplateLiteral: ["quasis", "expressions"],
        ThisExpression: [],
        ThrowStatement: ["argument"],
        TryStatement: ["block", "handler", "finalizer"],
        UnaryExpression: ["argument"],
        UpdateExpression: ["argument"],
        VariableDeclaration: ["declarations"],
        VariableDeclarator: ["id", "init"],
        WhileStatement: ["test", "body"],
        WithStatement: ["object", "body"],
        YieldExpression: ["argument"],
      }),
      (s = {}),
      (a = {}),
      (u = {}),
      (i = { Break: s, Skip: a, Remove: u });
    function d(C, v) {
      (this.parent = C), (this.key = v);
    }
    (d.prototype.replace = function (v) {
      this.parent[this.key] = v;
    }),
      (d.prototype.remove = function () {
        return Array.isArray(this.parent)
          ? (this.parent.splice(this.key, 1), !0)
          : (this.replace(null), !1);
      });
    function E(C, v, S, A) {
      (this.node = C), (this.path = v), (this.wrap = S), (this.ref = A);
    }
    function y() {}
    (y.prototype.path = function () {
      var v, S, A, T, P, Q;
      function I(B, W) {
        if (Array.isArray(W))
          for (A = 0, T = W.length; A < T; ++A) B.push(W[A]);
        else B.push(W);
      }
      if (!this.__current.path) return null;
      for (P = [], v = 2, S = this.__leavelist.length; v < S; ++v)
        (Q = this.__leavelist[v]), I(P, Q.path);
      return I(P, this.__current.path), P;
    }),
      (y.prototype.type = function () {
        var C = this.current();
        return C.type || this.__current.wrap;
      }),
      (y.prototype.parents = function () {
        var v, S, A;
        for (A = [], v = 1, S = this.__leavelist.length; v < S; ++v)
          A.push(this.__leavelist[v].node);
        return A;
      }),
      (y.prototype.current = function () {
        return this.__current.node;
      }),
      (y.prototype.__execute = function (v, S) {
        var A, T;
        return (
          (T = void 0),
          (A = this.__current),
          (this.__current = S),
          (this.__state = null),
          v &&
            (T = v.call(
              this,
              S.node,
              this.__leavelist[this.__leavelist.length - 1].node
            )),
          (this.__current = A),
          T
        );
      }),
      (y.prototype.notify = function (v) {
        this.__state = v;
      }),
      (y.prototype.skip = function () {
        this.notify(a);
      }),
      (y.prototype.break = function () {
        this.notify(s);
      }),
      (y.prototype.remove = function () {
        this.notify(u);
      }),
      (y.prototype.__initialize = function (C, v) {
        (this.visitor = v),
          (this.root = C),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          v.fallback === "iteration"
            ? (this.__fallback = Object.keys)
            : typeof v.fallback == "function" && (this.__fallback = v.fallback),
          (this.__keys = n),
          v.keys &&
            (this.__keys = Object.assign(Object.create(this.__keys), v.keys));
      });
    function x(C) {
      return C == null ? !1 : typeof C == "object" && typeof C.type == "string";
    }
    function b(C, v) {
      return (
        (C === r.ObjectExpression || C === r.ObjectPattern) &&
        v === "properties"
      );
    }
    function w(C, v) {
      for (var S = C.length - 1; S >= 0; --S) if (C[S].node === v) return !0;
      return !1;
    }
    (y.prototype.traverse = function (v, S) {
      var A, T, P, Q, I, B, W, Z, re, J, $, Ae;
      for (
        this.__initialize(v, S),
          Ae = {},
          A = this.__worklist,
          T = this.__leavelist,
          A.push(new E(v, null, null, null)),
          T.push(new E(null, null, null, null));
        A.length;

      ) {
        if (((P = A.pop()), P === Ae)) {
          if (
            ((P = T.pop()),
            (B = this.__execute(S.leave, P)),
            this.__state === s || B === s)
          )
            return;
          continue;
        }
        if (P.node) {
          if (((B = this.__execute(S.enter, P)), this.__state === s || B === s))
            return;
          if ((A.push(Ae), T.push(P), this.__state === a || B === a)) continue;
          if (((Q = P.node), (I = Q.type || P.wrap), (J = this.__keys[I]), !J))
            if (this.__fallback) J = this.__fallback(Q);
            else throw new Error("Unknown node type " + I + ".");
          for (Z = J.length; (Z -= 1) >= 0; )
            if (((W = J[Z]), ($ = Q[W]), !!$)) {
              if (Array.isArray($)) {
                for (re = $.length; (re -= 1) >= 0; )
                  if (!!$[re] && !w(T, $[re])) {
                    if (b(I, J[Z])) P = new E($[re], [W, re], "Property", null);
                    else if (x($[re])) P = new E($[re], [W, re], null, null);
                    else continue;
                    A.push(P);
                  }
              } else if (x($)) {
                if (w(T, $)) continue;
                A.push(new E($, W, null, null));
              }
            }
        }
      }
    }),
      (y.prototype.replace = function (v, S) {
        var A, T, P, Q, I, B, W, Z, re, J, $, Ae, Te;
        function M(bt) {
          var Pt, zt, ie, qe;
          if (bt.ref.remove()) {
            for (zt = bt.ref.key, qe = bt.ref.parent, Pt = A.length; Pt--; )
              if (((ie = A[Pt]), ie.ref && ie.ref.parent === qe)) {
                if (ie.ref.key < zt) break;
                --ie.ref.key;
              }
          }
        }
        for (
          this.__initialize(v, S),
            $ = {},
            A = this.__worklist,
            T = this.__leavelist,
            Ae = { root: v },
            B = new E(v, null, null, new d(Ae, "root")),
            A.push(B),
            T.push(B);
          A.length;

        ) {
          if (((B = A.pop()), B === $)) {
            if (
              ((B = T.pop()),
              (I = this.__execute(S.leave, B)),
              I !== void 0 && I !== s && I !== a && I !== u && B.ref.replace(I),
              (this.__state === u || I === u) && M(B),
              this.__state === s || I === s)
            )
              return Ae.root;
            continue;
          }
          if (
            ((I = this.__execute(S.enter, B)),
            I !== void 0 &&
              I !== s &&
              I !== a &&
              I !== u &&
              (B.ref.replace(I), (B.node = I)),
            (this.__state === u || I === u) && (M(B), (B.node = null)),
            this.__state === s || I === s)
          )
            return Ae.root;
          if (
            ((P = B.node),
            !!P && (A.push($), T.push(B), !(this.__state === a || I === a)))
          ) {
            if (((Q = P.type || B.wrap), (re = this.__keys[Q]), !re))
              if (this.__fallback) re = this.__fallback(P);
              else throw new Error("Unknown node type " + Q + ".");
            for (W = re.length; (W -= 1) >= 0; )
              if (((Te = re[W]), (J = P[Te]), !!J))
                if (Array.isArray(J)) {
                  for (Z = J.length; (Z -= 1) >= 0; )
                    if (J[Z]) {
                      if (b(Q, re[W]))
                        B = new E(J[Z], [Te, Z], "Property", new d(J, Z));
                      else if (x(J[Z]))
                        B = new E(J[Z], [Te, Z], null, new d(J, Z));
                      else continue;
                      A.push(B);
                    }
                } else x(J) && A.push(new E(J, Te, null, new d(P, Te)));
          }
        }
        return Ae.root;
      });
    function _(C, v) {
      var S = new y();
      return S.traverse(C, v);
    }
    function O(C, v) {
      var S = new y();
      return S.replace(C, v);
    }
    function L(C, v) {
      var S;
      return (
        (S = m(v, function (T) {
          return T.range[0] > C.range[0];
        })),
        (C.extendedRange = [C.range[0], C.range[1]]),
        S !== v.length && (C.extendedRange[1] = v[S].range[0]),
        (S -= 1),
        S >= 0 && (C.extendedRange[0] = v[S].range[1]),
        C
      );
    }
    function R(C, v, S) {
      var A = [],
        T,
        P,
        Q,
        I;
      if (!C.range) throw new Error("attachComments needs range information");
      if (!S.length) {
        if (v.length) {
          for (Q = 0, P = v.length; Q < P; Q += 1)
            (T = c(v[Q])), (T.extendedRange = [0, C.range[0]]), A.push(T);
          C.leadingComments = A;
        }
        return C;
      }
      for (Q = 0, P = v.length; Q < P; Q += 1) A.push(L(c(v[Q]), S));
      return (
        (I = 0),
        _(C, {
          enter: function (B) {
            for (
              var W;
              I < A.length && ((W = A[I]), !(W.extendedRange[1] > B.range[0]));

            )
              W.extendedRange[1] === B.range[0]
                ? (B.leadingComments || (B.leadingComments = []),
                  B.leadingComments.push(W),
                  A.splice(I, 1))
                : (I += 1);
            if (I === A.length) return i.Break;
            if (A[I].extendedRange[0] > B.range[1]) return i.Skip;
          },
        }),
        (I = 0),
        _(C, {
          leave: function (B) {
            for (
              var W;
              I < A.length && ((W = A[I]), !(B.range[1] < W.extendedRange[0]));

            )
              B.range[1] === W.extendedRange[0]
                ? (B.trailingComments || (B.trailingComments = []),
                  B.trailingComments.push(W),
                  A.splice(I, 1))
                : (I += 1);
            if (I === A.length) return i.Break;
            if (A[I].extendedRange[0] > B.range[1]) return i.Skip;
          },
        }),
        C
      );
    }
    return (
      (e.Syntax = r),
      (e.traverse = _),
      (e.replace = O),
      (e.attachComments = R),
      (e.VisitorKeys = n),
      (e.VisitorOption = i),
      (e.Controller = y),
      (e.cloneEnvironment = function () {
        return t({});
      }),
      e
    );
  })(gf);
});
var vf = j((gg, Gm) => {
  Gm.exports = {
    name: "esrecurse",
    description: "ECMAScript AST recursive visitor",
    homepage: "https://github.com/estools/esrecurse",
    main: "esrecurse.js",
    version: "4.3.0",
    engines: { node: ">=4.0" },
    maintainers: [
      {
        name: "Yusuke Suzuki",
        email: "utatane.tea@gmail.com",
        web: "https://github.com/Constellation",
      },
    ],
    repository: {
      type: "git",
      url: "https://github.com/estools/esrecurse.git",
    },
    dependencies: { estraverse: "^5.2.0" },
    devDependencies: {
      "babel-cli": "^6.24.1",
      "babel-eslint": "^7.2.3",
      "babel-preset-es2015": "^6.24.1",
      "babel-register": "^6.24.1",
      chai: "^4.0.2",
      esprima: "^4.0.0",
      gulp: "^3.9.0",
      "gulp-bump": "^2.7.0",
      "gulp-eslint": "^4.0.0",
      "gulp-filter": "^5.0.0",
      "gulp-git": "^2.4.1",
      "gulp-mocha": "^4.3.1",
      "gulp-tag-version": "^1.2.1",
      jsdoc: "^3.3.0-alpha10",
      minimist: "^1.1.0",
    },
    license: "BSD-2-Clause",
    scripts: {
      test: "gulp travis",
      "unit-test": "gulp test",
      lint: "gulp lint",
    },
    babel: { presets: ["es2015"] },
  };
});
var Pa = j((Rn) => {
  (function () {
    "use strict";
    var t = Fi();
    function e(n) {
      return n == null ? !1 : typeof n == "object" && typeof n.type == "string";
    }
    function r(n, s) {
      return (
        (n === t.Syntax.ObjectExpression || n === t.Syntax.ObjectPattern) &&
        s === "properties"
      );
    }
    function i(n, s) {
      (s = s || {}),
        (this.__visitor = n || this),
        (this.__childVisitorKeys = s.childVisitorKeys
          ? Object.assign({}, t.VisitorKeys, s.childVisitorKeys)
          : t.VisitorKeys),
        s.fallback === "iteration"
          ? (this.__fallback = Object.keys)
          : typeof s.fallback == "function" && (this.__fallback = s.fallback);
    }
    (i.prototype.visitChildren = function (n) {
      var s, a, u, c, m, d, E;
      if (n != null) {
        if (
          ((s = n.type || t.Syntax.Property),
          (a = this.__childVisitorKeys[s]),
          !a)
        )
          if (this.__fallback) a = this.__fallback(n);
          else throw new Error("Unknown node type " + s + ".");
        for (u = 0, c = a.length; u < c; ++u)
          if (((E = n[a[u]]), E))
            if (Array.isArray(E))
              for (m = 0, d = E.length; m < d; ++m)
                E[m] && (e(E[m]) || r(s, a[u])) && this.visit(E[m]);
            else e(E) && this.visit(E);
      }
    }),
      (i.prototype.visit = function (n) {
        var s;
        if (n != null) {
          if (((s = n.type || t.Syntax.Property), this.__visitor[s])) {
            this.__visitor[s].call(this, n);
            return;
          }
          this.visitChildren(n);
        }
      }),
      (Rn.version = vf().version),
      (Rn.Visitor = i),
      (Rn.visit = function (n, s, a) {
        var u = new i(s, a);
        u.visit(n);
      });
  })();
});
var qf = j((Ex, Gf) => {
  var Wt = function (t) {
    t == null && (t = new Date().getTime()),
      (this.N = 624),
      (this.M = 397),
      (this.MATRIX_A = 2567483615),
      (this.UPPER_MASK = 2147483648),
      (this.LOWER_MASK = 2147483647),
      (this.mt = new Array(this.N)),
      (this.mti = this.N + 1),
      t.constructor == Array
        ? this.init_by_array(t, t.length)
        : this.init_seed(t);
  };
  Wt.prototype.init_seed = function (t) {
    for (this.mt[0] = t >>> 0, this.mti = 1; this.mti < this.N; this.mti++) {
      var t = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
      (this.mt[this.mti] =
        ((((t & 4294901760) >>> 16) * 1812433253) << 16) +
        (t & 65535) * 1812433253 +
        this.mti),
        (this.mt[this.mti] >>>= 0);
    }
  };
  Wt.prototype.init_by_array = function (t, e) {
    var r, i, n;
    for (
      this.init_seed(19650218), r = 1, i = 0, n = this.N > e ? this.N : e;
      n;
      n--
    ) {
      var s = this.mt[r - 1] ^ (this.mt[r - 1] >>> 30);
      (this.mt[r] =
        (this.mt[r] ^
          (((((s & 4294901760) >>> 16) * 1664525) << 16) +
            (s & 65535) * 1664525)) +
        t[i] +
        i),
        (this.mt[r] >>>= 0),
        r++,
        i++,
        r >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (r = 1)),
        i >= e && (i = 0);
    }
    for (n = this.N - 1; n; n--) {
      var s = this.mt[r - 1] ^ (this.mt[r - 1] >>> 30);
      (this.mt[r] =
        (this.mt[r] ^
          (((((s & 4294901760) >>> 16) * 1566083941) << 16) +
            (s & 65535) * 1566083941)) -
        r),
        (this.mt[r] >>>= 0),
        r++,
        r >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (r = 1));
    }
    this.mt[0] = 2147483648;
  };
  Wt.prototype.random_int = function () {
    var t,
      e = new Array(0, this.MATRIX_A);
    if (this.mti >= this.N) {
      var r;
      for (
        this.mti == this.N + 1 && this.init_seed(5489), r = 0;
        r < this.N - this.M;
        r++
      )
        (t =
          (this.mt[r] & this.UPPER_MASK) | (this.mt[r + 1] & this.LOWER_MASK)),
          (this.mt[r] = this.mt[r + this.M] ^ (t >>> 1) ^ e[t & 1]);
      for (; r < this.N - 1; r++)
        (t =
          (this.mt[r] & this.UPPER_MASK) | (this.mt[r + 1] & this.LOWER_MASK)),
          (this.mt[r] = this.mt[r + (this.M - this.N)] ^ (t >>> 1) ^ e[t & 1]);
      (t =
        (this.mt[this.N - 1] & this.UPPER_MASK) |
        (this.mt[0] & this.LOWER_MASK)),
        (this.mt[this.N - 1] = this.mt[this.M - 1] ^ (t >>> 1) ^ e[t & 1]),
        (this.mti = 0);
    }
    return (
      (t = this.mt[this.mti++]),
      (t ^= t >>> 11),
      (t ^= (t << 7) & 2636928640),
      (t ^= (t << 15) & 4022730752),
      (t ^= t >>> 18),
      t >>> 0
    );
  };
  Wt.prototype.random_int31 = function () {
    return this.random_int() >>> 1;
  };
  Wt.prototype.random_incl = function () {
    return this.random_int() * (1 / 4294967295);
  };
  Wt.prototype.random = function () {
    return this.random_int() * (1 / 4294967296);
  };
  Wt.prototype.random_excl = function () {
    return (this.random_int() + 0.5) * (1 / 4294967296);
  };
  Wt.prototype.random_long = function () {
    var t = this.random_int() >>> 5,
      e = this.random_int() >>> 6;
    return (t * 67108864 + e) * (1 / 9007199254740992);
  };
  Gf.exports = Wt;
});
var ja = st(cs());
var Ss = {};
to(Ss, {
  Node: () => Vt,
  Parser: () => Ee,
  Position: () => wr,
  SourceLocation: () => $t,
  TokContext: () => lt,
  Token: () => Ir,
  TokenType: () => le,
  defaultOptions: () => _r,
  getLineInfo: () => or,
  isIdentifierChar: () => ar,
  isIdentifierStart: () => It,
  isNewLine: () => vt,
  keywordTypes: () => Wi,
  lineBreak: () => He,
  lineBreakG: () => ti,
  nonASCIIwhitespace: () => gs,
  parse: () => uh,
  parseExpressionAt: () => lh,
  tokContexts: () => he,
  tokTypes: () => l,
  tokenizer: () => ch,
  version: () => gu,
});
var fs = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict:
      "implements interface let package private protected public static yield",
    strictBind: "eval arguments",
  },
  ps =
    "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
  Op = {
    5: ps,
    "5module": ps + " export import",
    6: ps + " const class extends export import super",
  },
  Lp = /^in(stanceof)?$/,
  ys =
    "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
  Go =
    "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F",
  Rp = new RegExp("[" + ys + "]"),
  Mp = new RegExp("[" + ys + Go + "]");
ys = Go = null;
var qo = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
    48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5,
    39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10,
    21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11,
    22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2,
    2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72,
    56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20,
    28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4,
    0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2,
    9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52,
    19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42,
    14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16,
    0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20,
    0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5,
    2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96,
    16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32,
    20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237,
    43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12,
    4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2,
    64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24,
    2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482,
    44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60,
    67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5,
    0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0,
    3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719,
    33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
  ],
  Vp = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
    574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3,
    46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3,
    2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0,
    11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1,
    83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3,
    3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10,
    47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0,
    9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9,
    1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5,
    9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2,
    14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495,
    6, 110, 6, 6, 9, 4759, 9, 787719, 239,
  ];
function ds(t, e) {
  for (var r = 65536, i = 0; i < e.length; i += 2) {
    if (((r += e[i]), r > t)) return !1;
    if (((r += e[i + 1]), r >= t)) return !0;
  }
}
function It(t, e) {
  return t < 65
    ? t === 36
    : t < 91
    ? !0
    : t < 97
    ? t === 95
    : t < 123
    ? !0
    : t <= 65535
    ? t >= 170 && Rp.test(String.fromCharCode(t))
    : e === !1
    ? !1
    : ds(t, qo);
}
function ar(t, e) {
  return t < 48
    ? t === 36
    : t < 58
    ? !0
    : t < 65
    ? !1
    : t < 91
    ? !0
    : t < 97
    ? t === 95
    : t < 123
    ? !0
    : t <= 65535
    ? t >= 170 && Mp.test(String.fromCharCode(t))
    : e === !1
    ? !1
    : ds(t, qo) || ds(t, Vp);
}
var le = function (e, r) {
  r === void 0 && (r = {}),
    (this.label = e),
    (this.keyword = r.keyword),
    (this.beforeExpr = !!r.beforeExpr),
    (this.startsExpr = !!r.startsExpr),
    (this.isLoop = !!r.isLoop),
    (this.isAssign = !!r.isAssign),
    (this.prefix = !!r.prefix),
    (this.postfix = !!r.postfix),
    (this.binop = r.binop || null),
    (this.updateContext = null);
};
function ot(t, e) {
  return new le(t, { beforeExpr: !0, binop: e });
}
var ut = { beforeExpr: !0 },
  Xe = { startsExpr: !0 },
  Wi = {};
function oe(t, e) {
  return e === void 0 && (e = {}), (e.keyword = t), (Wi[t] = new le(t, e));
}
var l = {
    num: new le("num", Xe),
    regexp: new le("regexp", Xe),
    string: new le("string", Xe),
    name: new le("name", Xe),
    privateId: new le("privateId", Xe),
    eof: new le("eof"),
    bracketL: new le("[", { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new le("]"),
    braceL: new le("{", { beforeExpr: !0, startsExpr: !0 }),
    braceR: new le("}"),
    parenL: new le("(", { beforeExpr: !0, startsExpr: !0 }),
    parenR: new le(")"),
    comma: new le(",", ut),
    semi: new le(";", ut),
    colon: new le(":", ut),
    dot: new le("."),
    question: new le("?", ut),
    questionDot: new le("?."),
    arrow: new le("=>", ut),
    template: new le("template"),
    invalidTemplate: new le("invalidTemplate"),
    ellipsis: new le("...", ut),
    backQuote: new le("`", Xe),
    dollarBraceL: new le("${", { beforeExpr: !0, startsExpr: !0 }),
    eq: new le("=", { beforeExpr: !0, isAssign: !0 }),
    assign: new le("_=", { beforeExpr: !0, isAssign: !0 }),
    incDec: new le("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new le("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: ot("||", 1),
    logicalAND: ot("&&", 2),
    bitwiseOR: ot("|", 3),
    bitwiseXOR: ot("^", 4),
    bitwiseAND: ot("&", 5),
    equality: ot("==/!=/===/!==", 6),
    relational: ot("</>/<=/>=", 7),
    bitShift: ot("<</>>/>>>", 8),
    plusMin: new le("+/-", {
      beforeExpr: !0,
      binop: 9,
      prefix: !0,
      startsExpr: !0,
    }),
    modulo: ot("%", 10),
    star: ot("*", 10),
    slash: ot("/", 10),
    starstar: new le("**", { beforeExpr: !0 }),
    coalesce: ot("??", 1),
    _break: oe("break"),
    _case: oe("case", ut),
    _catch: oe("catch"),
    _continue: oe("continue"),
    _debugger: oe("debugger"),
    _default: oe("default", ut),
    _do: oe("do", { isLoop: !0, beforeExpr: !0 }),
    _else: oe("else", ut),
    _finally: oe("finally"),
    _for: oe("for", { isLoop: !0 }),
    _function: oe("function", Xe),
    _if: oe("if"),
    _return: oe("return", ut),
    _switch: oe("switch"),
    _throw: oe("throw", ut),
    _try: oe("try"),
    _var: oe("var"),
    _const: oe("const"),
    _while: oe("while", { isLoop: !0 }),
    _with: oe("with"),
    _new: oe("new", { beforeExpr: !0, startsExpr: !0 }),
    _this: oe("this", Xe),
    _super: oe("super", Xe),
    _class: oe("class", Xe),
    _extends: oe("extends", ut),
    _export: oe("export"),
    _import: oe("import", Xe),
    _null: oe("null", Xe),
    _true: oe("true", Xe),
    _false: oe("false", Xe),
    _in: oe("in", { beforeExpr: !0, binop: 7 }),
    _instanceof: oe("instanceof", { beforeExpr: !0, binop: 7 }),
    _typeof: oe("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: oe("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: oe("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  },
  He = /\r\n?|\n|\u2028|\u2029/,
  ti = new RegExp(He.source, "g");
function vt(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function jo(t, e, r) {
  r === void 0 && (r = t.length);
  for (var i = e; i < r; i++) {
    var n = t.charCodeAt(i);
    if (vt(n))
      return i < r - 1 && n === 13 && t.charCodeAt(i + 1) === 10
        ? i + 2
        : i + 1;
  }
  return -1;
}
var gs = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  ct = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Uo = Object.prototype,
  Gp = Uo.hasOwnProperty,
  qp = Uo.toString,
  ri =
    Object.hasOwn ||
    function (t, e) {
      return Gp.call(t, e);
    },
  Lo =
    Array.isArray ||
    function (t) {
      return qp.call(t) === "[object Array]";
    };
function sr(t) {
  return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$");
}
var jp =
    /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
  wr = function (e, r) {
    (this.line = e), (this.column = r);
  };
wr.prototype.offset = function (e) {
  return new wr(this.line, this.column + e);
};
var $t = function (e, r, i) {
  (this.start = r),
    (this.end = i),
    e.sourceFile !== null && (this.source = e.sourceFile);
};
function or(t, e) {
  for (var r = 1, i = 0; ; ) {
    var n = jo(t, i, e);
    if (n < 0) return new wr(r, e - i);
    ++r, (i = n);
  }
}
var _r = {
    ecmaVersion: null,
    sourceType: "script",
    onInsertedSemicolon: null,
    onTrailingComma: null,
    allowReserved: null,
    allowReturnOutsideFunction: !1,
    allowImportExportEverywhere: !1,
    allowAwaitOutsideFunction: null,
    allowSuperOutsideMethod: null,
    allowHashBang: !1,
    locations: !1,
    onToken: null,
    onComment: null,
    ranges: !1,
    program: null,
    sourceFile: null,
    directSourceFile: null,
    preserveParens: !1,
  },
  Ro = !1;
function Up(t) {
  var e = {};
  for (var r in _r) e[r] = t && ri(t, r) ? t[r] : _r[r];
  if (
    (e.ecmaVersion === "latest"
      ? (e.ecmaVersion = 1e8)
      : e.ecmaVersion == null
      ? (!Ro &&
          typeof console == "object" &&
          console.warn &&
          ((Ro = !0),
          console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)),
        (e.ecmaVersion = 11))
      : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009),
    e.allowReserved == null && (e.allowReserved = e.ecmaVersion < 5),
    Lo(e.onToken))
  ) {
    var i = e.onToken;
    e.onToken = function (n) {
      return i.push(n);
    };
  }
  return Lo(e.onComment) && (e.onComment = Wp(e, e.onComment)), e;
}
function Wp(t, e) {
  return function (r, i, n, s, a, u) {
    var c = { type: r ? "Block" : "Line", value: i, start: n, end: s };
    t.locations && (c.loc = new $t(this, a, u)),
      t.ranges && (c.range = [n, s]),
      e.push(c);
  };
}
var ei = 1,
  Br = 2,
  Es = 4,
  Wo = 8,
  zo = 16,
  $o = 32,
  xs = 64,
  Ho = 128,
  ii = 256,
  bs = ei | Br | ii;
function As(t, e) {
  return Br | (t ? Es : 0) | (e ? Wo : 0);
}
var Gi = 0,
  vs = 1,
  Mt = 2,
  Ko = 3,
  Yo = 4,
  Qo = 5,
  Ee = function (e, r, i) {
    (this.options = e = Up(e)),
      (this.sourceFile = e.sourceFile),
      (this.keywords = sr(
        Op[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]
      ));
    var n = "";
    e.allowReserved !== !0 &&
      ((n = fs[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3]),
      e.sourceType === "module" && (n += " await")),
      (this.reservedWords = sr(n));
    var s = (n ? n + " " : "") + fs.strict;
    (this.reservedWordsStrict = sr(s)),
      (this.reservedWordsStrictBind = sr(s + " " + fs.strictBind)),
      (this.input = String(r)),
      (this.containsEsc = !1),
      i
        ? ((this.pos = i),
          (this.lineStart =
            this.input.lastIndexOf(
              `
`,
              i - 1
            ) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(He).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = l.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = e.sourceType === "module"),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.potentialArrowInForAwait = !1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = Object.create(null)),
      this.pos === 0 &&
        e.allowHashBang &&
        this.input.slice(0, 2) === "#!" &&
        this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(ei),
      (this.regexpState = null),
      (this.privateNameStack = []);
  },
  Nt = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    canAwait: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 },
    allowNewDotTarget: { configurable: !0 },
    inClassStaticBlock: { configurable: !0 },
  };
Ee.prototype.parse = function () {
  var e = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(e);
};
Nt.inFunction.get = function () {
  return (this.currentVarScope().flags & Br) > 0;
};
Nt.inGenerator.get = function () {
  return (
    (this.currentVarScope().flags & Wo) > 0 &&
    !this.currentVarScope().inClassFieldInit
  );
};
Nt.inAsync.get = function () {
  return (
    (this.currentVarScope().flags & Es) > 0 &&
    !this.currentVarScope().inClassFieldInit
  );
};
Nt.canAwait.get = function () {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t];
    if (e.inClassFieldInit || e.flags & ii) return !1;
    if (e.flags & Br) return (e.flags & Es) > 0;
  }
  return (
    (this.inModule && this.options.ecmaVersion >= 13) ||
    this.options.allowAwaitOutsideFunction
  );
};
Nt.allowSuper.get = function () {
  var t = this.currentThisScope(),
    e = t.flags,
    r = t.inClassFieldInit;
  return (e & xs) > 0 || r || this.options.allowSuperOutsideMethod;
};
Nt.allowDirectSuper.get = function () {
  return (this.currentThisScope().flags & Ho) > 0;
};
Nt.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Nt.allowNewDotTarget.get = function () {
  var t = this.currentThisScope(),
    e = t.flags,
    r = t.inClassFieldInit;
  return (e & (Br | ii)) > 0 || r;
};
Nt.inClassStaticBlock.get = function () {
  return (this.currentVarScope().flags & ii) > 0;
};
Ee.extend = function () {
  for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
  for (var i = this, n = 0; n < e.length; n++) i = e[n](i);
  return i;
};
Ee.parse = function (e, r) {
  return new this(r, e).parse();
};
Ee.parseExpressionAt = function (e, r, i) {
  var n = new this(i, e, r);
  return n.nextToken(), n.parseExpression();
};
Ee.tokenizer = function (e, r) {
  return new this(r, e);
};
Object.defineProperties(Ee.prototype, Nt);
var Ke = Ee.prototype,
  zp = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
Ke.strictDirective = function (t) {
  for (;;) {
    (ct.lastIndex = t), (t += ct.exec(this.input)[0].length);
    var e = zp.exec(this.input.slice(t));
    if (!e) return !1;
    if ((e[1] || e[2]) === "use strict") {
      ct.lastIndex = t + e[0].length;
      var r = ct.exec(this.input),
        i = r.index + r[0].length,
        n = this.input.charAt(i);
      return (
        n === ";" ||
        n === "}" ||
        (He.test(r[0]) &&
          !(
            /[(`.[+\-/*%<>=,?^&]/.test(n) ||
            (n === "!" && this.input.charAt(i + 1) === "=")
          ))
      );
    }
    (t += e[0].length),
      (ct.lastIndex = t),
      (t += ct.exec(this.input)[0].length),
      this.input[t] === ";" && t++;
  }
};
Ke.eat = function (t) {
  return this.type === t ? (this.next(), !0) : !1;
};
Ke.isContextual = function (t) {
  return this.type === l.name && this.value === t && !this.containsEsc;
};
Ke.eatContextual = function (t) {
  return this.isContextual(t) ? (this.next(), !0) : !1;
};
Ke.expectContextual = function (t) {
  this.eatContextual(t) || this.unexpected();
};
Ke.canInsertSemicolon = function () {
  return (
    this.type === l.eof ||
    this.type === l.braceR ||
    He.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
Ke.insertSemicolon = function () {
  if (this.canInsertSemicolon())
    return (
      this.options.onInsertedSemicolon &&
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
      !0
    );
};
Ke.semicolon = function () {
  !this.eat(l.semi) && !this.insertSemicolon() && this.unexpected();
};
Ke.afterTrailingComma = function (t, e) {
  if (this.type === t)
    return (
      this.options.onTrailingComma &&
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
      e || this.next(),
      !0
    );
};
Ke.expect = function (t) {
  this.eat(t) || this.unexpected();
};
Ke.unexpected = function (t) {
  this.raise(t ?? this.start, "Unexpected token");
};
function zi() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
}
Ke.checkPatternErrors = function (t, e) {
  if (t) {
    t.trailingComma > -1 &&
      this.raiseRecoverable(
        t.trailingComma,
        "Comma is not permitted after the rest element"
      );
    var r = e ? t.parenthesizedAssign : t.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
Ke.checkExpressionErrors = function (t, e) {
  if (!t) return !1;
  var r = t.shorthandAssign,
    i = t.doubleProto;
  if (!e) return r >= 0 || i >= 0;
  r >= 0 &&
    this.raise(
      r,
      "Shorthand property assignments are valid only in destructuring patterns"
    ),
    i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property");
};
Ke.checkYieldAwaitInDefaultParams = function () {
  this.yieldPos &&
    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
    this.raise(this.yieldPos, "Yield expression cannot be a default value"),
    this.awaitPos &&
      this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Ke.isSimpleAssignTarget = function (t) {
  return t.type === "ParenthesizedExpression"
    ? this.isSimpleAssignTarget(t.expression)
    : t.type === "Identifier" || t.type === "MemberExpression";
};
var K = Ee.prototype;
K.parseTopLevel = function (t) {
  var e = Object.create(null);
  for (t.body || (t.body = []); this.type !== l.eof; ) {
    var r = this.parseStatement(null, !0, e);
    t.body.push(r);
  }
  if (this.inModule)
    for (
      var i = 0, n = Object.keys(this.undefinedExports);
      i < n.length;
      i += 1
    ) {
      var s = n[i];
      this.raiseRecoverable(
        this.undefinedExports[s].start,
        "Export '" + s + "' is not defined"
      );
    }
  return (
    this.adaptDirectivePrologue(t.body),
    this.next(),
    (t.sourceType = this.options.sourceType),
    this.finishNode(t, "Program")
  );
};
var Ds = { kind: "loop" },
  $p = { kind: "switch" };
K.isLet = function (t) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
  ct.lastIndex = this.pos;
  var e = ct.exec(this.input),
    r = this.pos + e[0].length,
    i = this.input.charCodeAt(r);
  if (i === 91 || i === 92 || (i > 55295 && i < 56320)) return !0;
  if (t) return !1;
  if (i === 123) return !0;
  if (It(i, !0)) {
    for (var n = r + 1; ar((i = this.input.charCodeAt(n)), !0); ) ++n;
    if (i === 92 || (i > 55295 && i < 56320)) return !0;
    var s = this.input.slice(r, n);
    if (!Lp.test(s)) return !0;
  }
  return !1;
};
K.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
  ct.lastIndex = this.pos;
  var t = ct.exec(this.input),
    e = this.pos + t[0].length,
    r;
  return (
    !He.test(this.input.slice(this.pos, e)) &&
    this.input.slice(e, e + 8) === "function" &&
    (e + 8 === this.input.length ||
      !(ar((r = this.input.charCodeAt(e + 8))) || (r > 55295 && r < 56320)))
  );
};
K.parseStatement = function (t, e, r) {
  var i = this.type,
    n = this.startNode(),
    s;
  switch ((this.isLet(t) && ((i = l._var), (s = "let")), i)) {
    case l._break:
    case l._continue:
      return this.parseBreakContinueStatement(n, i.keyword);
    case l._debugger:
      return this.parseDebuggerStatement(n);
    case l._do:
      return this.parseDoStatement(n);
    case l._for:
      return this.parseForStatement(n);
    case l._function:
      return (
        t &&
          (this.strict || (t !== "if" && t !== "label")) &&
          this.options.ecmaVersion >= 6 &&
          this.unexpected(),
        this.parseFunctionStatement(n, !1, !t)
      );
    case l._class:
      return t && this.unexpected(), this.parseClass(n, !0);
    case l._if:
      return this.parseIfStatement(n);
    case l._return:
      return this.parseReturnStatement(n);
    case l._switch:
      return this.parseSwitchStatement(n);
    case l._throw:
      return this.parseThrowStatement(n);
    case l._try:
      return this.parseTryStatement(n);
    case l._const:
    case l._var:
      return (
        (s = s || this.value),
        t && s !== "var" && this.unexpected(),
        this.parseVarStatement(n, s)
      );
    case l._while:
      return this.parseWhileStatement(n);
    case l._with:
      return this.parseWithStatement(n);
    case l.braceL:
      return this.parseBlock(!0, n);
    case l.semi:
      return this.parseEmptyStatement(n);
    case l._export:
    case l._import:
      if (this.options.ecmaVersion > 10 && i === l._import) {
        ct.lastIndex = this.pos;
        var a = ct.exec(this.input),
          u = this.pos + a[0].length,
          c = this.input.charCodeAt(u);
        if (c === 40 || c === 46)
          return this.parseExpressionStatement(n, this.parseExpression());
      }
      return (
        this.options.allowImportExportEverywhere ||
          (e ||
            this.raise(
              this.start,
              "'import' and 'export' may only appear at the top level"
            ),
          this.inModule ||
            this.raise(
              this.start,
              "'import' and 'export' may appear only with 'sourceType: module'"
            )),
        i === l._import ? this.parseImport(n) : this.parseExport(n, r)
      );
    default:
      if (this.isAsyncFunction())
        return (
          t && this.unexpected(),
          this.next(),
          this.parseFunctionStatement(n, !0, !t)
        );
      var m = this.value,
        d = this.parseExpression();
      return i === l.name && d.type === "Identifier" && this.eat(l.colon)
        ? this.parseLabeledStatement(n, m, d, t)
        : this.parseExpressionStatement(n, d);
  }
};
K.parseBreakContinueStatement = function (t, e) {
  var r = e === "break";
  this.next(),
    this.eat(l.semi) || this.insertSemicolon()
      ? (t.label = null)
      : this.type !== l.name
      ? this.unexpected()
      : ((t.label = this.parseIdent()), this.semicolon());
  for (var i = 0; i < this.labels.length; ++i) {
    var n = this.labels[i];
    if (
      (t.label == null || n.name === t.label.name) &&
      ((n.kind != null && (r || n.kind === "loop")) || (t.label && r))
    )
      break;
  }
  return (
    i === this.labels.length && this.raise(t.start, "Unsyntactic " + e),
    this.finishNode(t, r ? "BreakStatement" : "ContinueStatement")
  );
};
K.parseDebuggerStatement = function (t) {
  return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
};
K.parseDoStatement = function (t) {
  return (
    this.next(),
    this.labels.push(Ds),
    (t.body = this.parseStatement("do")),
    this.labels.pop(),
    this.expect(l._while),
    (t.test = this.parseParenExpression()),
    this.options.ecmaVersion >= 6 ? this.eat(l.semi) : this.semicolon(),
    this.finishNode(t, "DoWhileStatement")
  );
};
K.parseForStatement = function (t) {
  this.next();
  var e =
    this.options.ecmaVersion >= 9 &&
    this.canAwait &&
    this.eatContextual("await")
      ? this.lastTokStart
      : -1;
  if (
    (this.labels.push(Ds),
    this.enterScope(0),
    this.expect(l.parenL),
    this.type === l.semi)
  )
    return e > -1 && this.unexpected(e), this.parseFor(t, null);
  var r = this.isLet();
  if (this.type === l._var || this.type === l._const || r) {
    var i = this.startNode(),
      n = r ? "let" : this.value;
    return (
      this.next(),
      this.parseVar(i, !0, n),
      this.finishNode(i, "VariableDeclaration"),
      (this.type === l._in ||
        (this.options.ecmaVersion >= 6 && this.isContextual("of"))) &&
      i.declarations.length === 1
        ? (this.options.ecmaVersion >= 9 &&
            (this.type === l._in
              ? e > -1 && this.unexpected(e)
              : (t.await = e > -1)),
          this.parseForIn(t, i))
        : (e > -1 && this.unexpected(e), this.parseFor(t, i))
    );
  }
  var s = this.isContextual("let"),
    a = !1,
    u = new zi(),
    c = this.parseExpression(e > -1 ? "await" : !0, u);
  return this.type === l._in ||
    (a = this.options.ecmaVersion >= 6 && this.isContextual("of"))
    ? (this.options.ecmaVersion >= 9 &&
        (this.type === l._in
          ? e > -1 && this.unexpected(e)
          : (t.await = e > -1)),
      s &&
        a &&
        this.raise(
          c.start,
          "The left-hand side of a for-of loop may not start with 'let'."
        ),
      this.toAssignable(c, !1, u),
      this.checkLValPattern(c),
      this.parseForIn(t, c))
    : (this.checkExpressionErrors(u, !0),
      e > -1 && this.unexpected(e),
      this.parseFor(t, c));
};
K.parseFunctionStatement = function (t, e, r) {
  return this.next(), this.parseFunction(t, Zr | (r ? 0 : ms), !1, e);
};
K.parseIfStatement = function (t) {
  return (
    this.next(),
    (t.test = this.parseParenExpression()),
    (t.consequent = this.parseStatement("if")),
    (t.alternate = this.eat(l._else) ? this.parseStatement("if") : null),
    this.finishNode(t, "IfStatement")
  );
};
K.parseReturnStatement = function (t) {
  return (
    !this.inFunction &&
      !this.options.allowReturnOutsideFunction &&
      this.raise(this.start, "'return' outside of function"),
    this.next(),
    this.eat(l.semi) || this.insertSemicolon()
      ? (t.argument = null)
      : ((t.argument = this.parseExpression()), this.semicolon()),
    this.finishNode(t, "ReturnStatement")
  );
};
K.parseSwitchStatement = function (t) {
  this.next(),
    (t.discriminant = this.parseParenExpression()),
    (t.cases = []),
    this.expect(l.braceL),
    this.labels.push($p),
    this.enterScope(0);
  for (var e, r = !1; this.type !== l.braceR; )
    if (this.type === l._case || this.type === l._default) {
      var i = this.type === l._case;
      e && this.finishNode(e, "SwitchCase"),
        t.cases.push((e = this.startNode())),
        (e.consequent = []),
        this.next(),
        i
          ? (e.test = this.parseExpression())
          : (r &&
              this.raiseRecoverable(
                this.lastTokStart,
                "Multiple default clauses"
              ),
            (r = !0),
            (e.test = null)),
        this.expect(l.colon);
    } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
  return (
    this.exitScope(),
    e && this.finishNode(e, "SwitchCase"),
    this.next(),
    this.labels.pop(),
    this.finishNode(t, "SwitchStatement")
  );
};
K.parseThrowStatement = function (t) {
  return (
    this.next(),
    He.test(this.input.slice(this.lastTokEnd, this.start)) &&
      this.raise(this.lastTokEnd, "Illegal newline after throw"),
    (t.argument = this.parseExpression()),
    this.semicolon(),
    this.finishNode(t, "ThrowStatement")
  );
};
var Hp = [];
K.parseTryStatement = function (t) {
  if (
    (this.next(),
    (t.block = this.parseBlock()),
    (t.handler = null),
    this.type === l._catch)
  ) {
    var e = this.startNode();
    if ((this.next(), this.eat(l.parenL))) {
      e.param = this.parseBindingAtom();
      var r = e.param.type === "Identifier";
      this.enterScope(r ? $o : 0),
        this.checkLValPattern(e.param, r ? Yo : Mt),
        this.expect(l.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(),
        (e.param = null),
        this.enterScope(0);
    (e.body = this.parseBlock(!1)),
      this.exitScope(),
      (t.handler = this.finishNode(e, "CatchClause"));
  }
  return (
    (t.finalizer = this.eat(l._finally) ? this.parseBlock() : null),
    !t.handler &&
      !t.finalizer &&
      this.raise(t.start, "Missing catch or finally clause"),
    this.finishNode(t, "TryStatement")
  );
};
K.parseVarStatement = function (t, e) {
  return (
    this.next(),
    this.parseVar(t, !1, e),
    this.semicolon(),
    this.finishNode(t, "VariableDeclaration")
  );
};
K.parseWhileStatement = function (t) {
  return (
    this.next(),
    (t.test = this.parseParenExpression()),
    this.labels.push(Ds),
    (t.body = this.parseStatement("while")),
    this.labels.pop(),
    this.finishNode(t, "WhileStatement")
  );
};
K.parseWithStatement = function (t) {
  return (
    this.strict && this.raise(this.start, "'with' in strict mode"),
    this.next(),
    (t.object = this.parseParenExpression()),
    (t.body = this.parseStatement("with")),
    this.finishNode(t, "WithStatement")
  );
};
K.parseEmptyStatement = function (t) {
  return this.next(), this.finishNode(t, "EmptyStatement");
};
K.parseLabeledStatement = function (t, e, r, i) {
  for (var n = 0, s = this.labels; n < s.length; n += 1) {
    var a = s[n];
    a.name === e &&
      this.raise(r.start, "Label '" + e + "' is already declared");
  }
  for (
    var u = this.type.isLoop
        ? "loop"
        : this.type === l._switch
        ? "switch"
        : null,
      c = this.labels.length - 1;
    c >= 0;
    c--
  ) {
    var m = this.labels[c];
    if (m.statementStart === t.start)
      (m.statementStart = this.start), (m.kind = u);
    else break;
  }
  return (
    this.labels.push({ name: e, kind: u, statementStart: this.start }),
    (t.body = this.parseStatement(
      i ? (i.indexOf("label") === -1 ? i + "label" : i) : "label"
    )),
    this.labels.pop(),
    (t.label = r),
    this.finishNode(t, "LabeledStatement")
  );
};
K.parseExpressionStatement = function (t, e) {
  return (
    (t.expression = e),
    this.semicolon(),
    this.finishNode(t, "ExpressionStatement")
  );
};
K.parseBlock = function (t, e, r) {
  for (
    t === void 0 && (t = !0),
      e === void 0 && (e = this.startNode()),
      e.body = [],
      this.expect(l.braceL),
      t && this.enterScope(0);
    this.type !== l.braceR;

  ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return (
    r && (this.strict = !1),
    this.next(),
    t && this.exitScope(),
    this.finishNode(e, "BlockStatement")
  );
};
K.parseFor = function (t, e) {
  return (
    (t.init = e),
    this.expect(l.semi),
    (t.test = this.type === l.semi ? null : this.parseExpression()),
    this.expect(l.semi),
    (t.update = this.type === l.parenR ? null : this.parseExpression()),
    this.expect(l.parenR),
    (t.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(t, "ForStatement")
  );
};
K.parseForIn = function (t, e) {
  var r = this.type === l._in;
  return (
    this.next(),
    e.type === "VariableDeclaration" &&
      e.declarations[0].init != null &&
      (!r ||
        this.options.ecmaVersion < 8 ||
        this.strict ||
        e.kind !== "var" ||
        e.declarations[0].id.type !== "Identifier") &&
      this.raise(
        e.start,
        (r ? "for-in" : "for-of") +
          " loop variable declaration may not have an initializer"
      ),
    (t.left = e),
    (t.right = r ? this.parseExpression() : this.parseMaybeAssign()),
    this.expect(l.parenR),
    (t.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(t, r ? "ForInStatement" : "ForOfStatement")
  );
};
K.parseVar = function (t, e, r) {
  for (t.declarations = [], t.kind = r; ; ) {
    var i = this.startNode();
    if (
      (this.parseVarId(i, r),
      this.eat(l.eq)
        ? (i.init = this.parseMaybeAssign(e))
        : r === "const" &&
          !(
            this.type === l._in ||
            (this.options.ecmaVersion >= 6 && this.isContextual("of"))
          )
        ? this.unexpected()
        : i.id.type !== "Identifier" &&
          !(e && (this.type === l._in || this.isContextual("of")))
        ? this.raise(
            this.lastTokEnd,
            "Complex binding patterns require an initialization value"
          )
        : (i.init = null),
      t.declarations.push(this.finishNode(i, "VariableDeclarator")),
      !this.eat(l.comma))
    )
      break;
  }
  return t;
};
K.parseVarId = function (t, e) {
  (t.id = this.parseBindingAtom()),
    this.checkLValPattern(t.id, e === "var" ? vs : Mt, !1);
};
var Zr = 1,
  ms = 2,
  Jo = 4;
K.parseFunction = function (t, e, r, i, n) {
  this.initFunction(t),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !i)) &&
      (this.type === l.star && e & ms && this.unexpected(),
      (t.generator = this.eat(l.star))),
    this.options.ecmaVersion >= 8 && (t.async = !!i),
    e & Zr &&
      ((t.id = e & Jo && this.type !== l.name ? null : this.parseIdent()),
      t.id &&
        !(e & ms) &&
        this.checkLValSimple(
          t.id,
          this.strict || t.generator || t.async
            ? this.treatFunctionsAsVar
              ? vs
              : Mt
            : Ko
        ));
  var s = this.yieldPos,
    a = this.awaitPos,
    u = this.awaitIdentPos;
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(As(t.async, t.generator)),
    e & Zr || (t.id = this.type === l.name ? this.parseIdent() : null),
    this.parseFunctionParams(t),
    this.parseFunctionBody(t, r, !1, n),
    (this.yieldPos = s),
    (this.awaitPos = a),
    (this.awaitIdentPos = u),
    this.finishNode(t, e & Zr ? "FunctionDeclaration" : "FunctionExpression")
  );
};
K.parseFunctionParams = function (t) {
  this.expect(l.parenL),
    (t.params = this.parseBindingList(
      l.parenR,
      !1,
      this.options.ecmaVersion >= 8
    )),
    this.checkYieldAwaitInDefaultParams();
};
K.parseClass = function (t, e) {
  this.next();
  var r = this.strict;
  (this.strict = !0), this.parseClassId(t, e), this.parseClassSuper(t);
  var i = this.enterClassBody(),
    n = this.startNode(),
    s = !1;
  for (n.body = [], this.expect(l.braceL); this.type !== l.braceR; ) {
    var a = this.parseClassElement(t.superClass !== null);
    a &&
      (n.body.push(a),
      a.type === "MethodDefinition" && a.kind === "constructor"
        ? (s && this.raise(a.start, "Duplicate constructor in the same class"),
          (s = !0))
        : a.key &&
          a.key.type === "PrivateIdentifier" &&
          Kp(i, a) &&
          this.raiseRecoverable(
            a.key.start,
            "Identifier '#" + a.key.name + "' has already been declared"
          ));
  }
  return (
    (this.strict = r),
    this.next(),
    (t.body = this.finishNode(n, "ClassBody")),
    this.exitClassBody(),
    this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
  );
};
K.parseClassElement = function (t) {
  if (this.eat(l.semi)) return null;
  var e = this.options.ecmaVersion,
    r = this.startNode(),
    i = "",
    n = !1,
    s = !1,
    a = "method",
    u = !1;
  if (this.eatContextual("static")) {
    if (e >= 13 && this.eat(l.braceL)) return this.parseClassStaticBlock(r), r;
    this.isClassElementNameStart() || this.type === l.star
      ? (u = !0)
      : (i = "static");
  }
  if (
    ((r.static = u),
    !i &&
      e >= 8 &&
      this.eatContextual("async") &&
      ((this.isClassElementNameStart() || this.type === l.star) &&
      !this.canInsertSemicolon()
        ? (s = !0)
        : (i = "async")),
    !i && (e >= 9 || !s) && this.eat(l.star) && (n = !0),
    !i && !s && !n)
  ) {
    var c = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) &&
      (this.isClassElementNameStart() ? (a = c) : (i = c));
  }
  if (
    (i
      ? ((r.computed = !1),
        (r.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc)),
        (r.key.name = i),
        this.finishNode(r.key, "Identifier"))
      : this.parseClassElementName(r),
    e < 13 || this.type === l.parenL || a !== "method" || n || s)
  ) {
    var m = !r.static && qi(r, "constructor"),
      d = m && t;
    m &&
      a !== "method" &&
      this.raise(r.key.start, "Constructor can't have get/set modifier"),
      (r.kind = m ? "constructor" : a),
      this.parseClassMethod(r, n, s, d);
  } else this.parseClassField(r);
  return r;
};
K.isClassElementNameStart = function () {
  return (
    this.type === l.name ||
    this.type === l.privateId ||
    this.type === l.num ||
    this.type === l.string ||
    this.type === l.bracketL ||
    this.type.keyword
  );
};
K.parseClassElementName = function (t) {
  this.type === l.privateId
    ? (this.value === "constructor" &&
        this.raise(
          this.start,
          "Classes can't have an element named '#constructor'"
        ),
      (t.computed = !1),
      (t.key = this.parsePrivateIdent()))
    : this.parsePropertyName(t);
};
K.parseClassMethod = function (t, e, r, i) {
  var n = t.key;
  t.kind === "constructor"
    ? (e && this.raise(n.start, "Constructor can't be a generator"),
      r && this.raise(n.start, "Constructor can't be an async method"))
    : t.static &&
      qi(t, "prototype") &&
      this.raise(
        n.start,
        "Classes may not have a static property named prototype"
      );
  var s = (t.value = this.parseMethod(e, r, i));
  return (
    t.kind === "get" &&
      s.params.length !== 0 &&
      this.raiseRecoverable(s.start, "getter should have no params"),
    t.kind === "set" &&
      s.params.length !== 1 &&
      this.raiseRecoverable(s.start, "setter should have exactly one param"),
    t.kind === "set" &&
      s.params[0].type === "RestElement" &&
      this.raiseRecoverable(s.params[0].start, "Setter cannot use rest params"),
    this.finishNode(t, "MethodDefinition")
  );
};
K.parseClassField = function (t) {
  if (
    (qi(t, "constructor")
      ? this.raise(
          t.key.start,
          "Classes can't have a field named 'constructor'"
        )
      : t.static &&
        qi(t, "prototype") &&
        this.raise(
          t.key.start,
          "Classes can't have a static field named 'prototype'"
        ),
    this.eat(l.eq))
  ) {
    var e = this.currentThisScope(),
      r = e.inClassFieldInit;
    (e.inClassFieldInit = !0),
      (t.value = this.parseMaybeAssign()),
      (e.inClassFieldInit = r);
  } else t.value = null;
  return this.semicolon(), this.finishNode(t, "PropertyDefinition");
};
K.parseClassStaticBlock = function (t) {
  t.body = [];
  var e = this.labels;
  for (this.labels = [], this.enterScope(ii | xs); this.type !== l.braceR; ) {
    var r = this.parseStatement(null);
    t.body.push(r);
  }
  return (
    this.next(),
    this.exitScope(),
    (this.labels = e),
    this.finishNode(t, "StaticBlock")
  );
};
K.parseClassId = function (t, e) {
  this.type === l.name
    ? ((t.id = this.parseIdent()), e && this.checkLValSimple(t.id, Mt, !1))
    : (e === !0 && this.unexpected(), (t.id = null));
};
K.parseClassSuper = function (t) {
  t.superClass = this.eat(l._extends) ? this.parseExprSubscripts(!1) : null;
};
K.enterClassBody = function () {
  var t = { declared: Object.create(null), used: [] };
  return this.privateNameStack.push(t), t.declared;
};
K.exitClassBody = function () {
  for (
    var t = this.privateNameStack.pop(),
      e = t.declared,
      r = t.used,
      i = this.privateNameStack.length,
      n = i === 0 ? null : this.privateNameStack[i - 1],
      s = 0;
    s < r.length;
    ++s
  ) {
    var a = r[s];
    ri(e, a.name) ||
      (n
        ? n.used.push(a)
        : this.raiseRecoverable(
            a.start,
            "Private field '#" +
              a.name +
              "' must be declared in an enclosing class"
          ));
  }
};
function Kp(t, e) {
  var r = e.key.name,
    i = t[r],
    n = "true";
  return (
    e.type === "MethodDefinition" &&
      (e.kind === "get" || e.kind === "set") &&
      (n = (e.static ? "s" : "i") + e.kind),
    (i === "iget" && n === "iset") ||
    (i === "iset" && n === "iget") ||
    (i === "sget" && n === "sset") ||
    (i === "sset" && n === "sget")
      ? ((t[r] = "true"), !1)
      : i
      ? !0
      : ((t[r] = n), !1)
  );
}
function qi(t, e) {
  var r = t.computed,
    i = t.key;
  return (
    !r &&
    ((i.type === "Identifier" && i.name === e) ||
      (i.type === "Literal" && i.value === e))
  );
}
K.parseExport = function (t, e) {
  if ((this.next(), this.eat(l.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual("as")
          ? ((t.exported = this.parseModuleExportName()),
            this.checkExport(e, t.exported.name, this.lastTokStart))
          : (t.exported = null)),
      this.expectContextual("from"),
      this.type !== l.string && this.unexpected(),
      (t.source = this.parseExprAtom()),
      this.semicolon(),
      this.finishNode(t, "ExportAllDeclaration")
    );
  if (this.eat(l._default)) {
    this.checkExport(e, "default", this.lastTokStart);
    var r;
    if (this.type === l._function || (r = this.isAsyncFunction())) {
      var i = this.startNode();
      this.next(),
        r && this.next(),
        (t.declaration = this.parseFunction(i, Zr | Jo, !1, r));
    } else if (this.type === l._class) {
      var n = this.startNode();
      t.declaration = this.parseClass(n, "nullableID");
    } else (t.declaration = this.parseMaybeAssign()), this.semicolon();
    return this.finishNode(t, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    (t.declaration = this.parseStatement(null)),
      t.declaration.type === "VariableDeclaration"
        ? this.checkVariableExport(e, t.declaration.declarations)
        : this.checkExport(e, t.declaration.id.name, t.declaration.id.start),
      (t.specifiers = []),
      (t.source = null);
  else {
    if (
      ((t.declaration = null),
      (t.specifiers = this.parseExportSpecifiers(e)),
      this.eatContextual("from"))
    )
      this.type !== l.string && this.unexpected(),
        (t.source = this.parseExprAtom());
    else {
      for (var s = 0, a = t.specifiers; s < a.length; s += 1) {
        var u = a[s];
        this.checkUnreserved(u.local),
          this.checkLocalExport(u.local),
          u.local.type === "Literal" &&
            this.raise(
              u.local.start,
              "A string literal cannot be used as an exported binding without `from`."
            );
      }
      t.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(t, "ExportNamedDeclaration");
};
K.checkExport = function (t, e, r) {
  !t ||
    (ri(t, e) && this.raiseRecoverable(r, "Duplicate export '" + e + "'"),
    (t[e] = !0));
};
K.checkPatternExport = function (t, e) {
  var r = e.type;
  if (r === "Identifier") this.checkExport(t, e.name, e.start);
  else if (r === "ObjectPattern")
    for (var i = 0, n = e.properties; i < n.length; i += 1) {
      var s = n[i];
      this.checkPatternExport(t, s);
    }
  else if (r === "ArrayPattern")
    for (var a = 0, u = e.elements; a < u.length; a += 1) {
      var c = u[a];
      c && this.checkPatternExport(t, c);
    }
  else
    r === "Property"
      ? this.checkPatternExport(t, e.value)
      : r === "AssignmentPattern"
      ? this.checkPatternExport(t, e.left)
      : r === "RestElement"
      ? this.checkPatternExport(t, e.argument)
      : r === "ParenthesizedExpression" &&
        this.checkPatternExport(t, e.expression);
};
K.checkVariableExport = function (t, e) {
  if (t)
    for (var r = 0, i = e; r < i.length; r += 1) {
      var n = i[r];
      this.checkPatternExport(t, n.id);
    }
};
K.shouldParseExportStatement = function () {
  return (
    this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
  );
};
K.parseExportSpecifiers = function (t) {
  var e = [],
    r = !0;
  for (this.expect(l.braceL); !this.eat(l.braceR); ) {
    if (r) r = !1;
    else if ((this.expect(l.comma), this.afterTrailingComma(l.braceR))) break;
    var i = this.startNode();
    (i.local = this.parseModuleExportName()),
      (i.exported = this.eatContextual("as")
        ? this.parseModuleExportName()
        : i.local),
      this.checkExport(
        t,
        i.exported[i.exported.type === "Identifier" ? "name" : "value"],
        i.exported.start
      ),
      e.push(this.finishNode(i, "ExportSpecifier"));
  }
  return e;
};
K.parseImport = function (t) {
  return (
    this.next(),
    this.type === l.string
      ? ((t.specifiers = Hp), (t.source = this.parseExprAtom()))
      : ((t.specifiers = this.parseImportSpecifiers()),
        this.expectContextual("from"),
        (t.source =
          this.type === l.string ? this.parseExprAtom() : this.unexpected())),
    this.semicolon(),
    this.finishNode(t, "ImportDeclaration")
  );
};
K.parseImportSpecifiers = function () {
  var t = [],
    e = !0;
  if (this.type === l.name) {
    var r = this.startNode();
    if (
      ((r.local = this.parseIdent()),
      this.checkLValSimple(r.local, Mt),
      t.push(this.finishNode(r, "ImportDefaultSpecifier")),
      !this.eat(l.comma))
    )
      return t;
  }
  if (this.type === l.star) {
    var i = this.startNode();
    return (
      this.next(),
      this.expectContextual("as"),
      (i.local = this.parseIdent()),
      this.checkLValSimple(i.local, Mt),
      t.push(this.finishNode(i, "ImportNamespaceSpecifier")),
      t
    );
  }
  for (this.expect(l.braceL); !this.eat(l.braceR); ) {
    if (e) e = !1;
    else if ((this.expect(l.comma), this.afterTrailingComma(l.braceR))) break;
    var n = this.startNode();
    (n.imported = this.parseModuleExportName()),
      this.eatContextual("as")
        ? (n.local = this.parseIdent())
        : (this.checkUnreserved(n.imported), (n.local = n.imported)),
      this.checkLValSimple(n.local, Mt),
      t.push(this.finishNode(n, "ImportSpecifier"));
  }
  return t;
};
K.parseModuleExportName = function () {
  if (this.options.ecmaVersion >= 13 && this.type === l.string) {
    var t = this.parseLiteral(this.value);
    return (
      jp.test(t.value) &&
        this.raise(t.start, "An export name cannot include a lone surrogate."),
      t
    );
  }
  return this.parseIdent(!0);
};
K.adaptDirectivePrologue = function (t) {
  for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e)
    t[e].directive = t[e].expression.raw.slice(1, -1);
};
K.isDirectiveCandidate = function (t) {
  return (
    t.type === "ExpressionStatement" &&
    t.expression.type === "Literal" &&
    typeof t.expression.value == "string" &&
    (this.input[t.start] === '"' || this.input[t.start] === "'")
  );
};
var Dt = Ee.prototype;
Dt.toAssignable = function (t, e, r) {
  if (this.options.ecmaVersion >= 6 && t)
    switch (t.type) {
      case "Identifier":
        this.inAsync &&
          t.name === "await" &&
          this.raise(
            t.start,
            "Cannot use 'await' as identifier inside an async function"
          );
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        (t.type = "ObjectPattern"), r && this.checkPatternErrors(r, !0);
        for (var i = 0, n = t.properties; i < n.length; i += 1) {
          var s = n[i];
          this.toAssignable(s, e),
            s.type === "RestElement" &&
              (s.argument.type === "ArrayPattern" ||
                s.argument.type === "ObjectPattern") &&
              this.raise(s.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        t.kind !== "init" &&
          this.raise(
            t.key.start,
            "Object pattern can't contain getter or setter"
          ),
          this.toAssignable(t.value, e);
        break;
      case "ArrayExpression":
        (t.type = "ArrayPattern"),
          r && this.checkPatternErrors(r, !0),
          this.toAssignableList(t.elements, e);
        break;
      case "SpreadElement":
        (t.type = "RestElement"),
          this.toAssignable(t.argument, e),
          t.argument.type === "AssignmentPattern" &&
            this.raise(
              t.argument.start,
              "Rest elements cannot have a default value"
            );
        break;
      case "AssignmentExpression":
        t.operator !== "=" &&
          this.raise(
            t.left.end,
            "Only '=' operator can be used for specifying default value."
          ),
          (t.type = "AssignmentPattern"),
          delete t.operator,
          this.toAssignable(t.left, e);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(t.expression, e, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(
          t.start,
          "Optional chaining cannot appear in left-hand side"
        );
        break;
      case "MemberExpression":
        if (!e) break;
      default:
        this.raise(t.start, "Assigning to rvalue");
    }
  else r && this.checkPatternErrors(r, !0);
  return t;
};
Dt.toAssignableList = function (t, e) {
  for (var r = t.length, i = 0; i < r; i++) {
    var n = t[i];
    n && this.toAssignable(n, e);
  }
  if (r) {
    var s = t[r - 1];
    this.options.ecmaVersion === 6 &&
      e &&
      s &&
      s.type === "RestElement" &&
      s.argument.type !== "Identifier" &&
      this.unexpected(s.argument.start);
  }
  return t;
};
Dt.parseSpread = function (t) {
  var e = this.startNode();
  return (
    this.next(),
    (e.argument = this.parseMaybeAssign(!1, t)),
    this.finishNode(e, "SpreadElement")
  );
};
Dt.parseRestBinding = function () {
  var t = this.startNode();
  return (
    this.next(),
    this.options.ecmaVersion === 6 && this.type !== l.name && this.unexpected(),
    (t.argument = this.parseBindingAtom()),
    this.finishNode(t, "RestElement")
  );
};
Dt.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case l.bracketL:
        var t = this.startNode();
        return (
          this.next(),
          (t.elements = this.parseBindingList(l.bracketR, !0, !0)),
          this.finishNode(t, "ArrayPattern")
        );
      case l.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Dt.parseBindingList = function (t, e, r) {
  for (var i = [], n = !0; !this.eat(t); )
    if ((n ? (n = !1) : this.expect(l.comma), e && this.type === l.comma))
      i.push(null);
    else {
      if (r && this.afterTrailingComma(t)) break;
      if (this.type === l.ellipsis) {
        var s = this.parseRestBinding();
        this.parseBindingListItem(s),
          i.push(s),
          this.type === l.comma &&
            this.raise(
              this.start,
              "Comma is not permitted after the rest element"
            ),
          this.expect(t);
        break;
      } else {
        var a = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(a), i.push(a);
      }
    }
  return i;
};
Dt.parseBindingListItem = function (t) {
  return t;
};
Dt.parseMaybeDefault = function (t, e, r) {
  if (
    ((r = r || this.parseBindingAtom()),
    this.options.ecmaVersion < 6 || !this.eat(l.eq))
  )
    return r;
  var i = this.startNodeAt(t, e);
  return (
    (i.left = r),
    (i.right = this.parseMaybeAssign()),
    this.finishNode(i, "AssignmentPattern")
  );
};
Dt.checkLValSimple = function (t, e, r) {
  e === void 0 && (e = Gi);
  var i = e !== Gi;
  switch (t.type) {
    case "Identifier":
      this.strict &&
        this.reservedWordsStrictBind.test(t.name) &&
        this.raiseRecoverable(
          t.start,
          (i ? "Binding " : "Assigning to ") + t.name + " in strict mode"
        ),
        i &&
          (e === Mt &&
            t.name === "let" &&
            this.raiseRecoverable(
              t.start,
              "let is disallowed as a lexically bound name"
            ),
          r &&
            (ri(r, t.name) &&
              this.raiseRecoverable(t.start, "Argument name clash"),
            (r[t.name] = !0)),
          e !== Qo && this.declareName(t.name, e, t.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(
        t.start,
        "Optional chaining cannot appear in left-hand side"
      );
      break;
    case "MemberExpression":
      i && this.raiseRecoverable(t.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return (
        i && this.raiseRecoverable(t.start, "Binding parenthesized expression"),
        this.checkLValSimple(t.expression, e, r)
      );
    default:
      this.raise(t.start, (i ? "Binding" : "Assigning to") + " rvalue");
  }
};
Dt.checkLValPattern = function (t, e, r) {
  switch ((e === void 0 && (e = Gi), t.type)) {
    case "ObjectPattern":
      for (var i = 0, n = t.properties; i < n.length; i += 1) {
        var s = n[i];
        this.checkLValInnerPattern(s, e, r);
      }
      break;
    case "ArrayPattern":
      for (var a = 0, u = t.elements; a < u.length; a += 1) {
        var c = u[a];
        c && this.checkLValInnerPattern(c, e, r);
      }
      break;
    default:
      this.checkLValSimple(t, e, r);
  }
};
Dt.checkLValInnerPattern = function (t, e, r) {
  switch ((e === void 0 && (e = Gi), t.type)) {
    case "Property":
      this.checkLValInnerPattern(t.value, e, r);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(t.left, e, r);
      break;
    case "RestElement":
      this.checkLValPattern(t.argument, e, r);
      break;
    default:
      this.checkLValPattern(t, e, r);
  }
};
var lt = function (e, r, i, n, s) {
    (this.token = e),
      (this.isExpr = !!r),
      (this.preserveSpace = !!i),
      (this.override = n),
      (this.generator = !!s);
  },
  he = {
    b_stat: new lt("{", !1),
    b_expr: new lt("{", !0),
    b_tmpl: new lt("${", !1),
    p_stat: new lt("(", !1),
    p_expr: new lt("(", !0),
    q_tmpl: new lt("`", !0, !0, function (t) {
      return t.tryReadTemplateToken();
    }),
    f_stat: new lt("function", !1),
    f_expr: new lt("function", !0),
    f_expr_gen: new lt("function", !0, !1, null, !0),
    f_gen: new lt("function", !1, !1, null, !0),
  },
  kr = Ee.prototype;
kr.initialContext = function () {
  return [he.b_stat];
};
kr.curContext = function () {
  return this.context[this.context.length - 1];
};
kr.braceIsBlock = function (t) {
  var e = this.curContext();
  return e === he.f_expr || e === he.f_stat
    ? !0
    : t === l.colon && (e === he.b_stat || e === he.b_expr)
    ? !e.isExpr
    : t === l._return || (t === l.name && this.exprAllowed)
    ? He.test(this.input.slice(this.lastTokEnd, this.start))
    : t === l._else ||
      t === l.semi ||
      t === l.eof ||
      t === l.parenR ||
      t === l.arrow
    ? !0
    : t === l.braceL
    ? e === he.b_stat
    : t === l._var || t === l._const || t === l.name
    ? !1
    : !this.exprAllowed;
};
kr.inGeneratorContext = function () {
  for (var t = this.context.length - 1; t >= 1; t--) {
    var e = this.context[t];
    if (e.token === "function") return e.generator;
  }
  return !1;
};
kr.updateContext = function (t) {
  var e,
    r = this.type;
  r.keyword && t === l.dot
    ? (this.exprAllowed = !1)
    : (e = r.updateContext)
    ? e.call(this, t)
    : (this.exprAllowed = r.beforeExpr);
};
kr.overrideContext = function (t) {
  this.curContext() !== t && (this.context[this.context.length - 1] = t);
};
l.parenR.updateContext = l.braceR.updateContext = function () {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var t = this.context.pop();
  t === he.b_stat &&
    this.curContext().token === "function" &&
    (t = this.context.pop()),
    (this.exprAllowed = !t.isExpr);
};
l.braceL.updateContext = function (t) {
  this.context.push(this.braceIsBlock(t) ? he.b_stat : he.b_expr),
    (this.exprAllowed = !0);
};
l.dollarBraceL.updateContext = function () {
  this.context.push(he.b_tmpl), (this.exprAllowed = !0);
};
l.parenL.updateContext = function (t) {
  var e = t === l._if || t === l._for || t === l._with || t === l._while;
  this.context.push(e ? he.p_stat : he.p_expr), (this.exprAllowed = !0);
};
l.incDec.updateContext = function () {};
l._function.updateContext = l._class.updateContext = function (t) {
  t.beforeExpr &&
  t !== l._else &&
  !(t === l.semi && this.curContext() !== he.p_stat) &&
  !(
    t === l._return && He.test(this.input.slice(this.lastTokEnd, this.start))
  ) &&
  !((t === l.colon || t === l.braceL) && this.curContext() === he.b_stat)
    ? this.context.push(he.f_expr)
    : this.context.push(he.f_stat),
    (this.exprAllowed = !1);
};
l.backQuote.updateContext = function () {
  this.curContext() === he.q_tmpl
    ? this.context.pop()
    : this.context.push(he.q_tmpl),
    (this.exprAllowed = !1);
};
l.star.updateContext = function (t) {
  if (t === l._function) {
    var e = this.context.length - 1;
    this.context[e] === he.f_expr
      ? (this.context[e] = he.f_expr_gen)
      : (this.context[e] = he.f_gen);
  }
  this.exprAllowed = !0;
};
l.name.updateContext = function (t) {
  var e = !1;
  this.options.ecmaVersion >= 6 &&
    t !== l.dot &&
    ((this.value === "of" && !this.exprAllowed) ||
      (this.value === "yield" && this.inGeneratorContext())) &&
    (e = !0),
    (this.exprAllowed = e);
};
var X = Ee.prototype;
X.checkPropClash = function (t, e, r) {
  if (
    !(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") &&
    !(this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))
  ) {
    var i = t.key,
      n;
    switch (i.type) {
      case "Identifier":
        n = i.name;
        break;
      case "Literal":
        n = String(i.value);
        break;
      default:
        return;
    }
    var s = t.kind;
    if (this.options.ecmaVersion >= 6) {
      n === "__proto__" &&
        s === "init" &&
        (e.proto &&
          (r
            ? r.doubleProto < 0 && (r.doubleProto = i.start)
            : this.raiseRecoverable(
                i.start,
                "Redefinition of __proto__ property"
              )),
        (e.proto = !0));
      return;
    }
    n = "$" + n;
    var a = e[n];
    if (a) {
      var u;
      s === "init"
        ? (u = (this.strict && a.init) || a.get || a.set)
        : (u = a.init || a[s]),
        u && this.raiseRecoverable(i.start, "Redefinition of property");
    } else a = e[n] = { init: !1, get: !1, set: !1 };
    a[s] = !0;
  }
};
X.parseExpression = function (t, e) {
  var r = this.start,
    i = this.startLoc,
    n = this.parseMaybeAssign(t, e);
  if (this.type === l.comma) {
    var s = this.startNodeAt(r, i);
    for (s.expressions = [n]; this.eat(l.comma); )
      s.expressions.push(this.parseMaybeAssign(t, e));
    return this.finishNode(s, "SequenceExpression");
  }
  return n;
};
X.parseMaybeAssign = function (t, e, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) return this.parseYield(t);
    this.exprAllowed = !1;
  }
  var i = !1,
    n = -1,
    s = -1,
    a = -1;
  e
    ? ((n = e.parenthesizedAssign),
      (s = e.trailingComma),
      (a = e.doubleProto),
      (e.parenthesizedAssign = e.trailingComma = -1))
    : ((e = new zi()), (i = !0));
  var u = this.start,
    c = this.startLoc;
  (this.type === l.parenL || this.type === l.name) &&
    ((this.potentialArrowAt = this.start),
    (this.potentialArrowInForAwait = t === "await"));
  var m = this.parseMaybeConditional(t, e);
  if ((r && (m = r.call(this, m, u, c)), this.type.isAssign)) {
    var d = this.startNodeAt(u, c);
    return (
      (d.operator = this.value),
      this.type === l.eq && (m = this.toAssignable(m, !1, e)),
      i || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1),
      e.shorthandAssign >= m.start && (e.shorthandAssign = -1),
      this.type === l.eq ? this.checkLValPattern(m) : this.checkLValSimple(m),
      (d.left = m),
      this.next(),
      (d.right = this.parseMaybeAssign(t)),
      a > -1 && (e.doubleProto = a),
      this.finishNode(d, "AssignmentExpression")
    );
  } else i && this.checkExpressionErrors(e, !0);
  return (
    n > -1 && (e.parenthesizedAssign = n), s > -1 && (e.trailingComma = s), m
  );
};
X.parseMaybeConditional = function (t, e) {
  var r = this.start,
    i = this.startLoc,
    n = this.parseExprOps(t, e);
  if (this.checkExpressionErrors(e)) return n;
  if (this.eat(l.question)) {
    var s = this.startNodeAt(r, i);
    return (
      (s.test = n),
      (s.consequent = this.parseMaybeAssign()),
      this.expect(l.colon),
      (s.alternate = this.parseMaybeAssign(t)),
      this.finishNode(s, "ConditionalExpression")
    );
  }
  return n;
};
X.parseExprOps = function (t, e) {
  var r = this.start,
    i = this.startLoc,
    n = this.parseMaybeUnary(e, !1, !1, t);
  return this.checkExpressionErrors(e) ||
    (n.start === r && n.type === "ArrowFunctionExpression")
    ? n
    : this.parseExprOp(n, r, i, -1, t);
};
X.parseExprOp = function (t, e, r, i, n) {
  var s = this.type.binop;
  if (s != null && (!n || this.type !== l._in) && s > i) {
    var a = this.type === l.logicalOR || this.type === l.logicalAND,
      u = this.type === l.coalesce;
    u && (s = l.logicalAND.binop);
    var c = this.value;
    this.next();
    var m = this.start,
      d = this.startLoc,
      E = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, n), m, d, s, n),
      y = this.buildBinary(e, r, t, E, c, a || u);
    return (
      ((a && this.type === l.coalesce) ||
        (u && (this.type === l.logicalOR || this.type === l.logicalAND))) &&
        this.raiseRecoverable(
          this.start,
          "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
        ),
      this.parseExprOp(y, e, r, i, n)
    );
  }
  return t;
};
X.buildBinary = function (t, e, r, i, n, s) {
  i.type === "PrivateIdentifier" &&
    this.raise(
      i.start,
      "Private identifier can only be left side of binary expression"
    );
  var a = this.startNodeAt(t, e);
  return (
    (a.left = r),
    (a.operator = n),
    (a.right = i),
    this.finishNode(a, s ? "LogicalExpression" : "BinaryExpression")
  );
};
X.parseMaybeUnary = function (t, e, r, i) {
  var n = this.start,
    s = this.startLoc,
    a;
  if (this.isContextual("await") && this.canAwait)
    (a = this.parseAwait(i)), (e = !0);
  else if (this.type.prefix) {
    var u = this.startNode(),
      c = this.type === l.incDec;
    (u.operator = this.value),
      (u.prefix = !0),
      this.next(),
      (u.argument = this.parseMaybeUnary(null, !0, c, i)),
      this.checkExpressionErrors(t, !0),
      c
        ? this.checkLValSimple(u.argument)
        : this.strict &&
          u.operator === "delete" &&
          u.argument.type === "Identifier"
        ? this.raiseRecoverable(
            u.start,
            "Deleting local variable in strict mode"
          )
        : u.operator === "delete" && Xo(u.argument)
        ? this.raiseRecoverable(u.start, "Private fields can not be deleted")
        : (e = !0),
      (a = this.finishNode(u, c ? "UpdateExpression" : "UnaryExpression"));
  } else if (!e && this.type === l.privateId)
    (i || this.privateNameStack.length === 0) && this.unexpected(),
      (a = this.parsePrivateIdent()),
      this.type !== l._in && this.unexpected();
  else {
    if (((a = this.parseExprSubscripts(t, i)), this.checkExpressionErrors(t)))
      return a;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var m = this.startNodeAt(n, s);
      (m.operator = this.value),
        (m.prefix = !1),
        (m.argument = a),
        this.checkLValSimple(a),
        this.next(),
        (a = this.finishNode(m, "UpdateExpression"));
    }
  }
  if (!r && this.eat(l.starstar))
    if (e) this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(
        n,
        s,
        a,
        this.parseMaybeUnary(null, !1, !1, i),
        "**",
        !1
      );
  else return a;
};
function Xo(t) {
  return (
    (t.type === "MemberExpression" &&
      t.property.type === "PrivateIdentifier") ||
    (t.type === "ChainExpression" && Xo(t.expression))
  );
}
X.parseExprSubscripts = function (t, e) {
  var r = this.start,
    i = this.startLoc,
    n = this.parseExprAtom(t, e);
  if (
    n.type === "ArrowFunctionExpression" &&
    this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")"
  )
    return n;
  var s = this.parseSubscripts(n, r, i, !1, e);
  return (
    t &&
      s.type === "MemberExpression" &&
      (t.parenthesizedAssign >= s.start && (t.parenthesizedAssign = -1),
      t.parenthesizedBind >= s.start && (t.parenthesizedBind = -1),
      t.trailingComma >= s.start && (t.trailingComma = -1)),
    s
  );
};
X.parseSubscripts = function (t, e, r, i, n) {
  for (
    var s =
        this.options.ecmaVersion >= 8 &&
        t.type === "Identifier" &&
        t.name === "async" &&
        this.lastTokEnd === t.end &&
        !this.canInsertSemicolon() &&
        t.end - t.start === 5 &&
        this.potentialArrowAt === t.start,
      a = !1;
    ;

  ) {
    var u = this.parseSubscript(t, e, r, i, s, a, n);
    if (
      (u.optional && (a = !0), u === t || u.type === "ArrowFunctionExpression")
    ) {
      if (a) {
        var c = this.startNodeAt(e, r);
        (c.expression = u), (u = this.finishNode(c, "ChainExpression"));
      }
      return u;
    }
    t = u;
  }
};
X.parseSubscript = function (t, e, r, i, n, s, a) {
  var u = this.options.ecmaVersion >= 11,
    c = u && this.eat(l.questionDot);
  i &&
    c &&
    this.raise(
      this.lastTokStart,
      "Optional chaining cannot appear in the callee of new expressions"
    );
  var m = this.eat(l.bracketL);
  if (
    m ||
    (c && this.type !== l.parenL && this.type !== l.backQuote) ||
    this.eat(l.dot)
  ) {
    var d = this.startNodeAt(e, r);
    (d.object = t),
      m
        ? ((d.property = this.parseExpression()), this.expect(l.bracketR))
        : this.type === l.privateId && t.type !== "Super"
        ? (d.property = this.parsePrivateIdent())
        : (d.property = this.parseIdent(
            this.options.allowReserved !== "never"
          )),
      (d.computed = !!m),
      u && (d.optional = c),
      (t = this.finishNode(d, "MemberExpression"));
  } else if (!i && this.eat(l.parenL)) {
    var E = new zi(),
      y = this.yieldPos,
      x = this.awaitPos,
      b = this.awaitIdentPos;
    (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
    var w = this.parseExprList(l.parenR, this.options.ecmaVersion >= 8, !1, E);
    if (n && !c && !this.canInsertSemicolon() && this.eat(l.arrow))
      return (
        this.checkPatternErrors(E, !1),
        this.checkYieldAwaitInDefaultParams(),
        this.awaitIdentPos > 0 &&
          this.raise(
            this.awaitIdentPos,
            "Cannot use 'await' as identifier inside an async function"
          ),
        (this.yieldPos = y),
        (this.awaitPos = x),
        (this.awaitIdentPos = b),
        this.parseArrowExpression(this.startNodeAt(e, r), w, !0, a)
      );
    this.checkExpressionErrors(E, !0),
      (this.yieldPos = y || this.yieldPos),
      (this.awaitPos = x || this.awaitPos),
      (this.awaitIdentPos = b || this.awaitIdentPos);
    var _ = this.startNodeAt(e, r);
    (_.callee = t),
      (_.arguments = w),
      u && (_.optional = c),
      (t = this.finishNode(_, "CallExpression"));
  } else if (this.type === l.backQuote) {
    (c || s) &&
      this.raise(
        this.start,
        "Optional chaining cannot appear in the tag of tagged template expressions"
      );
    var O = this.startNodeAt(e, r);
    (O.tag = t),
      (O.quasi = this.parseTemplate({ isTagged: !0 })),
      (t = this.finishNode(O, "TaggedTemplateExpression"));
  }
  return t;
};
X.parseExprAtom = function (t, e) {
  this.type === l.slash && this.readRegexp();
  var r,
    i = this.potentialArrowAt === this.start;
  switch (this.type) {
    case l._super:
      return (
        this.allowSuper ||
          this.raise(this.start, "'super' keyword outside a method"),
        (r = this.startNode()),
        this.next(),
        this.type === l.parenL &&
          !this.allowDirectSuper &&
          this.raise(r.start, "super() call outside constructor of a subclass"),
        this.type !== l.dot &&
          this.type !== l.bracketL &&
          this.type !== l.parenL &&
          this.unexpected(),
        this.finishNode(r, "Super")
      );
    case l._this:
      return (
        (r = this.startNode()),
        this.next(),
        this.finishNode(r, "ThisExpression")
      );
    case l.name:
      var n = this.start,
        s = this.startLoc,
        a = this.containsEsc,
        u = this.parseIdent(!1);
      if (
        this.options.ecmaVersion >= 8 &&
        !a &&
        u.name === "async" &&
        !this.canInsertSemicolon() &&
        this.eat(l._function)
      )
        return (
          this.overrideContext(he.f_expr),
          this.parseFunction(this.startNodeAt(n, s), 0, !1, !0, e)
        );
      if (i && !this.canInsertSemicolon()) {
        if (this.eat(l.arrow))
          return this.parseArrowExpression(this.startNodeAt(n, s), [u], !1, e);
        if (
          this.options.ecmaVersion >= 8 &&
          u.name === "async" &&
          this.type === l.name &&
          !a &&
          (!this.potentialArrowInForAwait ||
            this.value !== "of" ||
            this.containsEsc)
        )
          return (
            (u = this.parseIdent(!1)),
            (this.canInsertSemicolon() || !this.eat(l.arrow)) &&
              this.unexpected(),
            this.parseArrowExpression(this.startNodeAt(n, s), [u], !0, e)
          );
      }
      return u;
    case l.regexp:
      var c = this.value;
      return (
        (r = this.parseLiteral(c.value)),
        (r.regex = { pattern: c.pattern, flags: c.flags }),
        r
      );
    case l.num:
    case l.string:
      return this.parseLiteral(this.value);
    case l._null:
    case l._true:
    case l._false:
      return (
        (r = this.startNode()),
        (r.value = this.type === l._null ? null : this.type === l._true),
        (r.raw = this.type.keyword),
        this.next(),
        this.finishNode(r, "Literal")
      );
    case l.parenL:
      var m = this.start,
        d = this.parseParenAndDistinguishExpression(i, e);
      return (
        t &&
          (t.parenthesizedAssign < 0 &&
            !this.isSimpleAssignTarget(d) &&
            (t.parenthesizedAssign = m),
          t.parenthesizedBind < 0 && (t.parenthesizedBind = m)),
        d
      );
    case l.bracketL:
      return (
        (r = this.startNode()),
        this.next(),
        (r.elements = this.parseExprList(l.bracketR, !0, !0, t)),
        this.finishNode(r, "ArrayExpression")
      );
    case l.braceL:
      return this.overrideContext(he.b_expr), this.parseObj(!1, t);
    case l._function:
      return (r = this.startNode()), this.next(), this.parseFunction(r, 0);
    case l._class:
      return this.parseClass(this.startNode(), !1);
    case l._new:
      return this.parseNew();
    case l.backQuote:
      return this.parseTemplate();
    case l._import:
      return this.options.ecmaVersion >= 11
        ? this.parseExprImport()
        : this.unexpected();
    default:
      this.unexpected();
  }
};
X.parseExprImport = function () {
  var t = this.startNode();
  this.containsEsc &&
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var e = this.parseIdent(!0);
  switch (this.type) {
    case l.parenL:
      return this.parseDynamicImport(t);
    case l.dot:
      return (t.meta = e), this.parseImportMeta(t);
    default:
      this.unexpected();
  }
};
X.parseDynamicImport = function (t) {
  if (
    (this.next(), (t.source = this.parseMaybeAssign()), !this.eat(l.parenR))
  ) {
    var e = this.start;
    this.eat(l.comma) && this.eat(l.parenR)
      ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()")
      : this.unexpected(e);
  }
  return this.finishNode(t, "ImportExpression");
};
X.parseImportMeta = function (t) {
  this.next();
  var e = this.containsEsc;
  return (
    (t.property = this.parseIdent(!0)),
    t.property.name !== "meta" &&
      this.raiseRecoverable(
        t.property.start,
        "The only valid meta property for import is 'import.meta'"
      ),
    e &&
      this.raiseRecoverable(
        t.start,
        "'import.meta' must not contain escaped characters"
      ),
    this.options.sourceType !== "module" &&
      !this.options.allowImportExportEverywhere &&
      this.raiseRecoverable(
        t.start,
        "Cannot use 'import.meta' outside a module"
      ),
    this.finishNode(t, "MetaProperty")
  );
};
X.parseLiteral = function (t) {
  var e = this.startNode();
  return (
    (e.value = t),
    (e.raw = this.input.slice(this.start, this.end)),
    e.raw.charCodeAt(e.raw.length - 1) === 110 &&
      (e.bigint = e.raw.slice(0, -1).replace(/_/g, "")),
    this.next(),
    this.finishNode(e, "Literal")
  );
};
X.parseParenExpression = function () {
  this.expect(l.parenL);
  var t = this.parseExpression();
  return this.expect(l.parenR), t;
};
X.parseParenAndDistinguishExpression = function (t, e) {
  var r = this.start,
    i = this.startLoc,
    n,
    s = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start,
      u = this.startLoc,
      c = [],
      m = !0,
      d = !1,
      E = new zi(),
      y = this.yieldPos,
      x = this.awaitPos,
      b;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== l.parenR; )
      if (
        (m ? (m = !1) : this.expect(l.comma),
        s && this.afterTrailingComma(l.parenR, !0))
      ) {
        d = !0;
        break;
      } else if (this.type === l.ellipsis) {
        (b = this.start),
          c.push(this.parseParenItem(this.parseRestBinding())),
          this.type === l.comma &&
            this.raise(
              this.start,
              "Comma is not permitted after the rest element"
            );
        break;
      } else c.push(this.parseMaybeAssign(!1, E, this.parseParenItem));
    var w = this.lastTokEnd,
      _ = this.lastTokEndLoc;
    if (
      (this.expect(l.parenR),
      t && !this.canInsertSemicolon() && this.eat(l.arrow))
    )
      return (
        this.checkPatternErrors(E, !1),
        this.checkYieldAwaitInDefaultParams(),
        (this.yieldPos = y),
        (this.awaitPos = x),
        this.parseParenArrowList(r, i, c, e)
      );
    (!c.length || d) && this.unexpected(this.lastTokStart),
      b && this.unexpected(b),
      this.checkExpressionErrors(E, !0),
      (this.yieldPos = y || this.yieldPos),
      (this.awaitPos = x || this.awaitPos),
      c.length > 1
        ? ((n = this.startNodeAt(a, u)),
          (n.expressions = c),
          this.finishNodeAt(n, "SequenceExpression", w, _))
        : (n = c[0]);
  } else n = this.parseParenExpression();
  if (this.options.preserveParens) {
    var O = this.startNodeAt(r, i);
    return (O.expression = n), this.finishNode(O, "ParenthesizedExpression");
  } else return n;
};
X.parseParenItem = function (t) {
  return t;
};
X.parseParenArrowList = function (t, e, r, i) {
  return this.parseArrowExpression(this.startNodeAt(t, e), r, !1, i);
};
var Yp = [];
X.parseNew = function () {
  this.containsEsc &&
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var t = this.startNode(),
    e = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(l.dot)) {
    t.meta = e;
    var r = this.containsEsc;
    return (
      (t.property = this.parseIdent(!0)),
      t.property.name !== "target" &&
        this.raiseRecoverable(
          t.property.start,
          "The only valid meta property for new is 'new.target'"
        ),
      r &&
        this.raiseRecoverable(
          t.start,
          "'new.target' must not contain escaped characters"
        ),
      this.allowNewDotTarget ||
        this.raiseRecoverable(
          t.start,
          "'new.target' can only be used in functions and class static block"
        ),
      this.finishNode(t, "MetaProperty")
    );
  }
  var i = this.start,
    n = this.startLoc,
    s = this.type === l._import;
  return (
    (t.callee = this.parseSubscripts(this.parseExprAtom(), i, n, !0, !1)),
    s &&
      t.callee.type === "ImportExpression" &&
      this.raise(i, "Cannot use new with import()"),
    this.eat(l.parenL)
      ? (t.arguments = this.parseExprList(
          l.parenR,
          this.options.ecmaVersion >= 8,
          !1
        ))
      : (t.arguments = Yp),
    this.finishNode(t, "NewExpression")
  );
};
X.parseTemplateElement = function (t) {
  var e = t.isTagged,
    r = this.startNode();
  return (
    this.type === l.invalidTemplate
      ? (e ||
          this.raiseRecoverable(
            this.start,
            "Bad escape sequence in untagged template literal"
          ),
        (r.value = { raw: this.value, cooked: null }))
      : (r.value = {
          raw: this.input.slice(this.start, this.end).replace(
            /\r\n?/g,
            `
`
          ),
          cooked: this.value,
        }),
    this.next(),
    (r.tail = this.type === l.backQuote),
    this.finishNode(r, "TemplateElement")
  );
};
X.parseTemplate = function (t) {
  t === void 0 && (t = {});
  var e = t.isTagged;
  e === void 0 && (e = !1);
  var r = this.startNode();
  this.next(), (r.expressions = []);
  var i = this.parseTemplateElement({ isTagged: e });
  for (r.quasis = [i]; !i.tail; )
    this.type === l.eof &&
      this.raise(this.pos, "Unterminated template literal"),
      this.expect(l.dollarBraceL),
      r.expressions.push(this.parseExpression()),
      this.expect(l.braceR),
      r.quasis.push((i = this.parseTemplateElement({ isTagged: e })));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
X.isAsyncProp = function (t) {
  return (
    !t.computed &&
    t.key.type === "Identifier" &&
    t.key.name === "async" &&
    (this.type === l.name ||
      this.type === l.num ||
      this.type === l.string ||
      this.type === l.bracketL ||
      this.type.keyword ||
      (this.options.ecmaVersion >= 9 && this.type === l.star)) &&
    !He.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
X.parseObj = function (t, e) {
  var r = this.startNode(),
    i = !0,
    n = {};
  for (r.properties = [], this.next(); !this.eat(l.braceR); ) {
    if (i) i = !1;
    else if (
      (this.expect(l.comma),
      this.options.ecmaVersion >= 5 && this.afterTrailingComma(l.braceR))
    )
      break;
    var s = this.parseProperty(t, e);
    t || this.checkPropClash(s, n, e), r.properties.push(s);
  }
  return this.finishNode(r, t ? "ObjectPattern" : "ObjectExpression");
};
X.parseProperty = function (t, e) {
  var r = this.startNode(),
    i,
    n,
    s,
    a;
  if (this.options.ecmaVersion >= 9 && this.eat(l.ellipsis))
    return t
      ? ((r.argument = this.parseIdent(!1)),
        this.type === l.comma &&
          this.raise(
            this.start,
            "Comma is not permitted after the rest element"
          ),
        this.finishNode(r, "RestElement"))
      : (this.type === l.parenL &&
          e &&
          (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start),
          e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)),
        (r.argument = this.parseMaybeAssign(!1, e)),
        this.type === l.comma &&
          e &&
          e.trailingComma < 0 &&
          (e.trailingComma = this.start),
        this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 &&
    ((r.method = !1),
    (r.shorthand = !1),
    (t || e) && ((s = this.start), (a = this.startLoc)),
    t || (i = this.eat(l.star)));
  var u = this.containsEsc;
  return (
    this.parsePropertyName(r),
    !t && !u && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(r)
      ? ((n = !0),
        (i = this.options.ecmaVersion >= 9 && this.eat(l.star)),
        this.parsePropertyName(r, e))
      : (n = !1),
    this.parsePropertyValue(r, t, i, n, s, a, e, u),
    this.finishNode(r, "Property")
  );
};
X.parsePropertyValue = function (t, e, r, i, n, s, a, u) {
  if (
    ((r || i) && this.type === l.colon && this.unexpected(), this.eat(l.colon))
  )
    (t.value = e
      ? this.parseMaybeDefault(this.start, this.startLoc)
      : this.parseMaybeAssign(!1, a)),
      (t.kind = "init");
  else if (this.options.ecmaVersion >= 6 && this.type === l.parenL)
    e && this.unexpected(),
      (t.kind = "init"),
      (t.method = !0),
      (t.value = this.parseMethod(r, i));
  else if (
    !e &&
    !u &&
    this.options.ecmaVersion >= 5 &&
    !t.computed &&
    t.key.type === "Identifier" &&
    (t.key.name === "get" || t.key.name === "set") &&
    this.type !== l.comma &&
    this.type !== l.braceR &&
    this.type !== l.eq
  ) {
    (r || i) && this.unexpected(),
      (t.kind = t.key.name),
      this.parsePropertyName(t),
      (t.value = this.parseMethod(!1));
    var c = t.kind === "get" ? 0 : 1;
    if (t.value.params.length !== c) {
      var m = t.value.start;
      t.kind === "get"
        ? this.raiseRecoverable(m, "getter should have no params")
        : this.raiseRecoverable(m, "setter should have exactly one param");
    } else
      t.kind === "set" &&
        t.value.params[0].type === "RestElement" &&
        this.raiseRecoverable(
          t.value.params[0].start,
          "Setter cannot use rest params"
        );
  } else
    this.options.ecmaVersion >= 6 && !t.computed && t.key.type === "Identifier"
      ? ((r || i) && this.unexpected(),
        this.checkUnreserved(t.key),
        t.key.name === "await" &&
          !this.awaitIdentPos &&
          (this.awaitIdentPos = n),
        (t.kind = "init"),
        e
          ? (t.value = this.parseMaybeDefault(n, s, this.copyNode(t.key)))
          : this.type === l.eq && a
          ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start),
            (t.value = this.parseMaybeDefault(n, s, this.copyNode(t.key))))
          : (t.value = this.copyNode(t.key)),
        (t.shorthand = !0))
      : this.unexpected();
};
X.parsePropertyName = function (t) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(l.bracketL))
      return (
        (t.computed = !0),
        (t.key = this.parseMaybeAssign()),
        this.expect(l.bracketR),
        t.key
      );
    t.computed = !1;
  }
  return (t.key =
    this.type === l.num || this.type === l.string
      ? this.parseExprAtom()
      : this.parseIdent(this.options.allowReserved !== "never"));
};
X.initFunction = function (t) {
  (t.id = null),
    this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1),
    this.options.ecmaVersion >= 8 && (t.async = !1);
};
X.parseMethod = function (t, e, r) {
  var i = this.startNode(),
    n = this.yieldPos,
    s = this.awaitPos,
    a = this.awaitIdentPos;
  return (
    this.initFunction(i),
    this.options.ecmaVersion >= 6 && (i.generator = t),
    this.options.ecmaVersion >= 8 && (i.async = !!e),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(As(e, i.generator) | xs | (r ? Ho : 0)),
    this.expect(l.parenL),
    (i.params = this.parseBindingList(
      l.parenR,
      !1,
      this.options.ecmaVersion >= 8
    )),
    this.checkYieldAwaitInDefaultParams(),
    this.parseFunctionBody(i, !1, !0, !1),
    (this.yieldPos = n),
    (this.awaitPos = s),
    (this.awaitIdentPos = a),
    this.finishNode(i, "FunctionExpression")
  );
};
X.parseArrowExpression = function (t, e, r, i) {
  var n = this.yieldPos,
    s = this.awaitPos,
    a = this.awaitIdentPos;
  return (
    this.enterScope(As(r, !1) | zo),
    this.initFunction(t),
    this.options.ecmaVersion >= 8 && (t.async = !!r),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    (t.params = this.toAssignableList(e, !0)),
    this.parseFunctionBody(t, !0, !1, i),
    (this.yieldPos = n),
    (this.awaitPos = s),
    (this.awaitIdentPos = a),
    this.finishNode(t, "ArrowFunctionExpression")
  );
};
X.parseFunctionBody = function (t, e, r, i) {
  var n = e && this.type !== l.braceL,
    s = this.strict,
    a = !1;
  if (n)
    (t.body = this.parseMaybeAssign(i)),
      (t.expression = !0),
      this.checkParams(t, !1);
  else {
    var u = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
    (!s || u) &&
      ((a = this.strictDirective(this.end)),
      a &&
        u &&
        this.raiseRecoverable(
          t.start,
          "Illegal 'use strict' directive in function with non-simple parameter list"
        ));
    var c = this.labels;
    (this.labels = []),
      a && (this.strict = !0),
      this.checkParams(
        t,
        !s && !a && !e && !r && this.isSimpleParamList(t.params)
      ),
      this.strict && t.id && this.checkLValSimple(t.id, Qo),
      (t.body = this.parseBlock(!1, void 0, a && !s)),
      (t.expression = !1),
      this.adaptDirectivePrologue(t.body.body),
      (this.labels = c);
  }
  this.exitScope();
};
X.isSimpleParamList = function (t) {
  for (var e = 0, r = t; e < r.length; e += 1) {
    var i = r[e];
    if (i.type !== "Identifier") return !1;
  }
  return !0;
};
X.checkParams = function (t, e) {
  for (var r = Object.create(null), i = 0, n = t.params; i < n.length; i += 1) {
    var s = n[i];
    this.checkLValInnerPattern(s, vs, e ? null : r);
  }
};
X.parseExprList = function (t, e, r, i) {
  for (var n = [], s = !0; !this.eat(t); ) {
    if (s) s = !1;
    else if ((this.expect(l.comma), e && this.afterTrailingComma(t))) break;
    var a = void 0;
    r && this.type === l.comma
      ? (a = null)
      : this.type === l.ellipsis
      ? ((a = this.parseSpread(i)),
        i &&
          this.type === l.comma &&
          i.trailingComma < 0 &&
          (i.trailingComma = this.start))
      : (a = this.parseMaybeAssign(!1, i)),
      n.push(a);
  }
  return n;
};
X.checkUnreserved = function (t) {
  var e = t.start,
    r = t.end,
    i = t.name;
  if (
    (this.inGenerator &&
      i === "yield" &&
      this.raiseRecoverable(
        e,
        "Cannot use 'yield' as identifier inside a generator"
      ),
    this.inAsync &&
      i === "await" &&
      this.raiseRecoverable(
        e,
        "Cannot use 'await' as identifier inside an async function"
      ),
    this.currentThisScope().inClassFieldInit &&
      i === "arguments" &&
      this.raiseRecoverable(
        e,
        "Cannot use 'arguments' in class field initializer"
      ),
    this.inClassStaticBlock &&
      (i === "arguments" || i === "await") &&
      this.raise(
        e,
        "Cannot use " + i + " in class static initialization block"
      ),
    this.keywords.test(i) && this.raise(e, "Unexpected keyword '" + i + "'"),
    !(
      this.options.ecmaVersion < 6 &&
      this.input.slice(e, r).indexOf("\\") !== -1
    ))
  ) {
    var n = this.strict ? this.reservedWordsStrict : this.reservedWords;
    n.test(i) &&
      (!this.inAsync &&
        i === "await" &&
        this.raiseRecoverable(
          e,
          "Cannot use keyword 'await' outside an async function"
        ),
      this.raiseRecoverable(e, "The keyword '" + i + "' is reserved"));
  }
};
X.parseIdent = function (t, e) {
  var r = this.startNode();
  return (
    this.type === l.name
      ? (r.name = this.value)
      : this.type.keyword
      ? ((r.name = this.type.keyword),
        (r.name === "class" || r.name === "function") &&
          (this.lastTokEnd !== this.lastTokStart + 1 ||
            this.input.charCodeAt(this.lastTokStart) !== 46) &&
          this.context.pop())
      : this.unexpected(),
    this.next(!!t),
    this.finishNode(r, "Identifier"),
    t ||
      (this.checkUnreserved(r),
      r.name === "await" &&
        !this.awaitIdentPos &&
        (this.awaitIdentPos = r.start)),
    r
  );
};
X.parsePrivateIdent = function () {
  var t = this.startNode();
  return (
    this.type === l.privateId ? (t.name = this.value) : this.unexpected(),
    this.next(),
    this.finishNode(t, "PrivateIdentifier"),
    this.privateNameStack.length === 0
      ? this.raise(
          t.start,
          "Private field '#" +
            t.name +
            "' must be declared in an enclosing class"
        )
      : this.privateNameStack[this.privateNameStack.length - 1].used.push(t),
    t
  );
};
X.parseYield = function (t) {
  this.yieldPos || (this.yieldPos = this.start);
  var e = this.startNode();
  return (
    this.next(),
    this.type === l.semi ||
    this.canInsertSemicolon() ||
    (this.type !== l.star && !this.type.startsExpr)
      ? ((e.delegate = !1), (e.argument = null))
      : ((e.delegate = this.eat(l.star)),
        (e.argument = this.parseMaybeAssign(t))),
    this.finishNode(e, "YieldExpression")
  );
};
X.parseAwait = function (t) {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return (
    this.next(),
    (e.argument = this.parseMaybeUnary(null, !0, !1, t)),
    this.finishNode(e, "AwaitExpression")
  );
};
var ji = Ee.prototype;
ji.raise = function (t, e) {
  var r = or(this.input, t);
  e += " (" + r.line + ":" + r.column + ")";
  var i = new SyntaxError(e);
  throw ((i.pos = t), (i.loc = r), (i.raisedAt = this.pos), i);
};
ji.raiseRecoverable = ji.raise;
ji.curPosition = function () {
  if (this.options.locations)
    return new wr(this.curLine, this.pos - this.lineStart);
};
var Ht = Ee.prototype,
  Qp = function (e) {
    (this.flags = e),
      (this.var = []),
      (this.lexical = []),
      (this.functions = []),
      (this.inClassFieldInit = !1);
  };
Ht.enterScope = function (t) {
  this.scopeStack.push(new Qp(t));
};
Ht.exitScope = function () {
  this.scopeStack.pop();
};
Ht.treatFunctionsAsVarInScope = function (t) {
  return t.flags & Br || (!this.inModule && t.flags & ei);
};
Ht.declareName = function (t, e, r) {
  var i = !1;
  if (e === Mt) {
    var n = this.currentScope();
    (i =
      n.lexical.indexOf(t) > -1 ||
      n.functions.indexOf(t) > -1 ||
      n.var.indexOf(t) > -1),
      n.lexical.push(t),
      this.inModule && n.flags & ei && delete this.undefinedExports[t];
  } else if (e === Yo) {
    var s = this.currentScope();
    s.lexical.push(t);
  } else if (e === Ko) {
    var a = this.currentScope();
    this.treatFunctionsAsVar
      ? (i = a.lexical.indexOf(t) > -1)
      : (i = a.lexical.indexOf(t) > -1 || a.var.indexOf(t) > -1),
      a.functions.push(t);
  } else
    for (var u = this.scopeStack.length - 1; u >= 0; --u) {
      var c = this.scopeStack[u];
      if (
        (c.lexical.indexOf(t) > -1 && !(c.flags & $o && c.lexical[0] === t)) ||
        (!this.treatFunctionsAsVarInScope(c) && c.functions.indexOf(t) > -1)
      ) {
        i = !0;
        break;
      }
      if (
        (c.var.push(t),
        this.inModule && c.flags & ei && delete this.undefinedExports[t],
        c.flags & bs)
      )
        break;
    }
  i &&
    this.raiseRecoverable(
      r,
      "Identifier '" + t + "' has already been declared"
    );
};
Ht.checkLocalExport = function (t) {
  this.scopeStack[0].lexical.indexOf(t.name) === -1 &&
    this.scopeStack[0].var.indexOf(t.name) === -1 &&
    (this.undefinedExports[t.name] = t);
};
Ht.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
Ht.currentVarScope = function () {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & bs) return e;
  }
};
Ht.currentThisScope = function () {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & bs && !(e.flags & zo)) return e;
  }
};
var Vt = function (e, r, i) {
    (this.type = ""),
      (this.start = r),
      (this.end = 0),
      e.options.locations && (this.loc = new $t(e, i)),
      e.options.directSourceFile &&
        (this.sourceFile = e.options.directSourceFile),
      e.options.ranges && (this.range = [r, 0]);
  },
  ni = Ee.prototype;
ni.startNode = function () {
  return new Vt(this, this.start, this.startLoc);
};
ni.startNodeAt = function (t, e) {
  return new Vt(this, t, e);
};
function Zo(t, e, r, i) {
  return (
    (t.type = e),
    (t.end = r),
    this.options.locations && (t.loc.end = i),
    this.options.ranges && (t.range[1] = r),
    t
  );
}
ni.finishNode = function (t, e) {
  return Zo.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
};
ni.finishNodeAt = function (t, e, r, i) {
  return Zo.call(this, t, e, r, i);
};
ni.copyNode = function (t) {
  var e = new Vt(this, t.start, this.startLoc);
  for (var r in t) e[r] = t[r];
  return e;
};
var eu =
    "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
  tu = eu + " Extended_Pictographic",
  ru = tu,
  iu = ru + " EBase EComp EMod EPres ExtPict",
  Jp = iu,
  Xp = { 9: eu, 10: tu, 11: ru, 12: iu, 13: Jp },
  Mo =
    "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
  nu =
    "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
  su =
    nu +
    " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
  au =
    su +
    " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
  ou =
    au +
    " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
  Zp = ou + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
  eh = { 9: nu, 10: su, 11: au, 12: ou, 13: Zp },
  uu = {};
function th(t) {
  var e = (uu[t] = {
    binary: sr(Xp[t] + " " + Mo),
    nonBinary: { General_Category: sr(Mo), Script: sr(eh[t]) },
  });
  (e.nonBinary.Script_Extensions = e.nonBinary.Script),
    (e.nonBinary.gc = e.nonBinary.General_Category),
    (e.nonBinary.sc = e.nonBinary.Script),
    (e.nonBinary.scx = e.nonBinary.Script_Extensions);
}
for (Vi = 0, hs = [9, 10, 11, 12, 13]; Vi < hs.length; Vi += 1)
  (Vo = hs[Vi]), th(Vo);
var Vo,
  Vi,
  hs,
  z = Ee.prototype,
  Gt = function (e) {
    (this.parser = e),
      (this.validFlags =
        "gim" +
        (e.options.ecmaVersion >= 6 ? "uy" : "") +
        (e.options.ecmaVersion >= 9 ? "s" : "") +
        (e.options.ecmaVersion >= 13 ? "d" : "")),
      (this.unicodeProperties =
        uu[e.options.ecmaVersion >= 13 ? 13 : e.options.ecmaVersion]),
      (this.source = ""),
      (this.flags = ""),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ""),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = []);
  };
Gt.prototype.reset = function (e, r, i) {
  var n = i.indexOf("u") !== -1;
  (this.start = e | 0),
    (this.source = r + ""),
    (this.flags = i),
    (this.switchU = n && this.parser.options.ecmaVersion >= 6),
    (this.switchN = n && this.parser.options.ecmaVersion >= 9);
};
Gt.prototype.raise = function (e) {
  this.parser.raiseRecoverable(
    this.start,
    "Invalid regular expression: /" + this.source + "/: " + e
  );
};
Gt.prototype.at = function (e, r) {
  r === void 0 && (r = !1);
  var i = this.source,
    n = i.length;
  if (e >= n) return -1;
  var s = i.charCodeAt(e);
  if (!(r || this.switchU) || s <= 55295 || s >= 57344 || e + 1 >= n) return s;
  var a = i.charCodeAt(e + 1);
  return a >= 56320 && a <= 57343 ? (s << 10) + a - 56613888 : s;
};
Gt.prototype.nextIndex = function (e, r) {
  r === void 0 && (r = !1);
  var i = this.source,
    n = i.length;
  if (e >= n) return n;
  var s = i.charCodeAt(e),
    a;
  return !(r || this.switchU) ||
    s <= 55295 ||
    s >= 57344 ||
    e + 1 >= n ||
    (a = i.charCodeAt(e + 1)) < 56320 ||
    a > 57343
    ? e + 1
    : e + 2;
};
Gt.prototype.current = function (e) {
  return e === void 0 && (e = !1), this.at(this.pos, e);
};
Gt.prototype.lookahead = function (e) {
  return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
};
Gt.prototype.advance = function (e) {
  e === void 0 && (e = !1), (this.pos = this.nextIndex(this.pos, e));
};
Gt.prototype.eat = function (e, r) {
  return (
    r === void 0 && (r = !1), this.current(r) === e ? (this.advance(r), !0) : !1
  );
};
function Ui(t) {
  return t <= 65535
    ? String.fromCharCode(t)
    : ((t -= 65536),
      String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
z.validateRegExpFlags = function (t) {
  for (var e = t.validFlags, r = t.flags, i = 0; i < r.length; i++) {
    var n = r.charAt(i);
    e.indexOf(n) === -1 &&
      this.raise(t.start, "Invalid regular expression flag"),
      r.indexOf(n, i + 1) > -1 &&
        this.raise(t.start, "Duplicate regular expression flag");
  }
};
z.validateRegExpPattern = function (t) {
  this.regexp_pattern(t),
    !t.switchN &&
      this.options.ecmaVersion >= 9 &&
      t.groupNames.length > 0 &&
      ((t.switchN = !0), this.regexp_pattern(t));
};
z.regexp_pattern = function (t) {
  (t.pos = 0),
    (t.lastIntValue = 0),
    (t.lastStringValue = ""),
    (t.lastAssertionIsQuantifiable = !1),
    (t.numCapturingParens = 0),
    (t.maxBackReference = 0),
    (t.groupNames.length = 0),
    (t.backReferenceNames.length = 0),
    this.regexp_disjunction(t),
    t.pos !== t.source.length &&
      (t.eat(41) && t.raise("Unmatched ')'"),
      (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")),
    t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
  for (var e = 0, r = t.backReferenceNames; e < r.length; e += 1) {
    var i = r[e];
    t.groupNames.indexOf(i) === -1 &&
      t.raise("Invalid named capture referenced");
  }
};
z.regexp_disjunction = function (t) {
  for (this.regexp_alternative(t); t.eat(124); ) this.regexp_alternative(t);
  this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"),
    t.eat(123) && t.raise("Lone quantifier brackets");
};
z.regexp_alternative = function (t) {
  for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
};
z.regexp_eatTerm = function (t) {
  return this.regexp_eatAssertion(t)
    ? (t.lastAssertionIsQuantifiable &&
        this.regexp_eatQuantifier(t) &&
        t.switchU &&
        t.raise("Invalid quantifier"),
      !0)
    : (t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t))
    ? (this.regexp_eatQuantifier(t), !0)
    : !1;
};
z.regexp_eatAssertion = function (t) {
  var e = t.pos;
  if (((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36))) return !0;
  if (t.eat(92)) {
    if (t.eat(66) || t.eat(98)) return !0;
    t.pos = e;
  }
  if (t.eat(40) && t.eat(63)) {
    var r = !1;
    if (
      (this.options.ecmaVersion >= 9 && (r = t.eat(60)), t.eat(61) || t.eat(33))
    )
      return (
        this.regexp_disjunction(t),
        t.eat(41) || t.raise("Unterminated group"),
        (t.lastAssertionIsQuantifiable = !r),
        !0
      );
  }
  return (t.pos = e), !1;
};
z.regexp_eatQuantifier = function (t, e) {
  return (
    e === void 0 && (e = !1),
    this.regexp_eatQuantifierPrefix(t, e) ? (t.eat(63), !0) : !1
  );
};
z.regexp_eatQuantifierPrefix = function (t, e) {
  return (
    t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
  );
};
z.regexp_eatBracedQuantifier = function (t, e) {
  var r = t.pos;
  if (t.eat(123)) {
    var i = 0,
      n = -1;
    if (
      this.regexp_eatDecimalDigits(t) &&
      ((i = t.lastIntValue),
      t.eat(44) && this.regexp_eatDecimalDigits(t) && (n = t.lastIntValue),
      t.eat(125))
    )
      return (
        n !== -1 &&
          n < i &&
          !e &&
          t.raise("numbers out of order in {} quantifier"),
        !0
      );
    t.switchU && !e && t.raise("Incomplete quantifier"), (t.pos = r);
  }
  return !1;
};
z.regexp_eatAtom = function (t) {
  return (
    this.regexp_eatPatternCharacters(t) ||
    t.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(t) ||
    this.regexp_eatCharacterClass(t) ||
    this.regexp_eatUncapturingGroup(t) ||
    this.regexp_eatCapturingGroup(t)
  );
};
z.regexp_eatReverseSolidusAtomEscape = function (t) {
  var e = t.pos;
  if (t.eat(92)) {
    if (this.regexp_eatAtomEscape(t)) return !0;
    t.pos = e;
  }
  return !1;
};
z.regexp_eatUncapturingGroup = function (t) {
  var e = t.pos;
  if (t.eat(40)) {
    if (t.eat(63) && t.eat(58)) {
      if ((this.regexp_disjunction(t), t.eat(41))) return !0;
      t.raise("Unterminated group");
    }
    t.pos = e;
  }
  return !1;
};
z.regexp_eatCapturingGroup = function (t) {
  if (t.eat(40)) {
    if (
      (this.options.ecmaVersion >= 9
        ? this.regexp_groupSpecifier(t)
        : t.current() === 63 && t.raise("Invalid group"),
      this.regexp_disjunction(t),
      t.eat(41))
    )
      return (t.numCapturingParens += 1), !0;
    t.raise("Unterminated group");
  }
  return !1;
};
z.regexp_eatExtendedAtom = function (t) {
  return (
    t.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(t) ||
    this.regexp_eatCharacterClass(t) ||
    this.regexp_eatUncapturingGroup(t) ||
    this.regexp_eatCapturingGroup(t) ||
    this.regexp_eatInvalidBracedQuantifier(t) ||
    this.regexp_eatExtendedPatternCharacter(t)
  );
};
z.regexp_eatInvalidBracedQuantifier = function (t) {
  return (
    this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
  );
};
z.regexp_eatSyntaxCharacter = function (t) {
  var e = t.current();
  return lu(e) ? ((t.lastIntValue = e), t.advance(), !0) : !1;
};
function lu(t) {
  return (
    t === 36 ||
    (t >= 40 && t <= 43) ||
    t === 46 ||
    t === 63 ||
    (t >= 91 && t <= 94) ||
    (t >= 123 && t <= 125)
  );
}
z.regexp_eatPatternCharacters = function (t) {
  for (var e = t.pos, r = 0; (r = t.current()) !== -1 && !lu(r); ) t.advance();
  return t.pos !== e;
};
z.regexp_eatExtendedPatternCharacter = function (t) {
  var e = t.current();
  return e !== -1 &&
    e !== 36 &&
    !(e >= 40 && e <= 43) &&
    e !== 46 &&
    e !== 63 &&
    e !== 91 &&
    e !== 94 &&
    e !== 124
    ? (t.advance(), !0)
    : !1;
};
z.regexp_groupSpecifier = function (t) {
  if (t.eat(63)) {
    if (this.regexp_eatGroupName(t)) {
      t.groupNames.indexOf(t.lastStringValue) !== -1 &&
        t.raise("Duplicate capture group name"),
        t.groupNames.push(t.lastStringValue);
      return;
    }
    t.raise("Invalid group");
  }
};
z.regexp_eatGroupName = function (t) {
  if (((t.lastStringValue = ""), t.eat(60))) {
    if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
    t.raise("Invalid capture group name");
  }
  return !1;
};
z.regexp_eatRegExpIdentifierName = function (t) {
  if (((t.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(t))) {
    for (
      t.lastStringValue += Ui(t.lastIntValue);
      this.regexp_eatRegExpIdentifierPart(t);

    )
      t.lastStringValue += Ui(t.lastIntValue);
    return !0;
  }
  return !1;
};
z.regexp_eatRegExpIdentifierStart = function (t) {
  var e = t.pos,
    r = this.options.ecmaVersion >= 11,
    i = t.current(r);
  return (
    t.advance(r),
    i === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(t, r) &&
      (i = t.lastIntValue),
    rh(i) ? ((t.lastIntValue = i), !0) : ((t.pos = e), !1)
  );
};
function rh(t) {
  return It(t, !0) || t === 36 || t === 95;
}
z.regexp_eatRegExpIdentifierPart = function (t) {
  var e = t.pos,
    r = this.options.ecmaVersion >= 11,
    i = t.current(r);
  return (
    t.advance(r),
    i === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(t, r) &&
      (i = t.lastIntValue),
    ih(i) ? ((t.lastIntValue = i), !0) : ((t.pos = e), !1)
  );
};
function ih(t) {
  return ar(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
}
z.regexp_eatAtomEscape = function (t) {
  return this.regexp_eatBackReference(t) ||
    this.regexp_eatCharacterClassEscape(t) ||
    this.regexp_eatCharacterEscape(t) ||
    (t.switchN && this.regexp_eatKGroupName(t))
    ? !0
    : (t.switchU &&
        (t.current() === 99 && t.raise("Invalid unicode escape"),
        t.raise("Invalid escape")),
      !1);
};
z.regexp_eatBackReference = function (t) {
  var e = t.pos;
  if (this.regexp_eatDecimalEscape(t)) {
    var r = t.lastIntValue;
    if (t.switchU)
      return r > t.maxBackReference && (t.maxBackReference = r), !0;
    if (r <= t.numCapturingParens) return !0;
    t.pos = e;
  }
  return !1;
};
z.regexp_eatKGroupName = function (t) {
  if (t.eat(107)) {
    if (this.regexp_eatGroupName(t))
      return t.backReferenceNames.push(t.lastStringValue), !0;
    t.raise("Invalid named reference");
  }
  return !1;
};
z.regexp_eatCharacterEscape = function (t) {
  return (
    this.regexp_eatControlEscape(t) ||
    this.regexp_eatCControlLetter(t) ||
    this.regexp_eatZero(t) ||
    this.regexp_eatHexEscapeSequence(t) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) ||
    (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
    this.regexp_eatIdentityEscape(t)
  );
};
z.regexp_eatCControlLetter = function (t) {
  var e = t.pos;
  if (t.eat(99)) {
    if (this.regexp_eatControlLetter(t)) return !0;
    t.pos = e;
  }
  return !1;
};
z.regexp_eatZero = function (t) {
  return t.current() === 48 && !$i(t.lookahead())
    ? ((t.lastIntValue = 0), t.advance(), !0)
    : !1;
};
z.regexp_eatControlEscape = function (t) {
  var e = t.current();
  return e === 116
    ? ((t.lastIntValue = 9), t.advance(), !0)
    : e === 110
    ? ((t.lastIntValue = 10), t.advance(), !0)
    : e === 118
    ? ((t.lastIntValue = 11), t.advance(), !0)
    : e === 102
    ? ((t.lastIntValue = 12), t.advance(), !0)
    : e === 114
    ? ((t.lastIntValue = 13), t.advance(), !0)
    : !1;
};
z.regexp_eatControlLetter = function (t) {
  var e = t.current();
  return cu(e) ? ((t.lastIntValue = e % 32), t.advance(), !0) : !1;
};
function cu(t) {
  return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
}
z.regexp_eatRegExpUnicodeEscapeSequence = function (t, e) {
  e === void 0 && (e = !1);
  var r = t.pos,
    i = e || t.switchU;
  if (t.eat(117)) {
    if (this.regexp_eatFixedHexDigits(t, 4)) {
      var n = t.lastIntValue;
      if (i && n >= 55296 && n <= 56319) {
        var s = t.pos;
        if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
          var a = t.lastIntValue;
          if (a >= 56320 && a <= 57343)
            return (
              (t.lastIntValue = (n - 55296) * 1024 + (a - 56320) + 65536), !0
            );
        }
        (t.pos = s), (t.lastIntValue = n);
      }
      return !0;
    }
    if (
      i &&
      t.eat(123) &&
      this.regexp_eatHexDigits(t) &&
      t.eat(125) &&
      nh(t.lastIntValue)
    )
      return !0;
    i && t.raise("Invalid unicode escape"), (t.pos = r);
  }
  return !1;
};
function nh(t) {
  return t >= 0 && t <= 1114111;
}
z.regexp_eatIdentityEscape = function (t) {
  if (t.switchU)
    return this.regexp_eatSyntaxCharacter(t)
      ? !0
      : t.eat(47)
      ? ((t.lastIntValue = 47), !0)
      : !1;
  var e = t.current();
  return e !== 99 && (!t.switchN || e !== 107)
    ? ((t.lastIntValue = e), t.advance(), !0)
    : !1;
};
z.regexp_eatDecimalEscape = function (t) {
  t.lastIntValue = 0;
  var e = t.current();
  if (e >= 49 && e <= 57) {
    do (t.lastIntValue = 10 * t.lastIntValue + (e - 48)), t.advance();
    while ((e = t.current()) >= 48 && e <= 57);
    return !0;
  }
  return !1;
};
z.regexp_eatCharacterClassEscape = function (t) {
  var e = t.current();
  if (sh(e)) return (t.lastIntValue = -1), t.advance(), !0;
  if (t.switchU && this.options.ecmaVersion >= 9 && (e === 80 || e === 112)) {
    if (
      ((t.lastIntValue = -1),
      t.advance(),
      t.eat(123) &&
        this.regexp_eatUnicodePropertyValueExpression(t) &&
        t.eat(125))
    )
      return !0;
    t.raise("Invalid property name");
  }
  return !1;
};
function sh(t) {
  return (
    t === 100 || t === 68 || t === 115 || t === 83 || t === 119 || t === 87
  );
}
z.regexp_eatUnicodePropertyValueExpression = function (t) {
  var e = t.pos;
  if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
    var r = t.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(t)) {
      var i = t.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(t, r, i), !0;
    }
  }
  if (((t.pos = e), this.regexp_eatLoneUnicodePropertyNameOrValue(t))) {
    var n = t.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(t, n), !0;
  }
  return !1;
};
z.regexp_validateUnicodePropertyNameAndValue = function (t, e, r) {
  ri(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"),
    t.unicodeProperties.nonBinary[e].test(r) ||
      t.raise("Invalid property value");
};
z.regexp_validateUnicodePropertyNameOrValue = function (t, e) {
  t.unicodeProperties.binary.test(e) || t.raise("Invalid property name");
};
z.regexp_eatUnicodePropertyName = function (t) {
  var e = 0;
  for (t.lastStringValue = ""; fu((e = t.current())); )
    (t.lastStringValue += Ui(e)), t.advance();
  return t.lastStringValue !== "";
};
function fu(t) {
  return cu(t) || t === 95;
}
z.regexp_eatUnicodePropertyValue = function (t) {
  var e = 0;
  for (t.lastStringValue = ""; ah((e = t.current())); )
    (t.lastStringValue += Ui(e)), t.advance();
  return t.lastStringValue !== "";
};
function ah(t) {
  return fu(t) || $i(t);
}
z.regexp_eatLoneUnicodePropertyNameOrValue = function (t) {
  return this.regexp_eatUnicodePropertyValue(t);
};
z.regexp_eatCharacterClass = function (t) {
  if (t.eat(91)) {
    if ((t.eat(94), this.regexp_classRanges(t), t.eat(93))) return !0;
    t.raise("Unterminated character class");
  }
  return !1;
};
z.regexp_classRanges = function (t) {
  for (; this.regexp_eatClassAtom(t); ) {
    var e = t.lastIntValue;
    if (t.eat(45) && this.regexp_eatClassAtom(t)) {
      var r = t.lastIntValue;
      t.switchU && (e === -1 || r === -1) && t.raise("Invalid character class"),
        e !== -1 &&
          r !== -1 &&
          e > r &&
          t.raise("Range out of order in character class");
    }
  }
};
z.regexp_eatClassAtom = function (t) {
  var e = t.pos;
  if (t.eat(92)) {
    if (this.regexp_eatClassEscape(t)) return !0;
    if (t.switchU) {
      var r = t.current();
      (r === 99 || du(r)) && t.raise("Invalid class escape"),
        t.raise("Invalid escape");
    }
    t.pos = e;
  }
  var i = t.current();
  return i !== 93 ? ((t.lastIntValue = i), t.advance(), !0) : !1;
};
z.regexp_eatClassEscape = function (t) {
  var e = t.pos;
  if (t.eat(98)) return (t.lastIntValue = 8), !0;
  if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
  if (!t.switchU && t.eat(99)) {
    if (this.regexp_eatClassControlLetter(t)) return !0;
    t.pos = e;
  }
  return (
    this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
  );
};
z.regexp_eatClassControlLetter = function (t) {
  var e = t.current();
  return $i(e) || e === 95 ? ((t.lastIntValue = e % 32), t.advance(), !0) : !1;
};
z.regexp_eatHexEscapeSequence = function (t) {
  var e = t.pos;
  if (t.eat(120)) {
    if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
    t.switchU && t.raise("Invalid escape"), (t.pos = e);
  }
  return !1;
};
z.regexp_eatDecimalDigits = function (t) {
  var e = t.pos,
    r = 0;
  for (t.lastIntValue = 0; $i((r = t.current())); )
    (t.lastIntValue = 10 * t.lastIntValue + (r - 48)), t.advance();
  return t.pos !== e;
};
function $i(t) {
  return t >= 48 && t <= 57;
}
z.regexp_eatHexDigits = function (t) {
  var e = t.pos,
    r = 0;
  for (t.lastIntValue = 0; pu((r = t.current())); )
    (t.lastIntValue = 16 * t.lastIntValue + hu(r)), t.advance();
  return t.pos !== e;
};
function pu(t) {
  return (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102);
}
function hu(t) {
  return t >= 65 && t <= 70
    ? 10 + (t - 65)
    : t >= 97 && t <= 102
    ? 10 + (t - 97)
    : t - 48;
}
z.regexp_eatLegacyOctalEscapeSequence = function (t) {
  if (this.regexp_eatOctalDigit(t)) {
    var e = t.lastIntValue;
    if (this.regexp_eatOctalDigit(t)) {
      var r = t.lastIntValue;
      e <= 3 && this.regexp_eatOctalDigit(t)
        ? (t.lastIntValue = e * 64 + r * 8 + t.lastIntValue)
        : (t.lastIntValue = e * 8 + r);
    } else t.lastIntValue = e;
    return !0;
  }
  return !1;
};
z.regexp_eatOctalDigit = function (t) {
  var e = t.current();
  return du(e)
    ? ((t.lastIntValue = e - 48), t.advance(), !0)
    : ((t.lastIntValue = 0), !1);
};
function du(t) {
  return t >= 48 && t <= 55;
}
z.regexp_eatFixedHexDigits = function (t, e) {
  var r = t.pos;
  t.lastIntValue = 0;
  for (var i = 0; i < e; ++i) {
    var n = t.current();
    if (!pu(n)) return (t.pos = r), !1;
    (t.lastIntValue = 16 * t.lastIntValue + hu(n)), t.advance();
  }
  return !0;
};
var Ir = function (e) {
    (this.type = e.type),
      (this.value = e.value),
      (this.start = e.start),
      (this.end = e.end),
      e.options.locations && (this.loc = new $t(e, e.startLoc, e.endLoc)),
      e.options.ranges && (this.range = [e.start, e.end]);
  },
  ne = Ee.prototype;
ne.next = function (t) {
  !t &&
    this.type.keyword &&
    this.containsEsc &&
    this.raiseRecoverable(
      this.start,
      "Escape sequence in keyword " + this.type.keyword
    ),
    this.options.onToken && this.options.onToken(new Ir(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken();
};
ne.getToken = function () {
  return this.next(), new Ir(this);
};
typeof Symbol < "u" &&
  (ne[Symbol.iterator] = function () {
    var t = this;
    return {
      next: function () {
        var e = t.getToken();
        return { done: e.type === l.eof, value: e };
      },
    };
  });
ne.nextToken = function () {
  var t = this.curContext();
  if (
    ((!t || !t.preserveSpace) && this.skipSpace(),
    (this.start = this.pos),
    this.options.locations && (this.startLoc = this.curPosition()),
    this.pos >= this.input.length)
  )
    return this.finishToken(l.eof);
  if (t.override) return t.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
ne.readToken = function (t) {
  return It(t, this.options.ecmaVersion >= 6) || t === 92
    ? this.readWord()
    : this.getTokenFromCode(t);
};
ne.fullCharCodeAtPos = function () {
  var t = this.input.charCodeAt(this.pos);
  if (t <= 55295 || t >= 56320) return t;
  var e = this.input.charCodeAt(this.pos + 1);
  return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888;
};
ne.skipBlockComment = function () {
  var t = this.options.onComment && this.curPosition(),
    e = this.pos,
    r = this.input.indexOf("*/", (this.pos += 2));
  if (
    (r === -1 && this.raise(this.pos - 2, "Unterminated comment"),
    (this.pos = r + 2),
    this.options.locations)
  )
    for (var i = void 0, n = e; (i = jo(this.input, n, this.pos)) > -1; )
      ++this.curLine, (n = this.lineStart = i);
  this.options.onComment &&
    this.options.onComment(
      !0,
      this.input.slice(e + 2, r),
      e,
      this.pos,
      t,
      this.curPosition()
    );
};
ne.skipLineComment = function (t) {
  for (
    var e = this.pos,
      r = this.options.onComment && this.curPosition(),
      i = this.input.charCodeAt((this.pos += t));
    this.pos < this.input.length && !vt(i);

  )
    i = this.input.charCodeAt(++this.pos);
  this.options.onComment &&
    this.options.onComment(
      !1,
      this.input.slice(e + t, this.pos),
      e,
      this.pos,
      r,
      this.curPosition()
    );
};
ne.skipSpace = function () {
  e: for (; this.pos < this.input.length; ) {
    var t = this.input.charCodeAt(this.pos);
    switch (t) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos,
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos));
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if ((t > 8 && t < 14) || (t >= 5760 && gs.test(String.fromCharCode(t))))
          ++this.pos;
        else break e;
    }
  }
};
ne.finishToken = function (t, e) {
  (this.end = this.pos),
    this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  (this.type = t), (this.value = e), this.updateContext(r);
};
ne.readToken_dot = function () {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t >= 48 && t <= 57) return this.readNumber(!0);
  var e = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && t === 46 && e === 46
    ? ((this.pos += 3), this.finishToken(l.ellipsis))
    : (++this.pos, this.finishToken(l.dot));
};
ne.readToken_slash = function () {
  var t = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed
    ? (++this.pos, this.readRegexp())
    : t === 61
    ? this.finishOp(l.assign, 2)
    : this.finishOp(l.slash, 1);
};
ne.readToken_mult_modulo_exp = function (t) {
  var e = this.input.charCodeAt(this.pos + 1),
    r = 1,
    i = t === 42 ? l.star : l.modulo;
  return (
    this.options.ecmaVersion >= 7 &&
      t === 42 &&
      e === 42 &&
      (++r, (i = l.starstar), (e = this.input.charCodeAt(this.pos + 2))),
    e === 61 ? this.finishOp(l.assign, r + 1) : this.finishOp(i, r)
  );
};
ne.readToken_pipe_amp = function (t) {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e === t) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61) return this.finishOp(l.assign, 3);
    }
    return this.finishOp(t === 124 ? l.logicalOR : l.logicalAND, 2);
  }
  return e === 61
    ? this.finishOp(l.assign, 2)
    : this.finishOp(t === 124 ? l.bitwiseOR : l.bitwiseAND, 1);
};
ne.readToken_caret = function () {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(l.assign, 2) : this.finishOp(l.bitwiseXOR, 1);
};
ne.readToken_plus_min = function (t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === t
    ? e === 45 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 62 &&
      (this.lastTokEnd === 0 ||
        He.test(this.input.slice(this.lastTokEnd, this.pos)))
      ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : this.finishOp(l.incDec, 2)
    : e === 61
    ? this.finishOp(l.assign, 2)
    : this.finishOp(l.plusMin, 1);
};
ne.readToken_lt_gt = function (t) {
  var e = this.input.charCodeAt(this.pos + 1),
    r = 1;
  return e === t
    ? ((r = t === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
      this.input.charCodeAt(this.pos + r) === 61
        ? this.finishOp(l.assign, r + 1)
        : this.finishOp(l.bitShift, r))
    : e === 33 &&
      t === 60 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 45 &&
      this.input.charCodeAt(this.pos + 3) === 45
    ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
    : (e === 61 && (r = 2), this.finishOp(l.relational, r));
};
ne.readToken_eq_excl = function (t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61
    ? this.finishOp(
        l.equality,
        this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2
      )
    : t === 61 && e === 62 && this.options.ecmaVersion >= 6
    ? ((this.pos += 2), this.finishToken(l.arrow))
    : this.finishOp(t === 61 ? l.eq : l.prefix, 1);
};
ne.readToken_question = function () {
  var t = this.options.ecmaVersion;
  if (t >= 11) {
    var e = this.input.charCodeAt(this.pos + 1);
    if (e === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57) return this.finishOp(l.questionDot, 2);
    }
    if (e === 63) {
      if (t >= 12) {
        var i = this.input.charCodeAt(this.pos + 2);
        if (i === 61) return this.finishOp(l.assign, 3);
      }
      return this.finishOp(l.coalesce, 2);
    }
  }
  return this.finishOp(l.question, 1);
};
ne.readToken_numberSign = function () {
  var t = this.options.ecmaVersion,
    e = 35;
  if (
    t >= 13 &&
    (++this.pos, (e = this.fullCharCodeAtPos()), It(e, !0) || e === 92)
  )
    return this.finishToken(l.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Hi(e) + "'");
};
ne.getTokenFromCode = function (t) {
  switch (t) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(l.parenL);
    case 41:
      return ++this.pos, this.finishToken(l.parenR);
    case 59:
      return ++this.pos, this.finishToken(l.semi);
    case 44:
      return ++this.pos, this.finishToken(l.comma);
    case 91:
      return ++this.pos, this.finishToken(l.bracketL);
    case 93:
      return ++this.pos, this.finishToken(l.bracketR);
    case 123:
      return ++this.pos, this.finishToken(l.braceL);
    case 125:
      return ++this.pos, this.finishToken(l.braceR);
    case 58:
      return ++this.pos, this.finishToken(l.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(l.backQuote);
    case 48:
      var e = this.input.charCodeAt(this.pos + 1);
      if (e === 120 || e === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (e === 111 || e === 79) return this.readRadixNumber(8);
        if (e === 98 || e === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(t);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(t);
    case 124:
    case 38:
      return this.readToken_pipe_amp(t);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(t);
    case 60:
    case 62:
      return this.readToken_lt_gt(t);
    case 61:
    case 33:
      return this.readToken_eq_excl(t);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(l.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Hi(t) + "'");
};
ne.finishOp = function (t, e) {
  var r = this.input.slice(this.pos, this.pos + e);
  return (this.pos += e), this.finishToken(t, r);
};
ne.readRegexp = function () {
  for (var t, e, r = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(r, "Unterminated regular expression");
    var i = this.input.charAt(this.pos);
    if ((He.test(i) && this.raise(r, "Unterminated regular expression"), t))
      t = !1;
    else {
      if (i === "[") e = !0;
      else if (i === "]" && e) e = !1;
      else if (i === "/" && !e) break;
      t = i === "\\";
    }
    ++this.pos;
  }
  var n = this.input.slice(r, this.pos);
  ++this.pos;
  var s = this.pos,
    a = this.readWord1();
  this.containsEsc && this.unexpected(s);
  var u = this.regexpState || (this.regexpState = new Gt(this));
  u.reset(r, n, a), this.validateRegExpFlags(u), this.validateRegExpPattern(u);
  var c = null;
  try {
    c = new RegExp(n, a);
  } catch {}
  return this.finishToken(l.regexp, { pattern: n, flags: a, value: c });
};
ne.readInt = function (t, e, r) {
  for (
    var i = this.options.ecmaVersion >= 12 && e === void 0,
      n = r && this.input.charCodeAt(this.pos) === 48,
      s = this.pos,
      a = 0,
      u = 0,
      c = 0,
      m = e ?? 1 / 0;
    c < m;
    ++c, ++this.pos
  ) {
    var d = this.input.charCodeAt(this.pos),
      E = void 0;
    if (i && d === 95) {
      n &&
        this.raiseRecoverable(
          this.pos,
          "Numeric separator is not allowed in legacy octal numeric literals"
        ),
        u === 95 &&
          this.raiseRecoverable(
            this.pos,
            "Numeric separator must be exactly one underscore"
          ),
        c === 0 &&
          this.raiseRecoverable(
            this.pos,
            "Numeric separator is not allowed at the first of digits"
          ),
        (u = d);
      continue;
    }
    if (
      (d >= 97
        ? (E = d - 97 + 10)
        : d >= 65
        ? (E = d - 65 + 10)
        : d >= 48 && d <= 57
        ? (E = d - 48)
        : (E = 1 / 0),
      E >= t)
    )
      break;
    (u = d), (a = a * t + E);
  }
  return (
    i &&
      u === 95 &&
      this.raiseRecoverable(
        this.pos - 1,
        "Numeric separator is not allowed at the last of digits"
      ),
    this.pos === s || (e != null && this.pos - s !== e) ? null : a
  );
};
function oh(t, e) {
  return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
}
function mu(t) {
  return typeof BigInt != "function" ? null : BigInt(t.replace(/_/g, ""));
}
ne.readRadixNumber = function (t) {
  var e = this.pos;
  this.pos += 2;
  var r = this.readInt(t);
  return (
    r == null && this.raise(this.start + 2, "Expected number in radix " + t),
    this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
      ? ((r = mu(this.input.slice(e, this.pos))), ++this.pos)
      : It(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, "Identifier directly after number"),
    this.finishToken(l.num, r)
  );
};
ne.readNumber = function (t) {
  var e = this.pos;
  !t &&
    this.readInt(10, void 0, !0) === null &&
    this.raise(e, "Invalid number");
  var r = this.pos - e >= 2 && this.input.charCodeAt(e) === 48;
  r && this.strict && this.raise(e, "Invalid number");
  var i = this.input.charCodeAt(this.pos);
  if (!r && !t && this.options.ecmaVersion >= 11 && i === 110) {
    var n = mu(this.input.slice(e, this.pos));
    return (
      ++this.pos,
      It(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, "Identifier directly after number"),
      this.finishToken(l.num, n)
    );
  }
  r && /[89]/.test(this.input.slice(e, this.pos)) && (r = !1),
    i === 46 &&
      !r &&
      (++this.pos, this.readInt(10), (i = this.input.charCodeAt(this.pos))),
    (i === 69 || i === 101) &&
      !r &&
      ((i = this.input.charCodeAt(++this.pos)),
      (i === 43 || i === 45) && ++this.pos,
      this.readInt(10) === null && this.raise(e, "Invalid number")),
    It(this.fullCharCodeAtPos()) &&
      this.raise(this.pos, "Identifier directly after number");
  var s = oh(this.input.slice(e, this.pos), r);
  return this.finishToken(l.num, s);
};
ne.readCodePoint = function () {
  var t = this.input.charCodeAt(this.pos),
    e;
  if (t === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    (e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
      ++this.pos,
      e > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else e = this.readHexChar(4);
  return e;
};
function Hi(t) {
  return t <= 65535
    ? String.fromCharCode(t)
    : ((t -= 65536),
      String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
ne.readString = function (t) {
  for (var e = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, "Unterminated string constant");
    var i = this.input.charCodeAt(this.pos);
    if (i === t) break;
    i === 92
      ? ((e += this.input.slice(r, this.pos)),
        (e += this.readEscapedChar(!1)),
        (r = this.pos))
      : i === 8232 || i === 8233
      ? (this.options.ecmaVersion < 10 &&
          this.raise(this.start, "Unterminated string constant"),
        ++this.pos,
        this.options.locations && (this.curLine++, (this.lineStart = this.pos)))
      : (vt(i) && this.raise(this.start, "Unterminated string constant"),
        ++this.pos);
  }
  return (e += this.input.slice(r, this.pos++)), this.finishToken(l.string, e);
};
var yu = {};
ne.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (t) {
    if (t === yu) this.readInvalidTemplateToken();
    else throw t;
  }
  this.inTemplateElement = !1;
};
ne.invalidStringToken = function (t, e) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw yu;
  this.raise(t, e);
};
ne.readTmplToken = function () {
  for (var t = "", e = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
      return this.pos === this.start &&
        (this.type === l.template || this.type === l.invalidTemplate)
        ? r === 36
          ? ((this.pos += 2), this.finishToken(l.dollarBraceL))
          : (++this.pos, this.finishToken(l.backQuote))
        : ((t += this.input.slice(e, this.pos)),
          this.finishToken(l.template, t));
    if (r === 92)
      (t += this.input.slice(e, this.pos)),
        (t += this.readEscapedChar(!0)),
        (e = this.pos);
    else if (vt(r)) {
      switch (((t += this.input.slice(e, this.pos)), ++this.pos, r)) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          t += `
`;
          break;
        default:
          t += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
        (e = this.pos);
    } else ++this.pos;
  }
};
ne.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") break;
      case "`":
        return this.finishToken(
          l.invalidTemplate,
          this.input.slice(this.start, this.pos)
        );
    }
  this.raise(this.start, "Unterminated template");
};
ne.readEscapedChar = function (t) {
  var e = this.input.charCodeAt(++this.pos);
  switch ((++this.pos, e)) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return Hi(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return (
        this.options.locations && ((this.lineStart = this.pos), ++this.curLine),
        ""
      );
    case 56:
    case 57:
      if (
        (this.strict &&
          this.invalidStringToken(this.pos - 1, "Invalid escape sequence"),
        t)
      ) {
        var r = this.pos - 1;
        return (
          this.invalidStringToken(
            r,
            "Invalid escape sequence in template string"
          ),
          null
        );
      }
    default:
      if (e >= 48 && e <= 55) {
        var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
          n = parseInt(i, 8);
        return (
          n > 255 && ((i = i.slice(0, -1)), (n = parseInt(i, 8))),
          (this.pos += i.length - 1),
          (e = this.input.charCodeAt(this.pos)),
          (i !== "0" || e === 56 || e === 57) &&
            (this.strict || t) &&
            this.invalidStringToken(
              this.pos - 1 - i.length,
              t
                ? "Octal literal in template string"
                : "Octal literal in strict mode"
            ),
          String.fromCharCode(n)
        );
      }
      return vt(e) ? "" : String.fromCharCode(e);
  }
};
ne.readHexChar = function (t) {
  var e = this.pos,
    r = this.readInt(16, t);
  return (
    r === null && this.invalidStringToken(e, "Bad character escape sequence"), r
  );
};
ne.readWord1 = function () {
  this.containsEsc = !1;
  for (
    var t = "", e = !0, r = this.pos, i = this.options.ecmaVersion >= 6;
    this.pos < this.input.length;

  ) {
    var n = this.fullCharCodeAtPos();
    if (ar(n, i)) this.pos += n <= 65535 ? 1 : 2;
    else if (n === 92) {
      (this.containsEsc = !0), (t += this.input.slice(r, this.pos));
      var s = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 &&
        this.invalidStringToken(
          this.pos,
          "Expecting Unicode escape sequence \\uXXXX"
        ),
        ++this.pos;
      var a = this.readCodePoint();
      (e ? It : ar)(a, i) ||
        this.invalidStringToken(s, "Invalid Unicode escape"),
        (t += Hi(a)),
        (r = this.pos);
    } else break;
    e = !1;
  }
  return t + this.input.slice(r, this.pos);
};
ne.readWord = function () {
  var t = this.readWord1(),
    e = l.name;
  return this.keywords.test(t) && (e = Wi[t]), this.finishToken(e, t);
};
var gu = "8.7.0";
Ee.acorn = {
  Parser: Ee,
  version: gu,
  defaultOptions: _r,
  Position: wr,
  SourceLocation: $t,
  getLineInfo: or,
  Node: Vt,
  TokenType: le,
  tokTypes: l,
  keywordTypes: Wi,
  TokContext: lt,
  tokContexts: he,
  isIdentifierChar: ar,
  isIdentifierStart: It,
  Token: Ir,
  isNewLine: vt,
  lineBreak: He,
  lineBreakG: ti,
  nonASCIIwhitespace: gs,
};
function uh(t, e) {
  return Ee.parse(t, e);
}
function lh(t, e, r) {
  return Ee.parseExpressionAt(t, e, r);
}
function ch(t, e) {
  return Ee.tokenizer(t, e);
}
var Cs = {};
to(Cs, { LooseParser: () => pe, isDummy: () => Tt, parse: () => ph });
var Ki = "\u2716";
function Tt(t) {
  return t.name === Ki;
}
function Eu() {}
var pe = function (e, r) {
  if (
    (r === void 0 && (r = {}),
    (this.toks = this.constructor.BaseParser.tokenizer(e, r)),
    (this.options = this.toks.options),
    (this.input = this.toks.input),
    (this.tok = this.last = { type: l.eof, start: 0, end: 0 }),
    (this.tok.validateRegExpFlags = Eu),
    (this.tok.validateRegExpPattern = Eu),
    this.options.locations)
  ) {
    var i = this.toks.curPosition();
    this.tok.loc = new $t(this.toks, i, i);
  }
  (this.ahead = []),
    (this.context = []),
    (this.curIndent = 0),
    (this.curLineStart = 0),
    (this.nextLineStart = this.lineEnd(this.curLineStart) + 1),
    (this.inAsync = !1),
    (this.inGenerator = !1),
    (this.inFunction = !1);
};
pe.prototype.startNode = function () {
  return new Vt(
    this.toks,
    this.tok.start,
    this.options.locations ? this.tok.loc.start : null
  );
};
pe.prototype.storeCurrentPos = function () {
  return this.options.locations
    ? [this.tok.start, this.tok.loc.start]
    : this.tok.start;
};
pe.prototype.startNodeAt = function (e) {
  return this.options.locations
    ? new Vt(this.toks, e[0], e[1])
    : new Vt(this.toks, e);
};
pe.prototype.finishNode = function (e, r) {
  return (
    (e.type = r),
    (e.end = this.last.end),
    this.options.locations && (e.loc.end = this.last.loc.end),
    this.options.ranges && (e.range[1] = this.last.end),
    e
  );
};
pe.prototype.dummyNode = function (e) {
  var r = this.startNode();
  return (
    (r.type = e),
    (r.end = r.start),
    this.options.locations && (r.loc.end = r.loc.start),
    this.options.ranges && (r.range[1] = r.start),
    (this.last = { type: l.name, start: r.start, end: r.start, loc: r.loc }),
    r
  );
};
pe.prototype.dummyIdent = function () {
  var e = this.dummyNode("Identifier");
  return (e.name = Ki), e;
};
pe.prototype.dummyString = function () {
  var e = this.dummyNode("Literal");
  return (e.value = e.raw = Ki), e;
};
pe.prototype.eat = function (e) {
  return this.tok.type === e ? (this.next(), !0) : !1;
};
pe.prototype.isContextual = function (e) {
  return this.tok.type === l.name && this.tok.value === e;
};
pe.prototype.eatContextual = function (e) {
  return this.tok.value === e && this.eat(l.name);
};
pe.prototype.canInsertSemicolon = function () {
  return (
    this.tok.type === l.eof ||
    this.tok.type === l.braceR ||
    He.test(this.input.slice(this.last.end, this.tok.start))
  );
};
pe.prototype.semicolon = function () {
  return this.eat(l.semi);
};
pe.prototype.expect = function (e) {
  if (this.eat(e)) return !0;
  for (var r = 1; r <= 2; r++)
    if (this.lookAhead(r).type === e) {
      for (var i = 0; i < r; i++) this.next();
      return !0;
    }
};
pe.prototype.pushCx = function () {
  this.context.push(this.curIndent);
};
pe.prototype.popCx = function () {
  this.curIndent = this.context.pop();
};
pe.prototype.lineEnd = function (e) {
  for (; e < this.input.length && !vt(this.input.charCodeAt(e)); ) ++e;
  return e;
};
pe.prototype.indentationAfter = function (e) {
  for (var r = 0; ; ++e) {
    var i = this.input.charCodeAt(e);
    if (i === 32) ++r;
    else if (i === 9) r += this.options.tabSize;
    else return r;
  }
};
pe.prototype.closes = function (e, r, i, n) {
  return this.tok.type === e || this.tok.type === l.eof
    ? !0
    : i !== this.curLineStart &&
        this.curIndent < r &&
        this.tokenStartsLine() &&
        (!n ||
          this.nextLineStart >= this.input.length ||
          this.indentationAfter(this.nextLineStart) < r);
};
pe.prototype.tokenStartsLine = function () {
  for (var e = this.tok.start - 1; e >= this.curLineStart; --e) {
    var r = this.input.charCodeAt(e);
    if (r !== 9 && r !== 32) return !1;
  }
  return !0;
};
pe.prototype.extend = function (e, r) {
  this[e] = r(this[e]);
};
pe.prototype.parse = function () {
  return this.next(), this.parseTopLevel();
};
pe.extend = function () {
  for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
  for (var i = this, n = 0; n < e.length; n++) i = e[n](i);
  return i;
};
pe.parse = function (e, r) {
  return new this(e, r).parse();
};
pe.BaseParser = Ee;
var Yi = pe.prototype;
function fh(t) {
  return (t < 14 && t > 8) || t === 32 || t === 160 || vt(t);
}
Yi.next = function () {
  if (
    ((this.last = this.tok),
    this.ahead.length
      ? (this.tok = this.ahead.shift())
      : (this.tok = this.readToken()),
    this.tok.start >= this.nextLineStart)
  ) {
    for (; this.tok.start >= this.nextLineStart; )
      (this.curLineStart = this.nextLineStart),
        (this.nextLineStart = this.lineEnd(this.curLineStart) + 1);
    this.curIndent = this.indentationAfter(this.curLineStart);
  }
};
Yi.readToken = function () {
  for (;;)
    try {
      return (
        this.toks.next(),
        this.toks.type === l.dot &&
          this.input.substr(this.toks.end, 1) === "." &&
          this.options.ecmaVersion >= 6 &&
          (this.toks.end++, (this.toks.type = l.ellipsis)),
        new Ir(this.toks)
      );
    } catch (s) {
      if (!(s instanceof SyntaxError)) throw s;
      var t = s.message,
        e = s.raisedAt,
        r = !0;
      if (/unterminated/i.test(t))
        if (((e = this.lineEnd(s.pos + 1)), /string/.test(t)))
          r = {
            start: s.pos,
            end: e,
            type: l.string,
            value: this.input.slice(s.pos + 1, e),
          };
        else if (/regular expr/i.test(t)) {
          var i = this.input.slice(s.pos, e);
          try {
            i = new RegExp(i);
          } catch {}
          r = { start: s.pos, end: e, type: l.regexp, value: i };
        } else
          /template/.test(t)
            ? (r = {
                start: s.pos,
                end: e,
                type: l.template,
                value: this.input.slice(s.pos, e),
              })
            : (r = !1);
      else if (
        /invalid (unicode|regexp|number)|expecting unicode|octal literal|is reserved|directly after number|expected number in radix/i.test(
          t
        )
      )
        for (; e < this.input.length && !fh(this.input.charCodeAt(e)); ) ++e;
      else if (/character escape|expected hexadecimal/i.test(t))
        for (; e < this.input.length; ) {
          var n = this.input.charCodeAt(e++);
          if (n === 34 || n === 39 || vt(n)) break;
        }
      else if (/unexpected character/i.test(t)) e++, (r = !1);
      else if (/regular expression/i.test(t)) r = !0;
      else throw s;
      if (
        (this.resetTo(e),
        r === !0 && (r = { start: e, end: e, type: l.name, value: Ki }),
        r)
      )
        return (
          this.options.locations &&
            (r.loc = new $t(
              this.toks,
              or(this.input, r.start),
              or(this.input, r.end)
            )),
          r
        );
    }
};
Yi.resetTo = function (t) {
  this.toks.pos = t;
  var e = this.input.charAt(t - 1);
  if (
    ((this.toks.exprAllowed =
      !e ||
      /[[{(,;:?/*=+\-~!|&%^<>]/.test(e) ||
      (/[enwfd]/.test(e) &&
        /\b(case|else|return|throw|new|in|(instance|type)?of|delete|void)$/.test(
          this.input.slice(t - 10, t)
        ))),
    this.options.locations)
  ) {
    (this.toks.curLine = 1), (this.toks.lineStart = ti.lastIndex = 0);
    for (var r; (r = ti.exec(this.input)) && r.index < t; )
      ++this.toks.curLine, (this.toks.lineStart = r.index + r[0].length);
  }
};
Yi.lookAhead = function (t) {
  for (; t > this.ahead.length; ) this.ahead.push(this.readToken());
  return this.ahead[t - 1];
};
var Re = pe.prototype;
Re.parseTopLevel = function () {
  var t = this.startNodeAt(this.options.locations ? [0, or(this.input, 0)] : 0);
  for (t.body = []; this.tok.type !== l.eof; )
    t.body.push(this.parseStatement());
  return (
    this.toks.adaptDirectivePrologue(t.body),
    (this.last = this.tok),
    (t.sourceType = this.options.sourceType),
    this.finishNode(t, "Program")
  );
};
Re.parseStatement = function () {
  var t = this.tok.type,
    e = this.startNode(),
    r;
  switch ((this.toks.isLet() && ((t = l._var), (r = "let")), t)) {
    case l._break:
    case l._continue:
      this.next();
      var i = t === l._break;
      return (
        this.semicolon() || this.canInsertSemicolon()
          ? (e.label = null)
          : ((e.label = this.tok.type === l.name ? this.parseIdent() : null),
            this.semicolon()),
        this.finishNode(e, i ? "BreakStatement" : "ContinueStatement")
      );
    case l._debugger:
      return (
        this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement")
      );
    case l._do:
      return (
        this.next(),
        (e.body = this.parseStatement()),
        (e.test = this.eat(l._while)
          ? this.parseParenExpression()
          : this.dummyIdent()),
        this.semicolon(),
        this.finishNode(e, "DoWhileStatement")
      );
    case l._for:
      this.next();
      var n = this.options.ecmaVersion >= 9 && this.eatContextual("await");
      if ((this.pushCx(), this.expect(l.parenL), this.tok.type === l.semi))
        return this.parseFor(e, null);
      var s = this.toks.isLet();
      if (s || this.tok.type === l._var || this.tok.type === l._const) {
        var a = this.parseVar(this.startNode(), !0, s ? "let" : this.tok.value);
        return a.declarations.length === 1 &&
          (this.tok.type === l._in || this.isContextual("of"))
          ? (this.options.ecmaVersion >= 9 &&
              this.tok.type !== l._in &&
              (e.await = n),
            this.parseForIn(e, a))
          : this.parseFor(e, a);
      }
      var u = this.parseExpression(!0);
      return this.tok.type === l._in || this.isContextual("of")
        ? (this.options.ecmaVersion >= 9 &&
            this.tok.type !== l._in &&
            (e.await = n),
          this.parseForIn(e, this.toAssignable(u)))
        : this.parseFor(e, u);
    case l._function:
      return this.next(), this.parseFunction(e, !0);
    case l._if:
      return (
        this.next(),
        (e.test = this.parseParenExpression()),
        (e.consequent = this.parseStatement()),
        (e.alternate = this.eat(l._else) ? this.parseStatement() : null),
        this.finishNode(e, "IfStatement")
      );
    case l._return:
      return (
        this.next(),
        this.eat(l.semi) || this.canInsertSemicolon()
          ? (e.argument = null)
          : ((e.argument = this.parseExpression()), this.semicolon()),
        this.finishNode(e, "ReturnStatement")
      );
    case l._switch:
      var c = this.curIndent,
        m = this.curLineStart;
      this.next(),
        (e.discriminant = this.parseParenExpression()),
        (e.cases = []),
        this.pushCx(),
        this.expect(l.braceL);
      for (var d; !this.closes(l.braceR, c, m, !0); )
        if (this.tok.type === l._case || this.tok.type === l._default) {
          var E = this.tok.type === l._case;
          d && this.finishNode(d, "SwitchCase"),
            e.cases.push((d = this.startNode())),
            (d.consequent = []),
            this.next(),
            E ? (d.test = this.parseExpression()) : (d.test = null),
            this.expect(l.colon);
        } else
          d ||
            (e.cases.push((d = this.startNode())),
            (d.consequent = []),
            (d.test = null)),
            d.consequent.push(this.parseStatement());
      return (
        d && this.finishNode(d, "SwitchCase"),
        this.popCx(),
        this.eat(l.braceR),
        this.finishNode(e, "SwitchStatement")
      );
    case l._throw:
      return (
        this.next(),
        (e.argument = this.parseExpression()),
        this.semicolon(),
        this.finishNode(e, "ThrowStatement")
      );
    case l._try:
      if (
        (this.next(),
        (e.block = this.parseBlock()),
        (e.handler = null),
        this.tok.type === l._catch)
      ) {
        var y = this.startNode();
        this.next(),
          this.eat(l.parenL)
            ? ((y.param = this.toAssignable(this.parseExprAtom(), !0)),
              this.expect(l.parenR))
            : (y.param = null),
          (y.body = this.parseBlock()),
          (e.handler = this.finishNode(y, "CatchClause"));
      }
      return (
        (e.finalizer = this.eat(l._finally) ? this.parseBlock() : null),
        !e.handler && !e.finalizer
          ? e.block
          : this.finishNode(e, "TryStatement")
      );
    case l._var:
    case l._const:
      return this.parseVar(e, !1, r || this.tok.value);
    case l._while:
      return (
        this.next(),
        (e.test = this.parseParenExpression()),
        (e.body = this.parseStatement()),
        this.finishNode(e, "WhileStatement")
      );
    case l._with:
      return (
        this.next(),
        (e.object = this.parseParenExpression()),
        (e.body = this.parseStatement()),
        this.finishNode(e, "WithStatement")
      );
    case l.braceL:
      return this.parseBlock();
    case l.semi:
      return this.next(), this.finishNode(e, "EmptyStatement");
    case l._class:
      return this.parseClass(!0);
    case l._import:
      if (this.options.ecmaVersion > 10) {
        var x = this.lookAhead(1).type;
        if (x === l.parenL || x === l.dot)
          return (
            (e.expression = this.parseExpression()),
            this.semicolon(),
            this.finishNode(e, "ExpressionStatement")
          );
      }
      return this.parseImport();
    case l._export:
      return this.parseExport();
    default:
      if (this.toks.isAsyncFunction())
        return this.next(), this.next(), this.parseFunction(e, !0, !0);
      var b = this.parseExpression();
      return Tt(b)
        ? (this.next(),
          this.tok.type === l.eof
            ? this.finishNode(e, "EmptyStatement")
            : this.parseStatement())
        : t === l.name && b.type === "Identifier" && this.eat(l.colon)
        ? ((e.body = this.parseStatement()),
          (e.label = b),
          this.finishNode(e, "LabeledStatement"))
        : ((e.expression = b),
          this.semicolon(),
          this.finishNode(e, "ExpressionStatement"));
  }
};
Re.parseBlock = function () {
  var t = this.startNode();
  this.pushCx(), this.expect(l.braceL);
  var e = this.curIndent,
    r = this.curLineStart;
  for (t.body = []; !this.closes(l.braceR, e, r, !0); )
    t.body.push(this.parseStatement());
  return this.popCx(), this.eat(l.braceR), this.finishNode(t, "BlockStatement");
};
Re.parseFor = function (t, e) {
  return (
    (t.init = e),
    (t.test = t.update = null),
    this.eat(l.semi) &&
      this.tok.type !== l.semi &&
      (t.test = this.parseExpression()),
    this.eat(l.semi) &&
      this.tok.type !== l.parenR &&
      (t.update = this.parseExpression()),
    this.popCx(),
    this.expect(l.parenR),
    (t.body = this.parseStatement()),
    this.finishNode(t, "ForStatement")
  );
};
Re.parseForIn = function (t, e) {
  var r = this.tok.type === l._in ? "ForInStatement" : "ForOfStatement";
  return (
    this.next(),
    (t.left = e),
    (t.right = this.parseExpression()),
    this.popCx(),
    this.expect(l.parenR),
    (t.body = this.parseStatement()),
    this.finishNode(t, r)
  );
};
Re.parseVar = function (t, e, r) {
  (t.kind = r), this.next(), (t.declarations = []);
  do {
    var i = this.startNode();
    (i.id =
      this.options.ecmaVersion >= 6
        ? this.toAssignable(this.parseExprAtom(), !0)
        : this.parseIdent()),
      (i.init = this.eat(l.eq) ? this.parseMaybeAssign(e) : null),
      t.declarations.push(this.finishNode(i, "VariableDeclarator"));
  } while (this.eat(l.comma));
  if (!t.declarations.length) {
    var n = this.startNode();
    (n.id = this.dummyIdent()),
      t.declarations.push(this.finishNode(n, "VariableDeclarator"));
  }
  return e || this.semicolon(), this.finishNode(t, "VariableDeclaration");
};
Re.parseClass = function (t) {
  var e = this.startNode();
  this.next(),
    this.tok.type === l.name
      ? (e.id = this.parseIdent())
      : t === !0
      ? (e.id = this.dummyIdent())
      : (e.id = null),
    (e.superClass = this.eat(l._extends) ? this.parseExpression() : null),
    (e.body = this.startNode()),
    (e.body.body = []),
    this.pushCx();
  var r = this.curIndent + 1,
    i = this.curLineStart;
  for (
    this.eat(l.braceL),
      this.curIndent + 1 < r && ((r = this.curIndent), (i = this.curLineStart));
    !this.closes(l.braceR, r, i);

  ) {
    var n = this.parseClassElement();
    n && e.body.body.push(n);
  }
  return (
    this.popCx(),
    this.eat(l.braceR) ||
      ((this.last.end = this.tok.start),
      this.options.locations && (this.last.loc.end = this.tok.loc.start)),
    this.semicolon(),
    this.finishNode(e.body, "ClassBody"),
    this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
  );
};
Re.parseClassElement = function () {
  if (this.eat(l.semi)) return null;
  var t = this.options,
    e = t.ecmaVersion,
    r = t.locations,
    i = this.curIndent,
    n = this.curLineStart,
    s = this.startNode(),
    a = "",
    u = !1,
    c = !1,
    m = "method",
    d = !1;
  if (this.eatContextual("static")) {
    if (e >= 13 && this.eat(l.braceL)) return this.parseClassStaticBlock(s), s;
    this.isClassElementNameStart() || this.toks.type === l.star
      ? (d = !0)
      : (a = "static");
  }
  if (
    ((s.static = d),
    !a &&
      e >= 8 &&
      this.eatContextual("async") &&
      ((this.isClassElementNameStart() || this.toks.type === l.star) &&
      !this.canInsertSemicolon()
        ? (c = !0)
        : (a = "async")),
    !a)
  ) {
    u = this.eat(l.star);
    var E = this.toks.value;
    (this.eatContextual("get") || this.eatContextual("set")) &&
      (this.isClassElementNameStart() ? (m = E) : (a = E));
  }
  if (a)
    (s.computed = !1),
      (s.key = this.startNodeAt(
        r
          ? [this.toks.lastTokStart, this.toks.lastTokStartLoc]
          : this.toks.lastTokStart
      )),
      (s.key.name = a),
      this.finishNode(s.key, "Identifier");
  else if ((this.parseClassElementName(s), Tt(s.key)))
    return Tt(this.parseMaybeAssign()) && this.next(), this.eat(l.comma), null;
  if (e < 13 || this.toks.type === l.parenL || m !== "method" || u || c) {
    var y =
      !s.computed &&
      !s.static &&
      !u &&
      !c &&
      m === "method" &&
      ((s.key.type === "Identifier" && s.key.name === "constructor") ||
        (s.key.type === "Literal" && s.key.value === "constructor"));
    (s.kind = y ? "constructor" : m),
      (s.value = this.parseMethod(u, c)),
      this.finishNode(s, "MethodDefinition");
  } else {
    if (this.eat(l.eq))
      if (
        this.curLineStart !== n &&
        this.curIndent <= i &&
        this.tokenStartsLine()
      )
        s.value = null;
      else {
        var x = this.inAsync,
          b = this.inGenerator;
        (this.inAsync = !1),
          (this.inGenerator = !1),
          (s.value = this.parseMaybeAssign()),
          (this.inAsync = x),
          (this.inGenerator = b);
      }
    else s.value = null;
    this.semicolon(), this.finishNode(s, "PropertyDefinition");
  }
  return s;
};
Re.parseClassStaticBlock = function (t) {
  var e = this.curIndent,
    r = this.curLineStart;
  for (t.body = [], this.pushCx(); !this.closes(l.braceR, e, r, !0); )
    t.body.push(this.parseStatement());
  return this.popCx(), this.eat(l.braceR), this.finishNode(t, "StaticBlock");
};
Re.isClassElementNameStart = function () {
  return this.toks.isClassElementNameStart();
};
Re.parseClassElementName = function (t) {
  this.toks.type === l.privateId
    ? ((t.computed = !1), (t.key = this.parsePrivateIdent()))
    : this.parsePropertyName(t);
};
Re.parseFunction = function (t, e, r) {
  var i = this.inAsync,
    n = this.inGenerator,
    s = this.inFunction;
  return (
    this.initFunction(t),
    this.options.ecmaVersion >= 6 && (t.generator = this.eat(l.star)),
    this.options.ecmaVersion >= 8 && (t.async = !!r),
    this.tok.type === l.name
      ? (t.id = this.parseIdent())
      : e === !0 && (t.id = this.dummyIdent()),
    (this.inAsync = t.async),
    (this.inGenerator = t.generator),
    (this.inFunction = !0),
    (t.params = this.parseFunctionParams()),
    (t.body = this.parseBlock()),
    this.toks.adaptDirectivePrologue(t.body.body),
    (this.inAsync = i),
    (this.inGenerator = n),
    (this.inFunction = s),
    this.finishNode(t, e ? "FunctionDeclaration" : "FunctionExpression")
  );
};
Re.parseExport = function () {
  var t = this.startNode();
  if ((this.next(), this.eat(l.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual("as")
          ? (t.exported = this.parseExprAtom())
          : (t.exported = null)),
      (t.source = this.eatContextual("from")
        ? this.parseExprAtom()
        : this.dummyString()),
      this.semicolon(),
      this.finishNode(t, "ExportAllDeclaration")
    );
  if (this.eat(l._default)) {
    var e;
    if (this.tok.type === l._function || (e = this.toks.isAsyncFunction())) {
      var r = this.startNode();
      this.next(),
        e && this.next(),
        (t.declaration = this.parseFunction(r, "nullableID", e));
    } else
      this.tok.type === l._class
        ? (t.declaration = this.parseClass("nullableID"))
        : ((t.declaration = this.parseMaybeAssign()), this.semicolon());
    return this.finishNode(t, "ExportDefaultDeclaration");
  }
  return (
    this.tok.type.keyword || this.toks.isLet() || this.toks.isAsyncFunction()
      ? ((t.declaration = this.parseStatement()),
        (t.specifiers = []),
        (t.source = null))
      : ((t.declaration = null),
        (t.specifiers = this.parseExportSpecifierList()),
        (t.source = this.eatContextual("from") ? this.parseExprAtom() : null),
        this.semicolon()),
    this.finishNode(t, "ExportNamedDeclaration")
  );
};
Re.parseImport = function () {
  var t = this.startNode();
  if ((this.next(), this.tok.type === l.string))
    (t.specifiers = []), (t.source = this.parseExprAtom());
  else {
    var e;
    this.tok.type === l.name &&
      this.tok.value !== "from" &&
      ((e = this.startNode()),
      (e.local = this.parseIdent()),
      this.finishNode(e, "ImportDefaultSpecifier"),
      this.eat(l.comma)),
      (t.specifiers = this.parseImportSpecifiers()),
      (t.source =
        this.eatContextual("from") && this.tok.type === l.string
          ? this.parseExprAtom()
          : this.dummyString()),
      e && t.specifiers.unshift(e);
  }
  return this.semicolon(), this.finishNode(t, "ImportDeclaration");
};
Re.parseImportSpecifiers = function () {
  var t = [];
  if (this.tok.type === l.star) {
    var e = this.startNode();
    this.next(),
      (e.local = this.eatContextual("as")
        ? this.parseIdent()
        : this.dummyIdent()),
      t.push(this.finishNode(e, "ImportNamespaceSpecifier"));
  } else {
    var r = this.curIndent,
      i = this.curLineStart,
      n = this.nextLineStart;
    for (
      this.pushCx(),
        this.eat(l.braceL),
        this.curLineStart > n && (n = this.curLineStart);
      !this.closes(l.braceR, r + (this.curLineStart <= n ? 1 : 0), i);

    ) {
      var s = this.startNode();
      if (this.eat(l.star))
        (s.local = this.eatContextual("as")
          ? this.parseModuleExportName()
          : this.dummyIdent()),
          this.finishNode(s, "ImportNamespaceSpecifier");
      else {
        if (
          this.isContextual("from") ||
          ((s.imported = this.parseModuleExportName()), Tt(s.imported))
        )
          break;
        (s.local = this.eatContextual("as")
          ? this.parseModuleExportName()
          : s.imported),
          this.finishNode(s, "ImportSpecifier");
      }
      t.push(s), this.eat(l.comma);
    }
    this.eat(l.braceR), this.popCx();
  }
  return t;
};
Re.parseExportSpecifierList = function () {
  var t = [],
    e = this.curIndent,
    r = this.curLineStart,
    i = this.nextLineStart;
  for (
    this.pushCx(),
      this.eat(l.braceL),
      this.curLineStart > i && (i = this.curLineStart);
    !this.closes(l.braceR, e + (this.curLineStart <= i ? 1 : 0), r) &&
    !this.isContextual("from");

  ) {
    var n = this.startNode();
    if (((n.local = this.parseModuleExportName()), Tt(n.local))) break;
    (n.exported = this.eatContextual("as")
      ? this.parseModuleExportName()
      : n.local),
      this.finishNode(n, "ExportSpecifier"),
      t.push(n),
      this.eat(l.comma);
  }
  return this.eat(l.braceR), this.popCx(), t;
};
Re.parseModuleExportName = function () {
  return this.options.ecmaVersion >= 13 && this.tok.type === l.string
    ? this.parseExprAtom()
    : this.parseIdent();
};
var fe = pe.prototype;
fe.checkLVal = function (t) {
  if (!t) return t;
  switch (t.type) {
    case "Identifier":
    case "MemberExpression":
      return t;
    case "ParenthesizedExpression":
      return (t.expression = this.checkLVal(t.expression)), t;
    default:
      return this.dummyIdent();
  }
};
fe.parseExpression = function (t) {
  var e = this.storeCurrentPos(),
    r = this.parseMaybeAssign(t);
  if (this.tok.type === l.comma) {
    var i = this.startNodeAt(e);
    for (i.expressions = [r]; this.eat(l.comma); )
      i.expressions.push(this.parseMaybeAssign(t));
    return this.finishNode(i, "SequenceExpression");
  }
  return r;
};
fe.parseParenExpression = function () {
  this.pushCx(), this.expect(l.parenL);
  var t = this.parseExpression();
  return this.popCx(), this.expect(l.parenR), t;
};
fe.parseMaybeAssign = function (t) {
  if (this.inGenerator && this.toks.isContextual("yield")) {
    var e = this.startNode();
    return (
      this.next(),
      this.semicolon() ||
      this.canInsertSemicolon() ||
      (this.tok.type !== l.star && !this.tok.type.startsExpr)
        ? ((e.delegate = !1), (e.argument = null))
        : ((e.delegate = this.eat(l.star)),
          (e.argument = this.parseMaybeAssign())),
      this.finishNode(e, "YieldExpression")
    );
  }
  var r = this.storeCurrentPos(),
    i = this.parseMaybeConditional(t);
  if (this.tok.type.isAssign) {
    var n = this.startNodeAt(r);
    return (
      (n.operator = this.tok.value),
      (n.left =
        this.tok.type === l.eq ? this.toAssignable(i) : this.checkLVal(i)),
      this.next(),
      (n.right = this.parseMaybeAssign(t)),
      this.finishNode(n, "AssignmentExpression")
    );
  }
  return i;
};
fe.parseMaybeConditional = function (t) {
  var e = this.storeCurrentPos(),
    r = this.parseExprOps(t);
  if (this.eat(l.question)) {
    var i = this.startNodeAt(e);
    return (
      (i.test = r),
      (i.consequent = this.parseMaybeAssign()),
      (i.alternate = this.expect(l.colon)
        ? this.parseMaybeAssign(t)
        : this.dummyIdent()),
      this.finishNode(i, "ConditionalExpression")
    );
  }
  return r;
};
fe.parseExprOps = function (t) {
  var e = this.storeCurrentPos(),
    r = this.curIndent,
    i = this.curLineStart;
  return this.parseExprOp(this.parseMaybeUnary(!1), e, -1, t, r, i);
};
fe.parseExprOp = function (t, e, r, i, n, s) {
  if (this.curLineStart !== s && this.curIndent < n && this.tokenStartsLine())
    return t;
  var a = this.tok.type.binop;
  if (a != null && (!i || this.tok.type !== l._in) && a > r) {
    var u = this.startNodeAt(e);
    if (
      ((u.left = t),
      (u.operator = this.tok.value),
      this.next(),
      this.curLineStart !== s && this.curIndent < n && this.tokenStartsLine())
    )
      u.right = this.dummyIdent();
    else {
      var c = this.storeCurrentPos();
      u.right = this.parseExprOp(this.parseMaybeUnary(!1), c, a, i, n, s);
    }
    return (
      this.finishNode(
        u,
        /&&|\|\||\?\?/.test(u.operator)
          ? "LogicalExpression"
          : "BinaryExpression"
      ),
      this.parseExprOp(u, e, r, i, n, s)
    );
  }
  return t;
};
fe.parseMaybeUnary = function (t) {
  var e = this.storeCurrentPos(),
    r;
  if (
    this.options.ecmaVersion >= 8 &&
    this.toks.isContextual("await") &&
    (this.inAsync ||
      (this.toks.inModule && this.options.ecmaVersion >= 13) ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction))
  )
    (r = this.parseAwait()), (t = !0);
  else if (this.tok.type.prefix) {
    var i = this.startNode(),
      n = this.tok.type === l.incDec;
    n || (t = !0),
      (i.operator = this.tok.value),
      (i.prefix = !0),
      this.next(),
      (i.argument = this.parseMaybeUnary(!0)),
      n && (i.argument = this.checkLVal(i.argument)),
      (r = this.finishNode(i, n ? "UpdateExpression" : "UnaryExpression"));
  } else if (this.tok.type === l.ellipsis) {
    var s = this.startNode();
    this.next(),
      (s.argument = this.parseMaybeUnary(t)),
      (r = this.finishNode(s, "SpreadElement"));
  } else if (!t && this.tok.type === l.privateId) r = this.parsePrivateIdent();
  else
    for (
      r = this.parseExprSubscripts();
      this.tok.type.postfix && !this.canInsertSemicolon();

    ) {
      var a = this.startNodeAt(e);
      (a.operator = this.tok.value),
        (a.prefix = !1),
        (a.argument = this.checkLVal(r)),
        this.next(),
        (r = this.finishNode(a, "UpdateExpression"));
    }
  if (!t && this.eat(l.starstar)) {
    var u = this.startNodeAt(e);
    return (
      (u.operator = "**"),
      (u.left = r),
      (u.right = this.parseMaybeUnary(!1)),
      this.finishNode(u, "BinaryExpression")
    );
  }
  return r;
};
fe.parseExprSubscripts = function () {
  var t = this.storeCurrentPos();
  return this.parseSubscripts(
    this.parseExprAtom(),
    t,
    !1,
    this.curIndent,
    this.curLineStart
  );
};
fe.parseSubscripts = function (t, e, r, i, n) {
  for (var s = this.options.ecmaVersion >= 11, a = !1; ; ) {
    if (
      this.curLineStart !== n &&
      this.curIndent <= i &&
      this.tokenStartsLine()
    )
      if (this.tok.type === l.dot && this.curIndent === i) --i;
      else break;
    var u =
        t.type === "Identifier" &&
        t.name === "async" &&
        !this.canInsertSemicolon(),
      c = s && this.eat(l.questionDot);
    if (
      (c && (a = !0),
      (c &&
        this.tok.type !== l.parenL &&
        this.tok.type !== l.bracketL &&
        this.tok.type !== l.backQuote) ||
        this.eat(l.dot))
    ) {
      var m = this.startNodeAt(e);
      (m.object = t),
        this.curLineStart !== n && this.curIndent <= i && this.tokenStartsLine()
          ? (m.property = this.dummyIdent())
          : (m.property = this.parsePropertyAccessor() || this.dummyIdent()),
        (m.computed = !1),
        s && (m.optional = c),
        (t = this.finishNode(m, "MemberExpression"));
    } else if (this.tok.type === l.bracketL) {
      this.pushCx(), this.next();
      var d = this.startNodeAt(e);
      (d.object = t),
        (d.property = this.parseExpression()),
        (d.computed = !0),
        s && (d.optional = c),
        this.popCx(),
        this.expect(l.bracketR),
        (t = this.finishNode(d, "MemberExpression"));
    } else if (!r && this.tok.type === l.parenL) {
      var E = this.parseExprList(l.parenR);
      if (u && this.eat(l.arrow))
        return this.parseArrowExpression(this.startNodeAt(e), E, !0);
      var y = this.startNodeAt(e);
      (y.callee = t),
        (y.arguments = E),
        s && (y.optional = c),
        (t = this.finishNode(y, "CallExpression"));
    } else if (this.tok.type === l.backQuote) {
      var x = this.startNodeAt(e);
      (x.tag = t),
        (x.quasi = this.parseTemplate()),
        (t = this.finishNode(x, "TaggedTemplateExpression"));
    } else break;
  }
  if (a) {
    var b = this.startNodeAt(e);
    (b.expression = t), (t = this.finishNode(b, "ChainExpression"));
  }
  return t;
};
fe.parseExprAtom = function () {
  var t;
  switch (this.tok.type) {
    case l._this:
    case l._super:
      var e = this.tok.type === l._this ? "ThisExpression" : "Super";
      return (t = this.startNode()), this.next(), this.finishNode(t, e);
    case l.name:
      var r = this.storeCurrentPos(),
        i = this.parseIdent(),
        n = !1;
      if (i.name === "async" && !this.canInsertSemicolon()) {
        if (this.eat(l._function))
          return (
            this.toks.overrideContext(he.f_expr),
            this.parseFunction(this.startNodeAt(r), !1, !0)
          );
        this.tok.type === l.name && ((i = this.parseIdent()), (n = !0));
      }
      return this.eat(l.arrow)
        ? this.parseArrowExpression(this.startNodeAt(r), [i], n)
        : i;
    case l.regexp:
      t = this.startNode();
      var s = this.tok.value;
      return (
        (t.regex = { pattern: s.pattern, flags: s.flags }),
        (t.value = s.value),
        (t.raw = this.input.slice(this.tok.start, this.tok.end)),
        this.next(),
        this.finishNode(t, "Literal")
      );
    case l.num:
    case l.string:
      return (
        (t = this.startNode()),
        (t.value = this.tok.value),
        (t.raw = this.input.slice(this.tok.start, this.tok.end)),
        this.tok.type === l.num &&
          t.raw.charCodeAt(t.raw.length - 1) === 110 &&
          (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")),
        this.next(),
        this.finishNode(t, "Literal")
      );
    case l._null:
    case l._true:
    case l._false:
      return (
        (t = this.startNode()),
        (t.value =
          this.tok.type === l._null ? null : this.tok.type === l._true),
        (t.raw = this.tok.type.keyword),
        this.next(),
        this.finishNode(t, "Literal")
      );
    case l.parenL:
      var a = this.storeCurrentPos();
      this.next();
      var u = this.parseExpression();
      if ((this.expect(l.parenR), this.eat(l.arrow))) {
        var c = u.expressions || [u];
        return (
          c.length && Tt(c[c.length - 1]) && c.pop(),
          this.parseArrowExpression(this.startNodeAt(a), c)
        );
      }
      if (this.options.preserveParens) {
        var m = this.startNodeAt(a);
        (m.expression = u), (u = this.finishNode(m, "ParenthesizedExpression"));
      }
      return u;
    case l.bracketL:
      return (
        (t = this.startNode()),
        (t.elements = this.parseExprList(l.bracketR, !0)),
        this.finishNode(t, "ArrayExpression")
      );
    case l.braceL:
      return this.toks.overrideContext(he.b_expr), this.parseObj();
    case l._class:
      return this.parseClass(!1);
    case l._function:
      return (t = this.startNode()), this.next(), this.parseFunction(t, !1);
    case l._new:
      return this.parseNew();
    case l.backQuote:
      return this.parseTemplate();
    case l._import:
      return this.options.ecmaVersion >= 11
        ? this.parseExprImport()
        : this.dummyIdent();
    default:
      return this.dummyIdent();
  }
};
fe.parseExprImport = function () {
  var t = this.startNode(),
    e = this.parseIdent(!0);
  switch (this.tok.type) {
    case l.parenL:
      return this.parseDynamicImport(t);
    case l.dot:
      return (t.meta = e), this.parseImportMeta(t);
    default:
      return (t.name = "import"), this.finishNode(t, "Identifier");
  }
};
fe.parseDynamicImport = function (t) {
  return (
    (t.source = this.parseExprList(l.parenR)[0] || this.dummyString()),
    this.finishNode(t, "ImportExpression")
  );
};
fe.parseImportMeta = function (t) {
  return (
    this.next(),
    (t.property = this.parseIdent(!0)),
    this.finishNode(t, "MetaProperty")
  );
};
fe.parseNew = function () {
  var t = this.startNode(),
    e = this.curIndent,
    r = this.curLineStart,
    i = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(l.dot))
    return (
      (t.meta = i),
      (t.property = this.parseIdent(!0)),
      this.finishNode(t, "MetaProperty")
    );
  var n = this.storeCurrentPos();
  return (
    (t.callee = this.parseSubscripts(this.parseExprAtom(), n, !0, e, r)),
    this.tok.type === l.parenL
      ? (t.arguments = this.parseExprList(l.parenR))
      : (t.arguments = []),
    this.finishNode(t, "NewExpression")
  );
};
fe.parseTemplateElement = function () {
  var t = this.startNode();
  return (
    this.tok.type === l.invalidTemplate
      ? (t.value = { raw: this.tok.value, cooked: null })
      : (t.value = {
          raw: this.input.slice(this.tok.start, this.tok.end).replace(
            /\r\n?/g,
            `
`
          ),
          cooked: this.tok.value,
        }),
    this.next(),
    (t.tail = this.tok.type === l.backQuote),
    this.finishNode(t, "TemplateElement")
  );
};
fe.parseTemplate = function () {
  var t = this.startNode();
  this.next(), (t.expressions = []);
  var e = this.parseTemplateElement();
  for (t.quasis = [e]; !e.tail; )
    this.next(),
      t.expressions.push(this.parseExpression()),
      this.expect(l.braceR)
        ? (e = this.parseTemplateElement())
        : ((e = this.startNode()),
          (e.value = { cooked: "", raw: "" }),
          (e.tail = !0),
          this.finishNode(e, "TemplateElement")),
      t.quasis.push(e);
  return this.expect(l.backQuote), this.finishNode(t, "TemplateLiteral");
};
fe.parseObj = function () {
  var t = this.startNode();
  (t.properties = []), this.pushCx();
  var e = this.curIndent + 1,
    r = this.curLineStart;
  for (
    this.eat(l.braceL),
      this.curIndent + 1 < e && ((e = this.curIndent), (r = this.curLineStart));
    !this.closes(l.braceR, e, r);

  ) {
    var i = this.startNode(),
      n = void 0,
      s = void 0,
      a = void 0;
    if (this.options.ecmaVersion >= 9 && this.eat(l.ellipsis)) {
      (i.argument = this.parseMaybeAssign()),
        t.properties.push(this.finishNode(i, "SpreadElement")),
        this.eat(l.comma);
      continue;
    }
    if (
      (this.options.ecmaVersion >= 6 &&
        ((a = this.storeCurrentPos()),
        (i.method = !1),
        (i.shorthand = !1),
        (n = this.eat(l.star))),
      this.parsePropertyName(i),
      this.toks.isAsyncProp(i)
        ? ((s = !0),
          (n = this.options.ecmaVersion >= 9 && this.eat(l.star)),
          this.parsePropertyName(i))
        : (s = !1),
      Tt(i.key))
    ) {
      Tt(this.parseMaybeAssign()) && this.next(), this.eat(l.comma);
      continue;
    }
    if (this.eat(l.colon))
      (i.kind = "init"), (i.value = this.parseMaybeAssign());
    else if (
      this.options.ecmaVersion >= 6 &&
      (this.tok.type === l.parenL || this.tok.type === l.braceL)
    )
      (i.kind = "init"), (i.method = !0), (i.value = this.parseMethod(n, s));
    else if (
      this.options.ecmaVersion >= 5 &&
      i.key.type === "Identifier" &&
      !i.computed &&
      (i.key.name === "get" || i.key.name === "set") &&
      this.tok.type !== l.comma &&
      this.tok.type !== l.braceR &&
      this.tok.type !== l.eq
    )
      (i.kind = i.key.name),
        this.parsePropertyName(i),
        (i.value = this.parseMethod(!1));
    else {
      if (((i.kind = "init"), this.options.ecmaVersion >= 6))
        if (this.eat(l.eq)) {
          var u = this.startNodeAt(a);
          (u.operator = "="),
            (u.left = i.key),
            (u.right = this.parseMaybeAssign()),
            (i.value = this.finishNode(u, "AssignmentExpression"));
        } else i.value = i.key;
      else i.value = this.dummyIdent();
      i.shorthand = !0;
    }
    t.properties.push(this.finishNode(i, "Property")), this.eat(l.comma);
  }
  return (
    this.popCx(),
    this.eat(l.braceR) ||
      ((this.last.end = this.tok.start),
      this.options.locations && (this.last.loc.end = this.tok.loc.start)),
    this.finishNode(t, "ObjectExpression")
  );
};
fe.parsePropertyName = function (t) {
  if (this.options.ecmaVersion >= 6)
    if (this.eat(l.bracketL)) {
      (t.computed = !0),
        (t.key = this.parseExpression()),
        this.expect(l.bracketR);
      return;
    } else t.computed = !1;
  var e =
    this.tok.type === l.num || this.tok.type === l.string
      ? this.parseExprAtom()
      : this.parseIdent();
  t.key = e || this.dummyIdent();
};
fe.parsePropertyAccessor = function () {
  if (this.tok.type === l.name || this.tok.type.keyword)
    return this.parseIdent();
  if (this.tok.type === l.privateId) return this.parsePrivateIdent();
};
fe.parseIdent = function () {
  var t = this.tok.type === l.name ? this.tok.value : this.tok.type.keyword;
  if (!t) return this.dummyIdent();
  var e = this.startNode();
  return this.next(), (e.name = t), this.finishNode(e, "Identifier");
};
fe.parsePrivateIdent = function () {
  var t = this.startNode();
  return (
    (t.name = this.tok.value),
    this.next(),
    this.finishNode(t, "PrivateIdentifier")
  );
};
fe.initFunction = function (t) {
  (t.id = null),
    (t.params = []),
    this.options.ecmaVersion >= 6 && ((t.generator = !1), (t.expression = !1)),
    this.options.ecmaVersion >= 8 && (t.async = !1);
};
fe.toAssignable = function (t, e) {
  if (!(!t || t.type === "Identifier" || (t.type === "MemberExpression" && !e)))
    if (t.type === "ParenthesizedExpression")
      this.toAssignable(t.expression, e);
    else {
      if (this.options.ecmaVersion < 6) return this.dummyIdent();
      if (t.type === "ObjectExpression") {
        t.type = "ObjectPattern";
        for (var r = 0, i = t.properties; r < i.length; r += 1) {
          var n = i[r];
          this.toAssignable(n, e);
        }
      } else if (t.type === "ArrayExpression")
        (t.type = "ArrayPattern"), this.toAssignableList(t.elements, e);
      else if (t.type === "Property") this.toAssignable(t.value, e);
      else if (t.type === "SpreadElement")
        (t.type = "RestElement"), this.toAssignable(t.argument, e);
      else if (t.type === "AssignmentExpression")
        (t.type = "AssignmentPattern"), delete t.operator;
      else return this.dummyIdent();
    }
  return t;
};
fe.toAssignableList = function (t, e) {
  for (var r = 0, i = t; r < i.length; r += 1) {
    var n = i[r];
    this.toAssignable(n, e);
  }
  return t;
};
fe.parseFunctionParams = function (t) {
  return (t = this.parseExprList(l.parenR)), this.toAssignableList(t, !0);
};
fe.parseMethod = function (t, e) {
  var r = this.startNode(),
    i = this.inAsync,
    n = this.inGenerator,
    s = this.inFunction;
  return (
    this.initFunction(r),
    this.options.ecmaVersion >= 6 && (r.generator = !!t),
    this.options.ecmaVersion >= 8 && (r.async = !!e),
    (this.inAsync = r.async),
    (this.inGenerator = r.generator),
    (this.inFunction = !0),
    (r.params = this.parseFunctionParams()),
    (r.body = this.parseBlock()),
    this.toks.adaptDirectivePrologue(r.body.body),
    (this.inAsync = i),
    (this.inGenerator = n),
    (this.inFunction = s),
    this.finishNode(r, "FunctionExpression")
  );
};
fe.parseArrowExpression = function (t, e, r) {
  var i = this.inAsync,
    n = this.inGenerator,
    s = this.inFunction;
  return (
    this.initFunction(t),
    this.options.ecmaVersion >= 8 && (t.async = !!r),
    (this.inAsync = t.async),
    (this.inGenerator = !1),
    (this.inFunction = !0),
    (t.params = this.toAssignableList(e, !0)),
    (t.expression = this.tok.type !== l.braceL),
    t.expression
      ? (t.body = this.parseMaybeAssign())
      : ((t.body = this.parseBlock()),
        this.toks.adaptDirectivePrologue(t.body.body)),
    (this.inAsync = i),
    (this.inGenerator = n),
    (this.inFunction = s),
    this.finishNode(t, "ArrowFunctionExpression")
  );
};
fe.parseExprList = function (t, e) {
  this.pushCx();
  var r = this.curIndent,
    i = this.curLineStart,
    n = [];
  for (this.next(); !this.closes(t, r + 1, i); ) {
    if (this.eat(l.comma)) {
      n.push(e ? null : this.dummyIdent());
      continue;
    }
    var s = this.parseMaybeAssign();
    if (Tt(s)) {
      if (this.closes(t, r, i)) break;
      this.next();
    } else n.push(s);
    this.eat(l.comma);
  }
  return (
    this.popCx(),
    this.eat(t) ||
      ((this.last.end = this.tok.start),
      this.options.locations && (this.last.loc.end = this.tok.loc.start)),
    n
  );
};
fe.parseAwait = function () {
  var t = this.startNode();
  return (
    this.next(),
    (t.argument = this.parseMaybeUnary()),
    this.finishNode(t, "AwaitExpression")
  );
};
_r.tabSize = 4;
function ph(t, e) {
  return pe.parse(t, e);
}
var If = st(hr(), 1);
var Ef = st(Fi(), 1);
var wt = class {
  constructor(e, r, i, n, s, a, u) {
    (this.identifier = e),
      (this.from = r),
      (this.tainted = !1),
      (this.resolved = null),
      (this.flag = i),
      this.isWrite() &&
        ((this.writeExpr = n), (this.partial = a), (this.init = u)),
      (this.__maybeImplicitGlobal = s);
  }
  isStatic() {
    return !this.tainted && this.resolved && this.resolved.scope.isStatic();
  }
  isWrite() {
    return !!(this.flag & wt.WRITE);
  }
  isRead() {
    return !!(this.flag & wt.READ);
  }
  isReadOnly() {
    return this.flag === wt.READ;
  }
  isWriteOnly() {
    return this.flag === wt.WRITE;
  }
  isReadWrite() {
    return this.flag === wt.RW;
  }
};
wt.READ = 1;
wt.WRITE = 2;
wt.RW = 3;
var dt = wt;
var qt = class {
  constructor(e, r) {
    (this.name = e),
      (this.identifiers = []),
      (this.references = []),
      (this.defs = []),
      (this.tainted = !1),
      (this.stack = !0),
      (this.scope = r);
  }
};
qt.CatchClause = "CatchClause";
qt.Parameter = "Parameter";
qt.FunctionName = "FunctionName";
qt.ClassName = "ClassName";
qt.Variable = "Variable";
qt.ImportBinding = "ImportBinding";
qt.ImplicitGlobalVariable = "ImplicitGlobalVariable";
var We = qt;
var rt = class {
    constructor(e, r, i, n, s, a) {
      (this.type = e),
        (this.name = r),
        (this.node = i),
        (this.parent = n),
        (this.index = s),
        (this.kind = a);
    }
  },
  Pn = class extends rt {
    constructor(e, r, i, n) {
      super(We.Parameter, e, r, null, i, null);
      this.rest = n;
    }
  };
var On = st(hr(), 1),
  { Syntax: mt } = Ef.default;
function Rm(t, e, r, i) {
  let n;
  if (
    (t.upper && t.upper.isStrict) ||
    r ||
    t.type === "class" ||
    t.type === "module"
  )
    return !0;
  if (t.type === "block" || t.type === "switch") return !1;
  if (t.type === "function") {
    if (
      (e.type === mt.ArrowFunctionExpression &&
        e.body.type !== mt.BlockStatement) ||
      (e.type === mt.Program ? (n = e) : (n = e.body), !n)
    )
      return !1;
  } else if (t.type === "global") n = e;
  else return !1;
  if (i)
    for (let s = 0, a = n.body.length; s < a; ++s) {
      let u = n.body[s];
      if (u.type !== mt.DirectiveStatement) break;
      if (u.raw === '"use strict"' || u.raw === "'use strict'") return !0;
    }
  else
    for (let s = 0, a = n.body.length; s < a; ++s) {
      let u = n.body[s];
      if (u.type !== mt.ExpressionStatement) break;
      let c = u.expression;
      if (c.type !== mt.Literal || typeof c.value != "string") break;
      if (c.raw !== null && c.raw !== void 0) {
        if (c.raw === '"use strict"' || c.raw === "'use strict'") return !0;
      } else if (c.value === "use strict") return !0;
    }
  return !1;
}
function Mm(t, e) {
  t.scopes.push(e);
  let r = t.__nodeToScope.get(e.block);
  r ? r.push(e) : t.__nodeToScope.set(e.block, [e]);
}
function Vm(t) {
  return (
    t.type === We.ClassName ||
    (t.type === We.Variable && t.parent.kind !== "var")
  );
}
var Ze = class {
    constructor(e, r, i, n, s) {
      (this.type = r),
        (this.set = new Map()),
        (this.taints = new Map()),
        (this.dynamic = this.type === "global" || this.type === "with"),
        (this.block = n),
        (this.through = []),
        (this.variables = []),
        (this.references = []),
        (this.variableScope =
          this.type === "global" ||
          this.type === "module" ||
          this.type === "function" ||
          this.type === "class-field-initializer" ||
          this.type === "class-static-block"
            ? this
            : i.variableScope),
        (this.functionExpressionScope = !1),
        (this.directCallToEvalScope = !1),
        (this.thisFound = !1),
        (this.__left = []),
        (this.upper = i),
        (this.isStrict = e.isStrictModeSupported()
          ? Rm(this, n, s, e.__useDirective())
          : !1),
        (this.childScopes = []),
        this.upper && this.upper.childScopes.push(this),
        (this.__declaredVariables = e.__declaredVariables),
        Mm(e, this);
    }
    __shouldStaticallyClose(e) {
      return !this.dynamic || e.__isOptimistic();
    }
    __shouldStaticallyCloseForGlobal(e) {
      let r = e.identifier.name;
      if (!this.set.has(r)) return !1;
      let n = this.set.get(r).defs;
      return n.length > 0 && n.every(Vm);
    }
    __staticCloseRef(e) {
      this.__resolve(e) || this.__delegateToUpperScope(e);
    }
    __dynamicCloseRef(e) {
      let r = this;
      do r.through.push(e), (r = r.upper);
      while (r);
    }
    __globalCloseRef(e) {
      this.__shouldStaticallyCloseForGlobal(e)
        ? this.__staticCloseRef(e)
        : this.__dynamicCloseRef(e);
    }
    __close(e) {
      let r;
      this.__shouldStaticallyClose(e)
        ? (r = this.__staticCloseRef)
        : this.type !== "global"
        ? (r = this.__dynamicCloseRef)
        : (r = this.__globalCloseRef);
      for (let i = 0, n = this.__left.length; i < n; ++i) {
        let s = this.__left[i];
        r.call(this, s);
      }
      return (this.__left = null), this.upper;
    }
    __isValidResolution(e, r) {
      return !0;
    }
    __resolve(e) {
      let r = e.identifier.name;
      if (!this.set.has(r)) return !1;
      let i = this.set.get(r);
      return this.__isValidResolution(e, i)
        ? (i.references.push(e),
          (i.stack = i.stack && e.from.variableScope === this.variableScope),
          e.tainted && ((i.tainted = !0), this.taints.set(i.name, !0)),
          (e.resolved = i),
          !0)
        : !1;
    }
    __delegateToUpperScope(e) {
      this.upper && this.upper.__left.push(e), this.through.push(e);
    }
    __addDeclaredVariablesOfNode(e, r) {
      if (r == null) return;
      let i = this.__declaredVariables.get(r);
      i == null && ((i = []), this.__declaredVariables.set(r, i)),
        i.indexOf(e) === -1 && i.push(e);
    }
    __defineGeneric(e, r, i, n, s) {
      let a;
      (a = r.get(e)),
        a || ((a = new We(e, this)), r.set(e, a), i.push(a)),
        s &&
          (a.defs.push(s),
          this.__addDeclaredVariablesOfNode(a, s.node),
          this.__addDeclaredVariablesOfNode(a, s.parent)),
        n && a.identifiers.push(n);
    }
    __define(e, r) {
      e &&
        e.type === mt.Identifier &&
        this.__defineGeneric(e.name, this.set, this.variables, e, r);
    }
    __referencing(e, r, i, n, s, a) {
      if (!e || e.type !== mt.Identifier || e.name === "super") return;
      let u = new dt(e, this, r || dt.READ, i, n, !!s, !!a);
      this.references.push(u), this.__left.push(u);
    }
    __detectEval() {
      let e = this;
      this.directCallToEvalScope = !0;
      do (e.dynamic = !0), (e = e.upper);
      while (e);
    }
    __detectThis() {
      this.thisFound = !0;
    }
    __isClosed() {
      return this.__left === null;
    }
    resolve(e) {
      let r, i, n;
      for (
        (0, On.default)(this.__isClosed(), "Scope should be closed."),
          (0, On.default)(
            e.type === mt.Identifier,
            "Target should be identifier."
          ),
          i = 0,
          n = this.references.length;
        i < n;
        ++i
      )
        if (((r = this.references[i]), r.identifier === e)) return r;
      return null;
    }
    isStatic() {
      return !this.dynamic;
    }
    isArgumentsMaterialized() {
      return !0;
    }
    isThisMaterialized() {
      return !0;
    }
    isUsedName(e) {
      if (this.set.has(e)) return !0;
      for (let r = 0, i = this.through.length; r < i; ++r)
        if (this.through[r].identifier.name === e) return !0;
      return !1;
    }
  },
  Ln = class extends Ze {
    constructor(e, r) {
      super(e, "global", null, r, !1);
      this.implicit = { set: new Map(), variables: [], left: [] };
    }
    __close(e) {
      let r = [];
      for (let i = 0, n = this.__left.length; i < n; ++i) {
        let s = this.__left[i];
        s.__maybeImplicitGlobal &&
          !this.set.has(s.identifier.name) &&
          r.push(s.__maybeImplicitGlobal);
      }
      for (let i = 0, n = r.length; i < n; ++i) {
        let s = r[i];
        this.__defineImplicit(
          s.pattern,
          new rt(We.ImplicitGlobalVariable, s.pattern, s.node, null, null, null)
        );
      }
      return (this.implicit.left = this.__left), super.__close(e);
    }
    __defineImplicit(e, r) {
      e &&
        e.type === mt.Identifier &&
        this.__defineGeneric(
          e.name,
          this.implicit.set,
          this.implicit.variables,
          e,
          r
        );
    }
  },
  Da = class extends Ze {
    constructor(e, r, i) {
      super(e, "module", r, i, !1);
    }
  },
  Sa = class extends Ze {
    constructor(e, r, i) {
      super(e, "function-expression-name", r, i, !1);
      this.__define(i.id, new rt(We.FunctionName, i.id, i, null, null, null)),
        (this.functionExpressionScope = !0);
    }
  },
  Ca = class extends Ze {
    constructor(e, r, i) {
      super(e, "catch", r, i, !1);
    }
  },
  Fa = class extends Ze {
    constructor(e, r, i) {
      super(e, "with", r, i, !1);
    }
    __close(e) {
      if (this.__shouldStaticallyClose(e)) return super.__close(e);
      for (let r = 0, i = this.__left.length; r < i; ++r) {
        let n = this.__left[r];
        (n.tainted = !0), this.__delegateToUpperScope(n);
      }
      return (this.__left = null), this.upper;
    }
  },
  wa = class extends Ze {
    constructor(e, r, i) {
      super(e, "block", r, i, !1);
    }
  },
  _a = class extends Ze {
    constructor(e, r, i) {
      super(e, "switch", r, i, !1);
    }
  },
  Ba = class extends Ze {
    constructor(e, r, i, n) {
      super(e, "function", r, i, n);
      this.block.type !== mt.ArrowFunctionExpression &&
        this.__defineArguments();
    }
    isArgumentsMaterialized() {
      if (this.block.type === mt.ArrowFunctionExpression) return !1;
      if (!this.isStatic()) return !0;
      let e = this.set.get("arguments");
      return (
        (0, On.default)(e, "Always have arguments variable."),
        e.tainted || e.references.length !== 0
      );
    }
    isThisMaterialized() {
      return this.isStatic() ? this.thisFound : !0;
    }
    __defineArguments() {
      this.__defineGeneric("arguments", this.set, this.variables, null, null),
        this.taints.set("arguments", !0);
    }
    __isValidResolution(e, r) {
      if (this.block.type === "Program") return !0;
      let i = this.block.body.range[0];
      return !(
        r.scope === this &&
        e.identifier.range[0] < i &&
        r.defs.every((n) => n.name.range[0] >= i)
      );
    }
  },
  ka = class extends Ze {
    constructor(e, r, i) {
      super(e, "for", r, i, !1);
    }
  },
  Ia = class extends Ze {
    constructor(e, r, i) {
      super(e, "class", r, i, !1);
    }
  },
  Na = class extends Ze {
    constructor(e, r, i) {
      super(e, "class-field-initializer", r, i, !0);
    }
  },
  Ta = class extends Ze {
    constructor(e, r, i) {
      super(e, "class-static-block", r, i, !0);
    }
  };
var xf = st(hr(), 1),
  bf = class {
    constructor(e) {
      (this.scopes = []),
        (this.globalScope = null),
        (this.__nodeToScope = new WeakMap()),
        (this.__currentScope = null),
        (this.__options = e),
        (this.__declaredVariables = new WeakMap());
    }
    __useDirective() {
      return this.__options.directive;
    }
    __isOptimistic() {
      return this.__options.optimistic;
    }
    __ignoreEval() {
      return this.__options.ignoreEval;
    }
    __isNodejsScope() {
      return (
        this.__options.nodejsScope || this.__options.sourceType === "commonjs"
      );
    }
    isModule() {
      return this.__options.sourceType === "module";
    }
    isImpliedStrict() {
      return this.__options.impliedStrict;
    }
    isStrictModeSupported() {
      return this.__options.ecmaVersion >= 5;
    }
    __get(e) {
      return this.__nodeToScope.get(e);
    }
    getDeclaredVariables(e) {
      return this.__declaredVariables.get(e) || [];
    }
    acquire(e, r) {
      function i(s) {
        return !(s.type === "function" && s.functionExpressionScope);
      }
      let n = this.__get(e);
      if (!n || n.length === 0) return null;
      if (n.length === 1) return n[0];
      if (r)
        for (let s = n.length - 1; s >= 0; --s) {
          let a = n[s];
          if (i(a)) return a;
        }
      else
        for (let s = 0, a = n.length; s < a; ++s) {
          let u = n[s];
          if (i(u)) return u;
        }
      return null;
    }
    acquireAll(e) {
      return this.__get(e);
    }
    release(e, r) {
      let i = this.__get(e);
      if (i && i.length) {
        let n = i[0].upper;
        return n ? this.acquire(n.block, r) : null;
      }
      return null;
    }
    attach() {}
    detach() {}
    __nestScope(e) {
      return (
        e instanceof Ln &&
          ((0, xf.default)(this.__currentScope === null),
          (this.globalScope = e)),
        (this.__currentScope = e),
        e
      );
    }
    __nestGlobalScope(e) {
      return this.__nestScope(new Ln(this, e));
    }
    __nestBlockScope(e) {
      return this.__nestScope(new wa(this, this.__currentScope, e));
    }
    __nestFunctionScope(e, r) {
      return this.__nestScope(new Ba(this, this.__currentScope, e, r));
    }
    __nestForScope(e) {
      return this.__nestScope(new ka(this, this.__currentScope, e));
    }
    __nestCatchScope(e) {
      return this.__nestScope(new Ca(this, this.__currentScope, e));
    }
    __nestWithScope(e) {
      return this.__nestScope(new Fa(this, this.__currentScope, e));
    }
    __nestClassScope(e) {
      return this.__nestScope(new Ia(this, this.__currentScope, e));
    }
    __nestClassFieldInitializerScope(e) {
      return this.__nestScope(new Na(this, this.__currentScope, e));
    }
    __nestClassStaticBlockScope(e) {
      return this.__nestScope(new Ta(this, this.__currentScope, e));
    }
    __nestSwitchScope(e) {
      return this.__nestScope(new _a(this, this.__currentScope, e));
    }
    __nestModuleScope(e) {
      return this.__nestScope(new Da(this, this.__currentScope, e));
    }
    __nestFunctionExpressionNameScope(e) {
      return this.__nestScope(new Sa(this, this.__currentScope, e));
    }
    __isES6() {
      return this.__options.ecmaVersion >= 6;
    }
  },
  Af = bf;
var Ff = st(Fi(), 1),
  Oa = st(Pa(), 1);
var Df = st(Fi(), 1),
  Sf = st(Pa(), 1),
  { Syntax: zr } = Df.default;
function qm(t) {
  return t[t.length - 1] || null;
}
var Cf = class extends Sf.default.Visitor {
    static isPattern(e) {
      let r = e.type;
      return (
        r === zr.Identifier ||
        r === zr.ObjectPattern ||
        r === zr.ArrayPattern ||
        r === zr.SpreadElement ||
        r === zr.RestElement ||
        r === zr.AssignmentPattern
      );
    }
    constructor(e, r, i) {
      super(null, e);
      (this.rootPattern = r),
        (this.callback = i),
        (this.assignments = []),
        (this.rightHandNodes = []),
        (this.restElements = []);
    }
    Identifier(e) {
      let r = qm(this.restElements);
      this.callback(e, {
        topLevel: e === this.rootPattern,
        rest: r != null && r.argument === e,
        assignments: this.assignments,
      });
    }
    Property(e) {
      e.computed && this.rightHandNodes.push(e.key), this.visit(e.value);
    }
    ArrayPattern(e) {
      for (let r = 0, i = e.elements.length; r < i; ++r) {
        let n = e.elements[r];
        this.visit(n);
      }
    }
    AssignmentPattern(e) {
      this.assignments.push(e),
        this.visit(e.left),
        this.rightHandNodes.push(e.right),
        this.assignments.pop();
    }
    RestElement(e) {
      this.restElements.push(e),
        this.visit(e.argument),
        this.restElements.pop();
    }
    MemberExpression(e) {
      e.computed && this.rightHandNodes.push(e.property),
        this.rightHandNodes.push(e.object);
    }
    SpreadElement(e) {
      this.visit(e.argument);
    }
    ArrayExpression(e) {
      e.elements.forEach(this.visit, this);
    }
    AssignmentExpression(e) {
      this.assignments.push(e),
        this.visit(e.left),
        this.rightHandNodes.push(e.right),
        this.assignments.pop();
    }
    CallExpression(e) {
      e.arguments.forEach((r) => {
        this.rightHandNodes.push(r);
      }),
        this.visit(e.callee);
    }
  },
  wi = Cf;
var wf = st(hr(), 1),
  { Syntax: jt } = Ff.default;
function jm(t, e, r, i) {
  let n = new wi(t, e, i);
  n.visit(e), r != null && n.rightHandNodes.forEach(r.visit, r);
}
var _f = class extends Oa.default.Visitor {
    constructor(e, r) {
      super(null, r.options);
      (this.declaration = e), (this.referencer = r);
    }
    visitImport(e, r) {
      this.referencer.visitPattern(e, (i) => {
        this.referencer
          .currentScope()
          .__define(
            i,
            new rt(We.ImportBinding, i, r, this.declaration, null, null)
          );
      });
    }
    ImportNamespaceSpecifier(e) {
      let r = e.local || e.id;
      r && this.visitImport(r, e);
    }
    ImportDefaultSpecifier(e) {
      let r = e.local || e.id;
      this.visitImport(r, e);
    }
    ImportSpecifier(e) {
      let r = e.local || e.id;
      e.name ? this.visitImport(e.name, e) : this.visitImport(r, e);
    }
  },
  Bf = class extends Oa.default.Visitor {
    constructor(e, r) {
      super(null, e);
      (this.options = e),
        (this.scopeManager = r),
        (this.parent = null),
        (this.isInnerMethodDefinition = !1);
    }
    currentScope() {
      return this.scopeManager.__currentScope;
    }
    close(e) {
      for (; this.currentScope() && e === this.currentScope().block; )
        this.scopeManager.__currentScope = this.currentScope().__close(
          this.scopeManager
        );
    }
    pushInnerMethodDefinition(e) {
      let r = this.isInnerMethodDefinition;
      return (this.isInnerMethodDefinition = e), r;
    }
    popInnerMethodDefinition(e) {
      this.isInnerMethodDefinition = e;
    }
    referencingDefaultValue(e, r, i, n) {
      let s = this.currentScope();
      r.forEach((a) => {
        s.__referencing(e, dt.WRITE, a.right, i, e !== a.left, n);
      });
    }
    visitPattern(e, r, i) {
      let n = r,
        s = i;
      typeof r == "function" && ((s = r), (n = { processRightHandNodes: !1 })),
        jm(this.options, e, n.processRightHandNodes ? this : null, s);
    }
    visitFunction(e) {
      let r, i;
      e.type === jt.FunctionDeclaration &&
        this.currentScope().__define(
          e.id,
          new rt(We.FunctionName, e.id, e, null, null, null)
        ),
        e.type === jt.FunctionExpression &&
          e.id &&
          this.scopeManager.__nestFunctionExpressionNameScope(e),
        this.scopeManager.__nestFunctionScope(e, this.isInnerMethodDefinition);
      let n = this;
      function s(a, u) {
        n.currentScope().__define(a, new Pn(a, e, r, u.rest)),
          n.referencingDefaultValue(a, u.assignments, null, !0);
      }
      for (r = 0, i = e.params.length; r < i; ++r)
        this.visitPattern(e.params[r], { processRightHandNodes: !0 }, s);
      e.rest &&
        this.visitPattern({ type: "RestElement", argument: e.rest }, (a) => {
          this.currentScope().__define(a, new Pn(a, e, e.params.length, !0));
        }),
        e.body &&
          (e.body.type === jt.BlockStatement
            ? this.visitChildren(e.body)
            : this.visit(e.body)),
        this.close(e);
    }
    visitClass(e) {
      e.type === jt.ClassDeclaration &&
        this.currentScope().__define(
          e.id,
          new rt(We.ClassName, e.id, e, null, null, null)
        ),
        this.visit(e.superClass),
        this.scopeManager.__nestClassScope(e),
        e.id &&
          this.currentScope().__define(e.id, new rt(We.ClassName, e.id, e)),
        this.visit(e.body),
        this.close(e);
    }
    visitProperty(e) {
      let r;
      e.computed && this.visit(e.key);
      let i = e.type === jt.MethodDefinition;
      i && (r = this.pushInnerMethodDefinition(!0)),
        this.visit(e.value),
        i && this.popInnerMethodDefinition(r);
    }
    visitForIn(e) {
      e.left.type === jt.VariableDeclaration &&
        e.left.kind !== "var" &&
        this.scopeManager.__nestForScope(e),
        e.left.type === jt.VariableDeclaration
          ? (this.visit(e.left),
            this.visitPattern(e.left.declarations[0].id, (r) => {
              this.currentScope().__referencing(
                r,
                dt.WRITE,
                e.right,
                null,
                !0,
                !0
              );
            }))
          : this.visitPattern(e.left, { processRightHandNodes: !0 }, (r, i) => {
              let n = null;
              this.currentScope().isStrict || (n = { pattern: r, node: e }),
                this.referencingDefaultValue(r, i.assignments, n, !1),
                this.currentScope().__referencing(
                  r,
                  dt.WRITE,
                  e.right,
                  n,
                  !0,
                  !1
                );
            }),
        this.visit(e.right),
        this.visit(e.body),
        this.close(e);
    }
    visitVariableDeclaration(e, r, i, n) {
      let s = i.declarations[n],
        a = s.init;
      this.visitPattern(s.id, { processRightHandNodes: !0 }, (u, c) => {
        e.__define(u, new rt(r, u, s, i, n, i.kind)),
          this.referencingDefaultValue(u, c.assignments, null, !0),
          a &&
            this.currentScope().__referencing(
              u,
              dt.WRITE,
              a,
              null,
              !c.topLevel,
              !0
            );
      });
    }
    AssignmentExpression(e) {
      wi.isPattern(e.left)
        ? e.operator === "="
          ? this.visitPattern(e.left, { processRightHandNodes: !0 }, (r, i) => {
              let n = null;
              this.currentScope().isStrict || (n = { pattern: r, node: e }),
                this.referencingDefaultValue(r, i.assignments, n, !1),
                this.currentScope().__referencing(
                  r,
                  dt.WRITE,
                  e.right,
                  n,
                  !i.topLevel,
                  !1
                );
            })
          : this.currentScope().__referencing(e.left, dt.RW, e.right)
        : this.visit(e.left),
        this.visit(e.right);
    }
    CatchClause(e) {
      this.scopeManager.__nestCatchScope(e),
        this.visitPattern(e.param, { processRightHandNodes: !0 }, (r, i) => {
          this.currentScope().__define(
            r,
            new rt(We.CatchClause, e.param, e, null, null, null)
          ),
            this.referencingDefaultValue(r, i.assignments, null, !0);
        }),
        this.visit(e.body),
        this.close(e);
    }
    Program(e) {
      this.scopeManager.__nestGlobalScope(e),
        this.scopeManager.__isNodejsScope() &&
          ((this.currentScope().isStrict = !1),
          this.scopeManager.__nestFunctionScope(e, !1)),
        this.scopeManager.__isES6() &&
          this.scopeManager.isModule() &&
          this.scopeManager.__nestModuleScope(e),
        this.scopeManager.isStrictModeSupported() &&
          this.scopeManager.isImpliedStrict() &&
          (this.currentScope().isStrict = !0),
        this.visitChildren(e),
        this.close(e);
    }
    Identifier(e) {
      this.currentScope().__referencing(e);
    }
    PrivateIdentifier() {}
    UpdateExpression(e) {
      wi.isPattern(e.argument)
        ? this.currentScope().__referencing(e.argument, dt.RW, null)
        : this.visitChildren(e);
    }
    MemberExpression(e) {
      this.visit(e.object), e.computed && this.visit(e.property);
    }
    Property(e) {
      this.visitProperty(e);
    }
    PropertyDefinition(e) {
      let { computed: r, key: i, value: n } = e;
      r && this.visit(i),
        n &&
          (this.scopeManager.__nestClassFieldInitializerScope(n),
          this.visit(n),
          this.close(n));
    }
    StaticBlock(e) {
      this.scopeManager.__nestClassStaticBlockScope(e),
        this.visitChildren(e),
        this.close(e);
    }
    MethodDefinition(e) {
      this.visitProperty(e);
    }
    BreakStatement() {}
    ContinueStatement() {}
    LabeledStatement(e) {
      this.visit(e.body);
    }
    ForStatement(e) {
      e.init &&
        e.init.type === jt.VariableDeclaration &&
        e.init.kind !== "var" &&
        this.scopeManager.__nestForScope(e),
        this.visitChildren(e),
        this.close(e);
    }
    ClassExpression(e) {
      this.visitClass(e);
    }
    ClassDeclaration(e) {
      this.visitClass(e);
    }
    CallExpression(e) {
      !this.scopeManager.__ignoreEval() &&
        e.callee.type === jt.Identifier &&
        e.callee.name === "eval" &&
        this.currentScope().variableScope.__detectEval(),
        this.visitChildren(e);
    }
    BlockStatement(e) {
      this.scopeManager.__isES6() && this.scopeManager.__nestBlockScope(e),
        this.visitChildren(e),
        this.close(e);
    }
    ThisExpression() {
      this.currentScope().variableScope.__detectThis();
    }
    WithStatement(e) {
      this.visit(e.object),
        this.scopeManager.__nestWithScope(e),
        this.visit(e.body),
        this.close(e);
    }
    VariableDeclaration(e) {
      let r =
        e.kind === "var"
          ? this.currentScope().variableScope
          : this.currentScope();
      for (let i = 0, n = e.declarations.length; i < n; ++i) {
        let s = e.declarations[i];
        this.visitVariableDeclaration(r, We.Variable, e, i),
          s.init && this.visit(s.init);
      }
    }
    SwitchStatement(e) {
      this.visit(e.discriminant),
        this.scopeManager.__isES6() && this.scopeManager.__nestSwitchScope(e);
      for (let r = 0, i = e.cases.length; r < i; ++r) this.visit(e.cases[r]);
      this.close(e);
    }
    FunctionDeclaration(e) {
      this.visitFunction(e);
    }
    FunctionExpression(e) {
      this.visitFunction(e);
    }
    ForOfStatement(e) {
      this.visitForIn(e);
    }
    ForInStatement(e) {
      this.visitForIn(e);
    }
    ArrowFunctionExpression(e) {
      this.visitFunction(e);
    }
    ImportDeclaration(e) {
      (0, wf.default)(
        this.scopeManager.__isES6() && this.scopeManager.isModule(),
        "ImportDeclaration should appear when the mode is ES6 and in the module context."
      ),
        new _f(e, this).visit(e);
    }
    visitExportDeclaration(e) {
      if (!e.source) {
        if (e.declaration) {
          this.visit(e.declaration);
          return;
        }
        this.visitChildren(e);
      }
    }
    ExportDeclaration(e) {
      this.visitExportDeclaration(e);
    }
    ExportAllDeclaration(e) {
      this.visitExportDeclaration(e);
    }
    ExportDefaultDeclaration(e) {
      this.visitExportDeclaration(e);
    }
    ExportNamedDeclaration(e) {
      this.visitExportDeclaration(e);
    }
    ExportSpecifier(e) {
      let r = e.id || e.local;
      this.visit(r);
    }
    MetaProperty() {}
  },
  kf = Bf;
function Um() {
  return {
    optimistic: !1,
    directive: !1,
    nodejsScope: !1,
    impliedStrict: !1,
    sourceType: "script",
    ecmaVersion: 5,
    childVisitorKeys: null,
    fallback: "iteration",
  };
}
function La(t, e) {
  function r(i) {
    return (
      typeof i == "object" &&
      i instanceof Object &&
      !(i instanceof Array) &&
      !(i instanceof RegExp)
    );
  }
  for (let i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      let n = e[i];
      r(n) ? (r(t[i]) ? La(t[i], n) : (t[i] = La({}, n))) : (t[i] = n);
    }
  return t;
}
function Nf(t, e) {
  let r = La(Um(), e),
    i = new Af(r);
  return (
    new kf(r, i).visit(t),
    (0, If.default)(i.__currentScope === null, "currentScope should be null."),
    i
  );
}
function H(t, e) {
  for (let r in e) t[r] = e[r];
  return !0;
}
function Ra(t) {
  return [t.start, t.end].join("!");
}
var me = class {
  constructor(e, r) {
    (this.name = e), (this.options = this.buildOptions(r));
  }
  buildOptions(e) {
    return Yr({}, e);
  }
};
function Ma(t, e, r) {
  r(t, e);
}
function yr(t, e, r) {}
var N = {};
N.Program =
  N.BlockStatement =
  N.StaticBlock =
    function (t, e, r) {
      for (var i = 0, n = t.body; i < n.length; i += 1) {
        var s = n[i];
        r(s, e, "Statement");
      }
    };
N.Statement = Ma;
N.EmptyStatement = yr;
N.ExpressionStatement =
  N.ParenthesizedExpression =
  N.ChainExpression =
    function (t, e, r) {
      return r(t.expression, e, "Expression");
    };
N.IfStatement = function (t, e, r) {
  r(t.test, e, "Expression"),
    r(t.consequent, e, "Statement"),
    t.alternate && r(t.alternate, e, "Statement");
};
N.LabeledStatement = function (t, e, r) {
  return r(t.body, e, "Statement");
};
N.BreakStatement = N.ContinueStatement = yr;
N.WithStatement = function (t, e, r) {
  r(t.object, e, "Expression"), r(t.body, e, "Statement");
};
N.SwitchStatement = function (t, e, r) {
  r(t.discriminant, e, "Expression");
  for (var i = 0, n = t.cases; i < n.length; i += 1) {
    var s = n[i];
    s.test && r(s.test, e, "Expression");
    for (var a = 0, u = s.consequent; a < u.length; a += 1) {
      var c = u[a];
      r(c, e, "Statement");
    }
  }
};
N.SwitchCase = function (t, e, r) {
  t.test && r(t.test, e, "Expression");
  for (var i = 0, n = t.consequent; i < n.length; i += 1) {
    var s = n[i];
    r(s, e, "Statement");
  }
};
N.ReturnStatement =
  N.YieldExpression =
  N.AwaitExpression =
    function (t, e, r) {
      t.argument && r(t.argument, e, "Expression");
    };
N.ThrowStatement = N.SpreadElement = function (t, e, r) {
  return r(t.argument, e, "Expression");
};
N.TryStatement = function (t, e, r) {
  r(t.block, e, "Statement"),
    t.handler && r(t.handler, e),
    t.finalizer && r(t.finalizer, e, "Statement");
};
N.CatchClause = function (t, e, r) {
  t.param && r(t.param, e, "Pattern"), r(t.body, e, "Statement");
};
N.WhileStatement = N.DoWhileStatement = function (t, e, r) {
  r(t.test, e, "Expression"), r(t.body, e, "Statement");
};
N.ForStatement = function (t, e, r) {
  t.init && r(t.init, e, "ForInit"),
    t.test && r(t.test, e, "Expression"),
    t.update && r(t.update, e, "Expression"),
    r(t.body, e, "Statement");
};
N.ForInStatement = N.ForOfStatement = function (t, e, r) {
  r(t.left, e, "ForInit"),
    r(t.right, e, "Expression"),
    r(t.body, e, "Statement");
};
N.ForInit = function (t, e, r) {
  t.type === "VariableDeclaration" ? r(t, e) : r(t, e, "Expression");
};
N.DebuggerStatement = yr;
N.FunctionDeclaration = function (t, e, r) {
  return r(t, e, "Function");
};
N.VariableDeclaration = function (t, e, r) {
  for (var i = 0, n = t.declarations; i < n.length; i += 1) {
    var s = n[i];
    r(s, e);
  }
};
N.VariableDeclarator = function (t, e, r) {
  r(t.id, e, "Pattern"), t.init && r(t.init, e, "Expression");
};
N.Function = function (t, e, r) {
  t.id && r(t.id, e, "Pattern");
  for (var i = 0, n = t.params; i < n.length; i += 1) {
    var s = n[i];
    r(s, e, "Pattern");
  }
  r(t.body, e, t.expression ? "Expression" : "Statement");
};
N.Pattern = function (t, e, r) {
  t.type === "Identifier"
    ? r(t, e, "VariablePattern")
    : t.type === "MemberExpression"
    ? r(t, e, "MemberPattern")
    : r(t, e);
};
N.VariablePattern = yr;
N.MemberPattern = Ma;
N.RestElement = function (t, e, r) {
  return r(t.argument, e, "Pattern");
};
N.ArrayPattern = function (t, e, r) {
  for (var i = 0, n = t.elements; i < n.length; i += 1) {
    var s = n[i];
    s && r(s, e, "Pattern");
  }
};
N.ObjectPattern = function (t, e, r) {
  for (var i = 0, n = t.properties; i < n.length; i += 1) {
    var s = n[i];
    s.type === "Property"
      ? (s.computed && r(s.key, e, "Expression"), r(s.value, e, "Pattern"))
      : s.type === "RestElement" && r(s.argument, e, "Pattern");
  }
};
N.Expression = Ma;
N.ThisExpression = N.Super = N.MetaProperty = yr;
N.ArrayExpression = function (t, e, r) {
  for (var i = 0, n = t.elements; i < n.length; i += 1) {
    var s = n[i];
    s && r(s, e, "Expression");
  }
};
N.ObjectExpression = function (t, e, r) {
  for (var i = 0, n = t.properties; i < n.length; i += 1) {
    var s = n[i];
    r(s, e);
  }
};
N.FunctionExpression = N.ArrowFunctionExpression = N.FunctionDeclaration;
N.SequenceExpression = function (t, e, r) {
  for (var i = 0, n = t.expressions; i < n.length; i += 1) {
    var s = n[i];
    r(s, e, "Expression");
  }
};
N.TemplateLiteral = function (t, e, r) {
  for (var i = 0, n = t.quasis; i < n.length; i += 1) {
    var s = n[i];
    r(s, e);
  }
  for (var a = 0, u = t.expressions; a < u.length; a += 1) {
    var c = u[a];
    r(c, e, "Expression");
  }
};
N.TemplateElement = yr;
N.UnaryExpression = N.UpdateExpression = function (t, e, r) {
  r(t.argument, e, "Expression");
};
N.BinaryExpression = N.LogicalExpression = function (t, e, r) {
  r(t.left, e, "Expression"), r(t.right, e, "Expression");
};
N.AssignmentExpression = N.AssignmentPattern = function (t, e, r) {
  r(t.left, e, "Pattern"), r(t.right, e, "Expression");
};
N.ConditionalExpression = function (t, e, r) {
  r(t.test, e, "Expression"),
    r(t.consequent, e, "Expression"),
    r(t.alternate, e, "Expression");
};
N.NewExpression = N.CallExpression = function (t, e, r) {
  if ((r(t.callee, e, "Expression"), t.arguments))
    for (var i = 0, n = t.arguments; i < n.length; i += 1) {
      var s = n[i];
      r(s, e, "Expression");
    }
};
N.MemberExpression = function (t, e, r) {
  r(t.object, e, "Expression"), t.computed && r(t.property, e, "Expression");
};
N.ExportNamedDeclaration = N.ExportDefaultDeclaration = function (t, e, r) {
  t.declaration &&
    r(
      t.declaration,
      e,
      t.type === "ExportNamedDeclaration" || t.declaration.id
        ? "Statement"
        : "Expression"
    ),
    t.source && r(t.source, e, "Expression");
};
N.ExportAllDeclaration = function (t, e, r) {
  t.exported && r(t.exported, e), r(t.source, e, "Expression");
};
N.ImportDeclaration = function (t, e, r) {
  for (var i = 0, n = t.specifiers; i < n.length; i += 1) {
    var s = n[i];
    r(s, e);
  }
  r(t.source, e, "Expression");
};
N.ImportExpression = function (t, e, r) {
  r(t.source, e, "Expression");
};
N.ImportSpecifier =
  N.ImportDefaultSpecifier =
  N.ImportNamespaceSpecifier =
  N.Identifier =
  N.PrivateIdentifier =
  N.Literal =
    yr;
N.TaggedTemplateExpression = function (t, e, r) {
  r(t.tag, e, "Expression"), r(t.quasi, e, "Expression");
};
N.ClassDeclaration = N.ClassExpression = function (t, e, r) {
  return r(t, e, "Class");
};
N.Class = function (t, e, r) {
  t.id && r(t.id, e, "Pattern"),
    t.superClass && r(t.superClass, e, "Expression"),
    r(t.body, e);
};
N.ClassBody = function (t, e, r) {
  for (var i = 0, n = t.body; i < n.length; i += 1) {
    var s = n[i];
    r(s, e);
  }
};
N.MethodDefinition =
  N.PropertyDefinition =
  N.Property =
    function (t, e, r) {
      t.computed && r(t.key, e, "Expression"),
        t.value && r(t.value, e, "Expression");
    }; //! MIT License
//!
//! Copyright (C) 2012-2020 by various contributors (see AUTHORS)
//!
//! Permission is hereby granted, free of charge, to any person obtaining a copy
//! of this software and associated documentation files (the "Software"), to deal
//! in the Software without restriction, including without limitation the rights
//! to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//! copies of the Software, and to permit persons to whom the Software is
//! furnished to do so, subject to the following conditions:
//!
//! The above copyright notice and this permission notice shall be included in
//! all copies or substantial portions of the Software.
//!
//! THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//! IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//! FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//! AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//! LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//! OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//! THE SOFTWARE.
//!
//! ^ https://github.com/acornjs/acorn/blob/49ac049201/AUTHORS
//! ^ https://github.com/acornjs/acorn/blob/49ac049201/acorn-walk/src/index.js
function V(t, e, r, i, n) {
  let s = [],
    a = r || N;
  return (
    (function u(c, m, d) {
      let E = d || c.type,
        y = e[E],
        x = c !== s[s.length - 1];
      if ((x && s.push(c), a[E](c, m, u), y))
        try {
          y(c, m || s, s);
        } catch (b) {
          console.error(
            `Caught an error while attempting to run AST visitor!

node =`,
            c,
            `
err =`,
            b
          );
        }
      x && s.pop();
    })(t, i, n),
    t
  );
}
var Va = class {
  constructor(e) {
    this.node = e;
  }
};
function Zt(t, e, r, i) {
  let n = i || N,
    s = e[0],
    a = e[1];
  try {
    (function u(c, m, d) {
      let E = d || c.type;
      if (
        ((s == null || c.start <= s) &&
          (a == null || c.end >= a) &&
          n[E](c, {}, u),
        (s == null || c.start === s) &&
          (a == null || c.end === a) &&
          c.type === r)
      )
        throw new Va(c);
    })(t);
  } catch (u) {
    if (u instanceof Va) return u.node;
    throw u;
  }
}
function Tf(t) {
  return t.type === "PrivateIdentifier";
}
function ve(t) {
  return t.type === "Literal";
}
function be(t) {
  return ve(t) && typeof t.value == "string";
}
function ue(t) {
  return ve(t) && typeof t.value == "number";
}
function yt(t) {
  return ve(t) && typeof t.value == "boolean";
}
function it(t) {
  return t.type === "UnaryExpression";
}
function Be(t) {
  return it(t) && ue(t.argument);
}
function Ve(t) {
  return t.type === "ExpressionStatement";
}
function _t(t) {
  return t.type === "SequenceExpression";
}
function ke(t) {
  return t.type === "AssignmentExpression";
}
function Qe(t) {
  return t.type === "ReturnStatement";
}
function Ie(t) {
  return t.type === "VariableDeclaration";
}
function $r(t) {
  return t.type === "ArrayExpression";
}
function G(t) {
  return t.type === "Identifier";
}
function Pf(t) {
  return t.type === "ArrowFunctionExpression";
}
function ze(t) {
  return t.type === "FunctionExpression";
}
function Of(t) {
  return t.type === "UpdateExpression";
}
function Ge(t) {
  return t.type === "CallExpression";
}
function de(t) {
  return t.type === "BlockStatement";
}
function gr(t) {
  return t.type === "SwitchStatement";
}
function $e(t) {
  return t.type === "BinaryExpression";
}
function gt(t) {
  return t.type === "MemberExpression";
}
function er(t) {
  return t.type === "IfStatement";
}
function Lf(t) {
  return t.type === "ForStatement";
}
function Rf(t) {
  return t.type === "ObjectExpression";
}
function Mf(t) {
  return t.type === "LogicalExpression";
}
function nt(t) {
  return JSON.parse(JSON.stringify(t));
}
function Vf(t) {
  if (!ve(t) && !G(t)) throw new TypeError("Node is not Literal or Identifier");
  return ve(t) ? t.value.toString() : t.name;
}
function xt(t) {
  return t.filter((e) => e.type !== "EmptyStatement");
}
var Mn = class extends me {
  constructor(e) {
    super("ControlFlow", e);
    this.findStorageNodeAliases = (e, r) => (
      V(r, {
        BlockStatement: (i) => {
          if (i.body.length === 0) return;
          let n = this.getStorageNode(e, i);
          !n ||
            V(i, {
              VariableDeclaration(s) {
                let a = [];
                for (let u of s.declarations)
                  !u.init ||
                    !G(u.id) ||
                    !G(u.init) ||
                    (n.aliases.includes(u.init.name) &&
                      (n.aliases.push(u.id.name),
                      a.push(`${u.start}!${u.end}`)));
                (s.declarations = s.declarations.filter(
                  (u) => !a.includes(`${u.start}!${u.end}`)
                )),
                  s.declarations.length === 0 && (s.type = "EmptyStatement");
              },
            });
        },
      }),
      this
    );
    this.replacer = (e, r) => {
      let { translateCallExp: i } = this;
      return (
        V(r, {
          BlockStatement: (n) => {
            let s = this.getStorageNode(e, n);
            !s ||
              V(n, {
                MemberExpression(a) {
                  if (
                    !G(a.object) ||
                    !G(a.property) ||
                    !s.aliases.includes(a.object.name)
                  )
                    return;
                  let u = a.property.name,
                    c = -1;
                  (c = s.literals.findIndex((m) => m.identifier === u)) !==
                    -1 && H(a, { type: "Literal", value: s.literals[c].value });
                },
                CallExpression(a) {
                  if (
                    !gt(a.callee) ||
                    !G(a.callee.object) ||
                    !G(a.callee.property) ||
                    !s.aliases.includes(a.callee.object.name)
                  )
                    return;
                  let u = a.callee.property.name,
                    c = -1;
                  if (
                    (c = s.functions.findIndex((m) => m.identifier === u)) !==
                    -1
                  ) {
                    let m = s.functions[c].node;
                    H(a, i(m, a));
                  }
                },
              });
          },
        }),
        this
      );
    };
  }
  translateCallExp(e, r) {
    if (!Qe(e.body.body[0]))
      throw new TypeError(
        "Function in CFSN was invalid (not a returnstatement)"
      );
    if (!e.params.every((u) => G(u)))
      throw new TypeError("Function in CFSN was invalid (not ident params)");
    if (!e.body.body[0].argument)
      throw new TypeError("Function in CFSN was invalid (void return)");
    let i = e.params,
      n = new Map(),
      s = 0;
    for (let u of i) n.set(u.name, r.arguments[s]), ++s;
    let a = nt(e.body.body[0].argument);
    return (
      V(a, {
        Identifier(u) {
          let c = n.get(u.name);
          !c || H(u, c);
        },
      }),
      a
    );
  }
  getStorageNode(e, r) {
    let i = Ra(r);
    return e.controlFlowStorageNodes.get(i);
  }
  populateEmptyObjects(e) {
    return (
      V(e.ast, {
        BlockStatement(r) {
          V(r, {
            VariableDeclarator(i) {
              if (
                !G(i.id) ||
                !i.init ||
                !Rf(i.init) ||
                i.init.properties.length !== 0
              )
                return;
              let n = i.id.name;
              V(r, {
                ExpressionStatement(s) {
                  if (!ke(s.expression)) return;
                  let a = s.expression;
                  if (
                    !gt(a.left) ||
                    !G(a.left.object) ||
                    !G(a.left.property) ||
                    a.left.object.name !== n
                  )
                    return;
                  let u = {
                    type: "Property",
                    start: 0,
                    end: 0,
                    method: !1,
                    shorthand: !1,
                    computed: !1,
                    key: a.left.property,
                    value: a.right,
                    kind: "init",
                  };
                  i.init.properties.push(u),
                    (s.type = "EmptyStatement"),
                    e.log(`${n}.${a.left.property.name} = ${a.right.type}`);
                },
              });
            },
          });
        },
      }),
      this
    );
  }
  findStorageNode(e) {
    let { findStorageNodeAliases: r } = this;
    return (
      V(e.ast, {
        BlockStatement(i) {
          let n = Ra(i),
            s = e.controlFlowStorageNodes.get(n);
          s ||
            (i.body.length !== 0 &&
              V(i, {
                VariableDeclaration(a) {
                  var c;
                  let u = [];
                  for (let m of a.declarations)
                    if (
                      !!G(m.id) &&
                      ((c = m.init) == null ? void 0 : c.type) ===
                        "ObjectExpression" &&
                      m.init.properties.length !== 0 &&
                      !!m.init.properties.every(
                        (d) =>
                          d.type !== "SpreadElement" &&
                          ["FunctionExpression", "Literal"].includes(
                            d.value.type
                          ) &&
                          (d.key.type === "Literal" ||
                            d.key.type === "Identifier") &&
                          Vf(d.key).length === 5
                      )
                    ) {
                      (s = {
                        identifier: m.id.name,
                        aliases: [m.id.name],
                        functions: [],
                        literals: [],
                      }),
                        e.controlFlowStorageNodes.set(n, s);
                      for (let d of m.init.properties) {
                        let E = d.key,
                          y = G(E) ? E.name : E.value,
                          x = -1;
                        if (ve(d.value))
                          (x = s.literals.findIndex(
                            (b) => b.identifier === y
                          )) !== -1
                            ? (s.literals[x].value = d.value.value)
                            : s.literals.push({
                                identifier: y,
                                value: d.value.value,
                              });
                        else if (ze(d.value)) {
                          let b = xt(d.value.body.body);
                          if (b.length !== 1 || !Qe(b[0])) continue;
                          let w = nt(d.value);
                          (w.body.body = b),
                            (x = s.functions.findIndex(
                              (_) => _.identifier === y
                            )) !== -1
                              ? (s.functions[x].node = w)
                              : s.functions.push({ identifier: y, node: w });
                        }
                      }
                      e.log(
                        "Found control flow node id =",
                        m.id.name,
                        "#fn =",
                        s.functions.length,
                        "#lit =",
                        s.literals.length
                      ),
                        e.removeGarbage && u.push(`${m.start}!${m.end}`);
                    }
                  (a.declarations = a.declarations.filter(
                    (m) => !u.includes(`${m.start}!${m.end}`)
                  )),
                    a.declarations.length === 0 && (a.type = "EmptyStatement"),
                    r(e, i).replacer(e, i);
                },
              }));
        },
      }),
      this
    );
  }
  deflatten(e) {
    return (
      V(e.ast, {
        WhileStatement(r, i, n) {
          if (
            !yt(r.test) ||
            r.test.value !== !0 ||
            !de(r.body) ||
            r.body.body.length === 0 ||
            !gr(r.body.body[0])
          )
            return;
          let s = n[n.length - 2];
          if (!de(s)) return;
          let a = r.body.body[0];
          if (
            !gt(a.discriminant) ||
            !G(a.discriminant.object) ||
            !Of(a.discriminant.property) ||
            a.discriminant.property.operator !== "++" ||
            a.discriminant.property.prefix !== !1 ||
            !G(a.discriminant.property.argument)
          )
            return;
          let u = a.discriminant.object.name,
            c = a.discriminant.property.argument.name,
            m = [],
            d = -1;
          if (
            (V(s, {
              VariableDeclaration(x) {
                let b = [];
                for (let w of x.declarations)
                  if (!!G(w.id) && !!w.init)
                    if (w.id.name === u) {
                      if (
                        !Ge(w.init) ||
                        !gt(w.init.callee) ||
                        !be(w.init.callee.object) ||
                        !G(w.init.callee.property) ||
                        w.init.callee.property.name !== "split" ||
                        !be(w.init.arguments[0])
                      )
                        continue;
                      let _ = w.init.callee.object.value,
                        O = w.init.arguments[0].value;
                      (m = _.split(O)), b.push(`${w.start}!${w.end}`);
                    } else if (w.id.name === c) {
                      if (!ue(w.init)) continue;
                      (d = w.init.value), b.push(`${w.start}!${w.end}`);
                    } else continue;
                (x.declarations = x.declarations.filter(
                  (w) => !b.includes(`${w.start}!${w.end}`)
                )),
                  x.declarations.length === 0 && (x.type = "EmptyStatement");
              },
            }),
            m.length === 0 || d === -1)
          )
            return;
          let E = [];
          for (let x = d; x < m.length; x++) {
            let b = m[x],
              w = a.cases.find(
                (_) => _.test && ve(_.test) && _.test.value === b
              );
            if (!w) return;
            E.push(w.consequent.filter((_) => _.type !== "ContinueStatement"));
          }
          let y = s.body.findIndex(
            (x) => x.type === r.type && x.start === r.start && x.end === r.end
          );
          s.body.splice(y, 1, ...E.flat()),
            e.log("Found flattened control flow arr =", m, "idx =", d);
        },
      }),
      this
    );
  }
  transform(e) {
    return ye(this, null, function* () {
      this.populateEmptyObjects(e).findStorageNode(e).deflatten(e);
    });
  }
};
var Vn = class extends me {
  constructor(e) {
    super("Desequence", e);
  }
  desequence(e) {
    function r(i) {
      let n = i.body.length;
      for (let s = 0; s < n; ++s) {
        let a = i.body[s];
        if (Ve(a) && _t(a.expression)) {
          i.body[s].type = "EmptyStatement";
          let u = a.expression.expressions.map((c) => ({
            type: "ExpressionStatement",
            expression: c,
          }));
          i.body.splice(s, 0, ...u), (s += u.length), (n = i.body.length);
        }
      }
    }
    return (
      V(e, {
        BlockStatement(i) {
          r(i);
        },
        Program(i) {
          r(i);
        },
      }),
      this
    );
  }
  transform(e) {
    return ye(this, null, function* () {
      this.desequence(e.ast);
    });
  }
};
var Gn = class extends me {
  constructor(e) {
    super("LiteralMap", e);
  }
  demap(e) {
    return (
      V(e.ast, {
        BlockStatement(r) {
          let i = new Map();
          V(r, {
            VariableDeclaration(n) {
              let s = [];
              for (let a of n.declarations) {
                if (
                  !a.init ||
                  a.init.type !== "ObjectExpression" ||
                  !G(a.id) ||
                  a.init.properties.length === 0 ||
                  !a.init.properties.every(
                    (m) =>
                      m.type !== "SpreadElement" &&
                      (ve(m.key) || G(m.key)) &&
                      ve(m.value)
                  )
                )
                  continue;
                let u = a.id.name,
                  c = i.get(u) || new Map();
                for (let m of a.init.properties) {
                  let d = m,
                    E = d.key.type === "Identifier" ? d.key.name : d.key.value;
                  c.set(E, d.value.value);
                }
                i.has(u) || i.set(u, c),
                  e.removeGarbage && s.push(`${a.start}!${a.end}`);
              }
              n.declarations = n.declarations.filter(
                (a) => !s.includes(`${a.start}!${a.end}`)
              );
            },
          }),
            V(r, {
              MemberExpression(n) {
                if (!G(n.object) || (!ve(n.property) && !G(n.property))) return;
                let s = i.get(n.object.name);
                if (!s) return;
                let a = G(n.property) ? n.property.name : n.property.value,
                  u = s.get(a);
                typeof u != "undefined" && H(n, { type: "Literal", value: u });
              },
            });
        },
      }),
      this
    );
  }
  literals(e) {
    function r(i) {
      var s;
      let n = e.scopeManager.acquire(i);
      if (n)
        for (let a of n.variables) {
          if (
            a.name === "arguments" ||
            a.identifiers.length !== 1 ||
            a.defs.length !== 1
          )
            continue;
          let u = a.defs[0];
          if (u.type !== "Variable") continue;
          let c = u.node;
          if (
            ((s = c.init) == null ? void 0 : s.type) === "Literal" &&
            !(typeof c.init.value == "string" && c.init.value.length === 65) &&
            !!a.references.every((m) => m.init || m.isReadOnly())
          )
            for (let m of a.references) {
              if (m.init) {
                let E = u.node,
                  y = u.parent;
                y.type === "VariableDeclaration" &&
                  (y.declarations = y.declarations.filter(
                    (x) => x.start !== E.start && x.end !== E.end
                  ));
                continue;
              }
              let d = Zt(i, m.identifier.range, "Identifier");
              !d || H(d, c.init);
            }
        }
    }
    return (
      V(e.ast, {
        FunctionDeclaration: r,
        FunctionExpression: r,
        ArrowFunctionExpression: r,
      }),
      this
    );
  }
  transform(e) {
    return ye(this, null, function* () {
      this.demap(e).literals(e);
    });
  }
};
var zm = /^[a-z][\w]*$/i,
  qn = class extends me {
    constructor(e) {
      super("MemberExpressionCleaner", e);
    }
    clean(e) {
      return (
        V(e, {
          MemberExpression(r) {
            Tf(r.property) ||
              !be(r.property) ||
              !r.property.value.match(zm) ||
              ((r.computed = !1),
              H(r.property, { type: "Identifier", name: r.property.value }));
          },
        }),
        this
      );
    }
    transform(e) {
      return ye(this, null, function* () {
        this.clean(e.ast);
      });
    }
  };
function Er(t, e = !1) {
  if (t.argument.type !== "Literal")
    throw new TypeError("UnaryExpression argument is not Literal");
  if (typeof t.argument.value != "number" && !e)
    throw new TypeError("UnaryExpression argument value is not number");
  let r = e ? parseInt(t.argument.value) : t.argument.value;
  return t.operator === "-" && (r = r * -1), r;
}
function Ne(t, e = !1) {
  if (ue(t)) return t.value;
  if (be(t) && e) return parseInt(t.value);
  if (it(t)) return Er(t, e);
  throw new TypeError("Couldn't translate node to Number");
}
function jn(t) {
  return t < 0
    ? {
        type: "UnaryExpression",
        prefix: !0,
        operator: "-",
        argument: { type: "Literal", start: 0, end: 0, value: Math.abs(t) },
      }
    : { type: "Literal", value: t };
}
function _i(t, e, r) {
  switch (e) {
    case "+":
      return t + r;
    case "*":
      return t * r;
    case "-":
      return t - r;
    case "/":
      return t / r;
    default:
      return t;
  }
}
var Ut = class extends me {
  constructor(e) {
    super("Simplify", e);
    this.ALLOWED_MATH_OPERS = ["+", "-", "*", "/"];
    this.ALLOWED_COMPARISON_OPERS = [
      "==",
      "===",
      "!=",
      "!==",
      ">",
      "<",
      "<=",
      ">=",
    ];
  }
  negativeString(e) {
    return (
      V(e.ast, {
        UnaryExpression(r) {
          r.argument.type === "Literal" &&
            typeof r.argument.value == "string" &&
            r.argument.value.startsWith("0x") &&
            r.operator === "-" &&
            H(r, { type: "Literal", value: Er(r, !0) });
        },
      }),
      this
    );
  }
  binEval(e, r, i) {
    switch (r) {
      case "==":
        return e == i;
      case "===":
        return e === i;
      case "!=":
        return e != i;
      case "!==":
        return e !== i;
      case ">":
        return e > i;
      case "<":
        return e < i;
      case "<=":
        return e <= i;
      case ">=":
        return e >= i;
    }
    throw new TypeError(`Operator ${r} is invalid`);
  }
  stringConcat(e) {
    return (
      V(e.ast, {
        BinaryExpression(r) {
          be(r.left) &&
            be(r.right) &&
            r.operator === "+" &&
            H(r, { type: "Literal", value: r.left.value + r.right.value });
        },
      }),
      this
    );
  }
  math(e) {
    let { ALLOWED_MATH_OPERS: r } = this;
    return (
      V(e, {
        BinaryExpression(i) {
          if (
            !!r.includes(i.operator) &&
            (Be(i.left) && H(i.left, { type: "Literal", value: Er(i.left) }),
            Be(i.right) && H(i.right, { type: "Literal", value: Er(i.right) }),
            ue(i.left) && ue(i.right))
          ) {
            let n = _i(i.left.value, i.operator, i.right.value);
            if (isNaN(n)) return;
            H(i, jn(n));
          }
        },
      }),
      this
    );
  }
  truthyFalsy(e) {
    return (
      V(e.ast, {
        UnaryExpression(r) {
          r.operator === "!" &&
            (!$r(r.argument) ||
              (r.argument.elements.length === 0 &&
                H(r, { type: "Literal", value: !1 })));
        },
      }),
      V(e.ast, {
        UnaryExpression(r) {
          if (r.operator === "!") {
            if (yt(r.argument))
              return H(r, { type: "Literal", value: !r.argument.value });
            if (ue(r.argument)) {
              if (![0, 1].includes(r.argument.value)) return;
              H(r, { type: "Literal", value: !r.argument.value });
            }
          }
        },
      }),
      this
    );
  }
  literalComparison(e) {
    let { ALLOWED_COMPARISON_OPERS: r, binEval: i } = this;
    return (
      V(e, {
        BinaryExpression(n) {
          if (
            (!ue(n.left) && !Be(n.left) && !be(n.left)) ||
            (!ue(n.right) && !Be(n.right) && !be(n.right)) ||
            !r.includes(n.operator)
          )
            return;
          let s = ve(n.left) ? n.left.value : Er(n.left),
            a = ve(n.right) ? n.right.value : Er(n.right),
            u = i(s, n.operator, a);
          H(n, { type: "Literal", value: u });
        },
      }),
      this
    );
  }
  singleToBlock(e) {
    return (
      V(e.ast, {
        ForStatement(r) {
          de(r.body) ||
            H(r.body, { type: "BlockStatement", body: [nt(r.body)] });
        },
        WhileStatement(r) {
          de(r.body) ||
            H(r.body, { type: "BlockStatement", body: [nt(r.body)] });
        },
        IfStatement(r) {
          de(r.consequent) ||
            H(r.consequent, {
              type: "BlockStatement",
              body: [nt(r.consequent)],
            }),
            r.alternate &&
              !de(r.alternate) &&
              H(r.alternate, {
                type: "BlockStatement",
                body: [nt(r.alternate)],
              });
        },
      }),
      this
    );
  }
  conditionalExpression(e) {
    return (
      V(e, {
        ConditionalExpression(r, i, n) {
          if (yt(r.test)) {
            if (!r.test.value) {
              r.test.value = !0;
              let s = r.consequent;
              (r.consequent = r.alternate), (r.alternate = s);
            }
            H(r.alternate, { type: "Identifier", name: "undefined" }),
              H(r, r.consequent);
          }
        },
      }),
      this
    );
  }
  logicalExpression(e) {
    return (
      V(e.ast, {
        ExpressionStatement(r) {
          if (
            !Ve(r) ||
            !Mf(r.expression) ||
            !$e(r.expression.left) ||
            !_t(r.expression.right)
          )
            return;
          let i = [...r.expression.right.expressions].map((n) =>
            n.type !== "ExpressionStatement"
              ? {
                  type: "ExpressionStatement",
                  start: n.start,
                  end: n.end,
                  expression: n,
                }
              : n
          );
          H(r, {
            type: "IfStatement",
            test: r.expression.left,
            consequent: { type: "BlockStatement", start: 0, end: 0, body: i },
          });
        },
      }),
      this
    );
  }
  fixup(e) {
    return (
      V(e.ast, {
        Literal(r) {
          !ue(r) ||
            r.value >= 0 ||
            H(r, {
              type: "UnaryExpression",
              operator: "-",
              prefix: !0,
              argument: { type: "Literal", value: Math.abs(r.value) },
            });
        },
      }),
      V(e.ast, {
        VariableDeclaration(r) {
          (r.declarations = r.declarations.filter(
            (i) => !i.init || i.init.type !== "EmptyStatement"
          )),
            r.declarations.length === 0 && (r.type = "EmptyStatement");
        },
      }),
      this
    );
  }
  fixProxies(e) {
    return (
      V(e.ast, {
        CallExpression(r) {
          if (
            (!ze(r.callee) && !Pf(r.callee)) ||
            !de(r.callee.body) ||
            r.callee.body.body.length !== 1 ||
            !Qe(r.callee.body.body[0])
          )
            return;
          let i = r.callee.body.body[0].argument;
          if (i) {
            if (
              [
                "FunctionExpression",
                "ArrowFunctionExpression",
                "FunctionDeclaration",
              ].includes(i.type)
            )
              H(r, i);
            else if (Ge(i)) {
              if (!r.arguments.every((s) => ve(s) || G(s))) return;
              let n = e.scopeManager.acquire(r.callee);
              if (!n) return;
              for (let s of n.variables) {
                if (s.defs.length !== 1) continue;
                let a = s.defs[0];
                if (a.type !== "Parameter") continue;
                let u = a.index;
                for (let c of s.references) H(c.identifier, r.arguments[u]);
              }
              H(r, i);
            }
          }
        },
      }),
      this
    );
  }
  transform(e) {
    return ye(this, null, function* () {
      this.negativeString(e)
        .stringConcat(e)
        .math(e.ast)
        .truthyFalsy(e)
        .literalComparison(e.ast)
        .conditionalExpression(e.ast)
        .singleToBlock(e)
        .fixup(e)
        .logicalExpression(e)
        .fixProxies(e);
    });
  }
};
var Un = class extends me {
  constructor(e) {
    super("StringDecoder", e);
    this.util_decode = (e, r, i) => {
      let n,
        s = 0,
        a = 0,
        u = 1,
        c = -1,
        m = (y) => y.identifier === r;
      if (e.stringDecoders.findIndex(m) !== -1) n = e.stringDecoders.find(m);
      else if ((c = e.stringDecoderReferences.findIndex(m)) !== -1) {
        let y = e.stringDecoderReferences[c];
        s += y.additionalOffset;
        let x = y;
        for (r = y.realIdentifier; x; )
          (x = e.stringDecoderReferences.find(m)),
            x && ((s += x.additionalOffset), (r = x.realIdentifier));
        (n = e.stringDecoders.find(m)),
          typeof y.indexArgument == "number" && (a = y.indexArgument),
          typeof y.keyArgument == "number" && (u = y.keyArgument);
      } else throw new TypeError(`Failed to decode ${r}, no decoder`);
      s += n.offset;
      let d = typeof i[a] == "string" ? parseInt(i[a]) : i[a],
        E = "";
      switch (n.type) {
        case 0:
          return this.decodeSimple(e, r, d, s);
        case 1:
          return this.decodeBase64(e, r, d, s);
        case 2:
          return (E = i[u]), this.decodeRC4(e, r, d, E, s);
        default:
          throw new TypeError("Invalid decoder function type");
      }
    };
    this.getString = (e, r, i, n) => {
      let s = e.stringDecoders.find((u) => u.identifier === r);
      if (!s)
        throw new Error(`Failed to find string decoder with identifier "${r}"`);
      let a = e.stringArrays.find(
        (u) => u.identifier === s.stringArrayIdentifier
      );
      if (!a)
        throw new Error(
          `Failed to find string array with identifier "${s.stringArrayIdentifier}"`
        );
      return a.strings[i + n];
    };
    this.calcShift = (e, r, i, n) => {
      let { util_decode: s, literals_to_arg_array: a } = this,
        u = new Ut({}),
        c = e.stringArrays.find((E) => E.identifier === i),
        m = c.strings.length * 2,
        d = 0;
      for (;;) {
        if ((d++, d > m))
          throw new Error(
            `Push/shift calculation failed (iter=${d}>maxLoops=${m})`
          );
        let E = nt(n),
          y = !1;
        if (
          (c.strings.push(c.strings.shift()),
          V(E, {
            CallExpression(x) {
              if (
                !G(x.callee) ||
                x.callee.name !== "parseInt" ||
                x.arguments.length !== 1 ||
                x.arguments[0].type !== "CallExpression" ||
                x.arguments[0].callee.type !== "Identifier" ||
                x.arguments[0].arguments.length === 0 ||
                x.arguments[0].arguments.length > 5 ||
                (x.arguments[0].arguments[0].type !== "Literal" &&
                  x.arguments[0].arguments[0].type !== "UnaryExpression")
              )
                return;
              let b = -1;
              try {
                let w = a(x.arguments[0].arguments);
                b = parseInt(s(e, x.arguments[0].callee.name, w));
              } catch (w) {
                throw w;
              }
              isNaN(b)
                ? (H(x, { type: "Identifier", name: "NaN" }), (y = !0))
                : H(x, { type: "Literal", value: b });
            },
          }),
          !y && (u.math(E), E.type === "Literal" && E.value === r))
        )
          break;
      }
      e.shiftedArrays++;
    };
  }
  literals_to_arg_array(e) {
    return e.map((r) => (it(r) ? Ne(r, !0) : ve(r) ? r.value : void 0));
  }
  util_b64_decode(e, r) {
    let i = "",
      n = "";
    for (
      let s = 0, a = 0, u, c = 0;
      (u = r.charAt(c++));
      ~u && ((a = s % 4 ? a * 64 + u : u), s++ % 4)
        ? (i += String.fromCharCode(255 & (a >> ((-2 * s) & 6))))
        : 0
    )
      u = e.indexOf(u);
    for (let s = 0, a = i.length; s < a; s++)
      n += "%" + ("00" + i.charCodeAt(s).toString(16)).slice(-2);
    return decodeURIComponent(n);
  }
  util_rc4_decode(e, r, i) {
    let n = [],
      s = 0,
      a,
      u = "";
    r = this.util_b64_decode(e, r);
    let c;
    for (c = 0; c < 256; c++) n[c] = c;
    for (c = 0; c < 256; c++)
      (s = (s + n[c] + i.charCodeAt(c % i.length)) % 256),
        (a = n[c]),
        (n[c] = n[s]),
        (n[s] = a);
    (c = 0), (s = 0);
    for (let m = 0; m < r.length; m++)
      (c = (c + 1) % 256),
        (s = (s + n[c]) % 256),
        (a = n[c]),
        (n[c] = n[s]),
        (n[s] = a),
        (u += String.fromCharCode(r.charCodeAt(m) ^ n[(n[c] + n[s]) % 256]));
    return u;
  }
  decodeSimple(e, r, i, n) {
    return this.getString(e, r, i, n);
  }
  decodeBase64(e, r, i, n) {
    let s = this.getString(e, r, i, n),
      a = e.stringDecoders.find(
        (u) => u.identifier === r && u.type === 1
      ).charset;
    return this.util_b64_decode(a, s);
  }
  decodeRC4(e, r, i, n, s) {
    let a = this.getString(e, r, i, s),
      u = e.stringDecoders.find(
        (c) => c.identifier === r && c.type === 2
      ).charset;
    return this.util_rc4_decode(u, a, n);
  }
  stringsFinder(e) {
    return (
      e.stringArrays.some((r) => r.type === 1) &&
        V(e.ast, {
          VariableDeclaration(r, i, n) {
            let s = [];
            for (let a of r.declarations) {
              if (!G(a.id) || !a.init || !$r(a.init)) continue;
              let u = a.id.name;
              if (
                !e.stringArrays.find(
                  (m) => m.type === 1 && m.identifier === u
                ) ||
                !a.init.elements.every((m) => be(m))
              )
                continue;
              let c = e.stringArrays.find((m) => m.identifier === u);
              (c.strings = a.init.elements.map((m) => m.value)),
                e.log(
                  "Found string array at",
                  c.identifier,
                  "#",
                  c.strings.length
                ),
                s.push(`${a.start}!${a.end}`);
            }
            r.declarations = r.declarations.filter(
              (a) => !s.includes(`${a.start}!${a.end}`)
            );
          },
        }),
      V(e.ast, {
        FunctionDeclaration(r) {
          var c, m, d;
          let i = r.body;
          if (
            i.body.length !== 3 ||
            !Ie(i.body[0]) ||
            !Ve(i.body[1]) ||
            !Qe(i.body[2]) ||
            !G(i.body[0].declarations[0].id) ||
            !i.body[0].declarations[0].init ||
            ((c = i.body[0].declarations[0].init) == null ? void 0 : c.type) !==
              "ArrayExpression"
          )
            return;
          let n = (m = r.id) == null ? void 0 : m.name,
            s = i.body[0].declarations[0].id.name,
            a = i.body[0].declarations[0].init;
          if (
            !ke(i.body[1].expression) ||
            !G(i.body[1].expression.left) ||
            i.body[1].expression.left.name !== n ||
            !ze(i.body[1].expression.right) ||
            !Qe(i.body[1].expression.right.body.body[0]) ||
            ((d = i.body[1].expression.right.body.body[0].argument) == null
              ? void 0
              : d.type) !== "Identifier" ||
            i.body[1].expression.right.body.body[0].argument.name !== s ||
            !a.elements.every((E) => be(E))
          )
            return;
          let u = {
            identifier: n,
            type: 0,
            strings: a.elements.map((E) => E.value),
          };
          e.removeGarbage && (r.type = "EmptyStatement"),
            e.stringArrays.push(u),
            e.log("Found string array at", u.identifier, "#", u.strings.length);
        },
      }),
      this
    );
  }
  funcFinder(e) {
    return (
      V(e.ast, {
        FunctionDeclaration(r) {
          var x, b, w, _;
          if (!r.id) return;
          let i = r.body,
            n = r.id.name;
          if (
            (i.body.length > 3 && i.body.length < 1) ||
            !i.body[0] ||
            (!Ie(i.body[0]) && i.body.length !== 1)
          )
            return;
          let s = i.body[i.body.length - 1];
          if (!Qe(s) || !s.argument) return;
          let a, u;
          if (s.argument.type === "SequenceExpression") {
            if (
              !Qe(s) ||
              ((x = s.argument) == null ? void 0 : x.type) !==
                "SequenceExpression" ||
              s.argument.expressions.length !== 2 ||
              !ke(s.argument.expressions[0]) ||
              !Ge(s.argument.expressions[1])
            )
              return;
            u = s.argument.expressions[0];
          } else if (s.argument.type === "CallExpression") {
            if (
              !G(s.argument.callee) ||
              s.argument.callee.name !== n ||
              !Ve(i.body[1]) ||
              !ke(i.body[1].expression)
            )
              return;
            u = i.body[1].expression;
          }
          if (!u || !G(u.left) || u.left.name !== n || !ze(u.right)) return;
          a = u.right;
          let c = e.stringArrays.map((O) => O.identifier),
            m = "";
          if (i.body.length !== 1 && Ie(i.body[0])) {
            if (
              ((b = i.body[0].declarations[0].init) == null
                ? void 0
                : b.type) !== "CallExpression" ||
              i.body[0].declarations[0].init.callee.type !== "Identifier" ||
              !c.includes(i.body[0].declarations[0].init.callee.name)
            )
              return;
            m = i.body[0].declarations[0].init.callee.name;
          }
          let d = a.body.body;
          if (i.body.length === 1) {
            if (
              !d[1] ||
              !Ie(d[1]) ||
              ((w = d[1].declarations[0].init) == null ? void 0 : w.type) !==
                "MemberExpression" ||
              !G(d[1].declarations[0].init.object) ||
              !G(d[1].declarations[0].init.property)
            )
              return;
            m = d[1].declarations[0].init.object.name;
            let O = { identifier: m, type: 1, strings: [] };
            e.stringArrays.push(O),
              e.log("Added", O.identifier, "as a string array to be found");
          }
          let E = 0;
          if (
            !Ve(d[0]) ||
            !ke(d[0].expression) ||
            !$e(d[0].expression.right) ||
            (!ve(d[0].expression.right.right) &&
              !it(d[0].expression.right.right))
          )
            return;
          (E = Ne(d[0].expression.right.right)),
            d[0].expression.right.operator === "-" && (E = E * -1);
          let y = {
            identifier: r.id.name,
            stringArrayIdentifier: m,
            offset: E,
            type: 0,
            indexArgument: 0,
            keyArgument: 1,
          };
          if (d.length >= 3 && er(d[2])) {
            if (!de(d[2].consequent) || d[2].consequent.body.length <= 1)
              return;
            if (
              (Ve(d[2].consequent.body[0]) &&
                ke(d[2].consequent.body[0].expression) &&
                H(d[2].consequent.body[0], {
                  type: "VariableDeclaration",
                  declarations: [
                    {
                      type: "VariableDeclarator",
                      start: 0,
                      end: 0,
                      id: {
                        type: "Identifier",
                        start: 0,
                        end: 0,
                        name: "b64dec",
                      },
                      init: d[2].consequent.body[0].expression.right,
                    },
                  ],
                }),
              Ve(d[2].consequent.body[1]) &&
                ke(d[2].consequent.body[1].expression) &&
                H(d[2].consequent.body[1], {
                  type: "VariableDeclaration",
                  declarations: [
                    {
                      type: "VariableDeclarator",
                      start: 0,
                      end: 0,
                      id: {
                        type: "Identifier",
                        start: 0,
                        end: 0,
                        name: "rc4dec",
                      },
                      init: d[2].consequent.body[1].expression.right,
                    },
                  ],
                }),
              Ie(d[2].consequent.body[0]) &&
                ze(d[2].consequent.body[0].declarations[0].init) &&
                (!Ie(d[2].consequent.body[1]) ||
                  !ze(d[2].consequent.body[1].declarations[0].init)))
            ) {
              let O = d[2].consequent.body[0].declarations[0].init,
                L = O.body.body;
              if (Ie(L[0]) && be(L[0].declarations[0].init)) {
                let R = L[0].declarations[0].init.value;
                R.length === 65 && ((y.type = 1), (y.charset = R));
              }
            } else if (
              d[2].consequent.body.length >= 3 &&
              Ie(d[2].consequent.body[0]) &&
              ze(d[2].consequent.body[0].declarations[0].init) &&
              Ie(d[2].consequent.body[1]) &&
              ze(d[2].consequent.body[1].declarations[0].init)
            ) {
              let O = d[2].consequent.body[0].declarations[0].init,
                L = O.body.body;
              if (Ie(L[0]) && be(L[0].declarations[0].init)) {
                let R = L[0].declarations[0].init.value;
                R.length === 65 && ((y.type = 2), (y.charset = R));
              }
            }
          }
          e.stringDecoders.push(y),
            e.removeGarbage && (r.type = "EmptyStatement"),
            e.log(
              "Found decoder function",
              (_ = r.id) == null ? void 0 : _.name,
              "arrayId =",
              y.stringArrayIdentifier,
              "offset =",
              E,
              "type =",
              y.type
            );
        },
      }),
      this
    );
  }
  shiftFinder(e) {
    let { calcShift: r } = this;
    function i(n) {
      if (!Ge(n) || n.callee.type !== "FunctionExpression") return !1;
      let s = n.callee.body.body,
        a = [...s].reverse();
      if (s.length < 2) return;
      let u;
      if (a[0].type === "ForStatement") {
        if (!de(a[0].body)) return;
        u = xt(a[0].body.body);
      } else if (a[0].type === "WhileStatement") {
        if (!de(a[0].body)) return;
        u = xt(a[0].body.body);
      } else return;
      if (
        u.length !== 1 ||
        u[0].type !== "TryStatement" ||
        xt(u[0].block.body).length !== 2
      )
        return;
      let c = xt(u[0].block.body);
      if (
        n.arguments.length !== 2 ||
        n.arguments[0].type !== "Identifier" ||
        n.arguments[1].type !== "Literal"
      )
        return;
      let m = n.arguments[1].value,
        d;
      if (c[0].type === "VariableDeclaration") {
        if (!c[0].declarations[0].init) return;
        d = c[0].declarations[0].init;
      } else if (c[0].type === "IfStatement") {
        if (
          !$e(c[0].test) ||
          c[0].test.operator !== "===" ||
          !ue(c[0].test.left) ||
          c[0].test.left.value !== m
        )
          return;
        d = c[0].test.right;
      } else return;
      if (d.type !== "BinaryExpression") return;
      let E = n.arguments[0].name,
        y = e.stringArrays.find((x) => x.identifier === E);
      if (!y)
        throw new Error(
          `Failed to find string array with identifier "${E}" for push/shift calc`
        );
      return (
        r(e, m, y.identifier, d),
        e.log("Found push/shift IIFE breakCond =", m),
        !!e.removeGarbage
      );
    }
    return (
      V(e.ast, {
        ExpressionStatement(n) {
          if (_t(n.expression)) {
            let s = [];
            for (let a of n.expression.expressions)
              i(a) && s.push(`${a.start}!${a.end}`);
            s &&
              (n.expression.expressions = n.expression.expressions.filter(
                (a) => !s.includes(`${a.start}!${a.end}`)
              ));
          } else i(n.expression) && (n.type = "EmptyStatement");
        },
      }),
      this
    );
  }
  shiftFinder2(e) {
    let { calcShift: r } = this;
    function i(n) {
      if (!Ge(n) || n.callee.type !== "FunctionExpression") return !1;
      let s = n.callee.body.body,
        a = [...s].reverse(),
        u = e.scopeManager.acquire(n.callee);
      if (!u) return;
      let c = !1,
        m;
      if (
        (V(n, {
          ExpressionStatement(L) {
            if (
              !Ge(L.expression) ||
              L.expression.arguments.length === 0 ||
              !gt(L.expression.callee) ||
              !G(L.expression.callee.object) ||
              !G(L.expression.callee.property) ||
              ((m = L.expression.callee.object.name),
              L.expression.callee.property.name !== "push")
            )
              return;
            let R = L.expression.arguments[0];
            !Ge(R) ||
              (R.arguments.length === 0 &&
                (!gt(R.callee) ||
                  !G(R.callee.object) ||
                  !G(R.callee.property) ||
                  (R.callee.object.name === m &&
                    R.callee.property.name === "shift" &&
                    (c = !0))));
          },
        }),
        !c)
      )
        return !1;
      let d = u.variables.find((L) => L.name === m);
      if (!d || d.defs.length === 0) return !1;
      let E = d.defs[0],
        y = E.node;
      if (
        y.type !== "VariableDeclarator" ||
        !y.init ||
        !Ge(y.init) ||
        !G(y.init.callee)
      )
        return !1;
      let x = y.init.callee.name,
        b = e.stringArrays.find((L) => L.identifier === x);
      if (!b) return !1;
      let w = !1,
        _,
        O;
      return (
        V(n, {
          IfStatement(L) {
            if (
              !$e(L.test) ||
              (L.test.operator !== "==" && L.test.operator !== "===")
            )
              return;
            let R, C;
            if (ue(L.test.left)) {
              if (!$e(L.test.right)) return;
              (R = L.test.left), (C = L.test.right);
            } else if (ue(L.test.right)) {
              if (!$e(L.test.left)) return;
              (R = L.test.right), (C = L.test.left);
            }
            !R || !C || ((O = C), (_ = R.value), (w = !0));
          },
        }),
        !w || !_ || !O
          ? !1
          : (e.log(
              "Found push/shift (#2) IIFE stringArray =",
              b.identifier,
              "breakCond =",
              _
            ),
            r(e, _, b.identifier, O),
            !0)
      );
    }
    return (
      V(e.ast, {
        ExpressionStatement(n) {
          if (_t(n.expression)) {
            let s = [];
            for (let a of n.expression.expressions)
              i(a) && s.push(`${a.start}!${a.end}`);
            s &&
              (n.expression.expressions = n.expression.expressions.filter(
                (a) => !s.includes(`${a.start}!${a.end}`)
              ));
          } else if (it(n.expression)) {
            if (!Ge(n.expression.argument)) return;
            i(n.expression.argument) && (n.type = "EmptyStatement");
          } else i(n.expression) && (n.type = "EmptyStatement");
        },
      }),
      this
    );
  }
  varReferenceFinder(e) {
    let r = 0;
    return (
      V(e.ast, {
        VariableDeclaration(i) {
          var s;
          let n = [];
          for (let a of i.declarations) {
            if (
              ((s = a.init) == null ? void 0 : s.type) !== "Identifier" ||
              a.id.type !== "Identifier"
            )
              continue;
            let u = a.id.name,
              c = a.init.name,
              m = e.stringDecoders.find((d) => d.identifier === c);
            (!m &&
              ((m = e.stringDecoderReferences.find((d) => d.identifier === c)),
              !m)) ||
              (e.log("Found variable reference", u, c),
              e.stringDecoderReferences.push({
                identifier: u,
                realIdentifier: c,
                additionalOffset: 0,
              }),
              r++,
              e.removeGarbage && n.push(`${a.start}!${a.end}`));
          }
          (i.declarations = i.declarations.filter(
            (a) => !n.includes(`${a.start}!${a.end}`)
          )),
            i.declarations.length === 0 && (i.type = "EmptyStatement");
        },
      }),
      r
    );
  }
  fnReferenceFinder(e) {
    let r = 0;
    return (
      V(e.ast, {
        FunctionDeclaration(i) {
          let n = xt(i.body.body);
          if (
            !i.id ||
            n.length !== 1 ||
            !Qe(n[0]) ||
            !i.params.every((O) => G(O)) ||
            !n[0].argument ||
            !Ge(n[0].argument) ||
            !G(n[0].argument.callee)
          )
            return;
          let s = i.id.name,
            a = n[0],
            u = n[0].argument,
            c = u.callee.name,
            m = 0,
            d = 0,
            E = -1,
            y = -1,
            x = { identifier: "", indexArgument: -1, keyArgument: -1 },
            b = e.stringDecoders.find((O) => O.identifier === c);
          if (b)
            (x.identifier = b.identifier),
              (x.indexArgument = b.indexArgument),
              (x.keyArgument = b.keyArgument);
          else {
            let O = e.stringDecoderReferences.find((L) => L.identifier === c);
            if (!O) return;
            (x.identifier = O.identifier),
              (x.indexArgument = O.indexArgument),
              (x.keyArgument = O.keyArgument);
          }
          let w = i.params.map((O) => O.name),
            _ = u.arguments;
          for (let O of _)
            V(O, {
              Identifier(L) {
                !w.includes(L.name) ||
                  (m === x.indexArgument
                    ? (E = w.indexOf(L.name))
                    : m === x.keyArgument && (y = w.indexOf(L.name)));
              },
              BinaryExpression(L) {
                let R = NaN;
                m === x.indexArgument &&
                  (it(L.left) || ue(L.left) || be(L.left)
                    ? (R = Ne(L.left, !0))
                    : (it(L.right) || ue(L.right) || be(L.right)) &&
                      (R = Ne(L.right, !0)),
                  !isNaN(R) && (L.operator === "-" && (R = R * -1), (d = R)));
              },
            }),
              ++m;
          e.stringDecoderReferences.find((O) => O.identifier === s) ||
            (e.stringDecoderReferences.push({
              identifier: s,
              realIdentifier: x.identifier,
              additionalOffset: d,
              indexArgument: E,
              keyArgument: y,
            }),
            r++,
            e.removeGarbage && (i.type = "EmptyStatement"),
            e.log(
              "Found func ref id =",
              s,
              "offset =",
              d,
              "index =",
              E,
              "key =",
              y,
              "parent =",
              x.identifier
            ));
        },
      }),
      r
    );
  }
  decoder(e) {
    let { util_decode: r, literals_to_arg_array: i } = this;
    return (
      V(e.ast, {
        CallExpression(n) {
          if (
            n.callee.type !== "Identifier" ||
            n.arguments.length === 0 ||
            n.arguments.length > 5 ||
            n.arguments[0].type === "SpreadElement" ||
            !n.arguments.every((a) => Be(a) || ue(a) || be(a))
          )
            return;
          let s = n.callee.name;
          if (s !== "parseInt")
            try {
              let a = i(n.arguments),
                u = r(e, s, a);
              H(n, { type: "Literal", value: u });
            } catch (a) {
              if (a.toString().includes("no decoder")) return;
              throw a;
            }
        },
      }),
      this
    );
  }
  transform(e) {
    return ye(this, null, function* () {
      for (
        this.stringsFinder(e).funcFinder(e).stringsFinder(e);
        this.varReferenceFinder(e) > 0;

      )
        e.log("Searching for more variable references");
      for (; this.fnReferenceFinder(e) > 0; )
        e.log("Searching for more function references");
      this.shiftFinder(e).shiftFinder2(e).decoder(e),
        e.log("shifted =", e.shiftedArrays, "arrays =", e.stringArrays.length);
    });
  }
};
var Wn = class extends me {
  constructor(e) {
    super("DeadCode", e);
  }
  flipIfStatements(e) {
    return (
      V(e.ast, {
        IfStatement(r) {
          if (
            !r.alternate ||
            !yt(r.test) ||
            r.test.value !== !1 ||
            (er(r.alternate) &&
              (!yt(r.alternate.test) ||
                r.alternate.test.value !== !0 ||
                r.alternate.alternate))
          )
            return;
          let i = r.consequent,
            n = er(r.alternate) ? r.alternate.consequent : r.alternate;
          (r.test.value = !r.test.value), H(r, { consequent: n, alternate: i });
        },
      }),
      this
    );
  }
  removeDeadAlternates(e) {
    return (
      V(e.ast, {
        IfStatement(r) {
          !r.alternate ||
            !yt(r.test) ||
            r.test.value !== !0 ||
            er(r.alternate) ||
            delete r.alternate;
        },
      }),
      this
    );
  }
  fixIfStatements(e) {
    return (
      V(e.ast, {
        IfStatement(r, i, n) {
          if (r.alternate || !yt(r.test) || r.test.value !== !0) return;
          let s = n[n.length - 2];
          if (!de(s) || !de(r.consequent)) return;
          let a = s.body.findIndex(
            (u) => u.type === r.type && u.start === r.start && u.end === r.end
          );
          s.body.splice(a, 1, ...r.consequent.body);
        },
      }),
      this
    );
  }
  removeDead(e) {
    return (
      V(e.ast, {
        IfStatement(r, i, n) {
          let s = n[n.length - 2];
          if (!de(s) || !yt(r.test) || r.test.value || r.alternate) return;
          let a = s.body.findIndex(
            (u) => u.type === r.type && u.start === r.start && u.end === r.end
          );
          s.body.splice(a, 1);
        },
      }),
      V(e.ast, {
        WhileStatement(r, i, n) {
          let s = n[n.length - 2];
          if (!de(s) || !yt(r.test) || r.test.value) return;
          let a = s.body.findIndex(
            (u) => u.type === r.type && u.start === r.start && u.end === r.end
          );
          s.body.splice(a, 1);
        },
      }),
      this
    );
  }
  removeDeadVariables(e) {
    function r(i) {
      let n = e.scopeManager.acquire(i);
      if (n) {
        for (let s of n.variables)
          if (
            s.name !== "arguments" &&
            s.identifiers.length === 1 &&
            s.defs.length === 1 &&
            s.defs[0].type === "Variable" &&
            s.references.length === 0
          ) {
            let a = s.defs[0],
              u = a.node,
              c = Zt(i, a.parent.range, "VariableDeclaration");
            if (!c) continue;
            (c.declarations = c.declarations.filter(
              (m) => m.start !== u.start && m.end !== u.end
            )),
              e.log("Removed dead variable", s.name);
          }
      }
    }
    return (
      V(e.ast, {
        FunctionDeclaration: r,
        FunctionExpression: r,
        ArrowFunctionExpression: r,
      }),
      this
    );
  }
  transform(e) {
    return ye(this, null, function* () {
      this.flipIfStatements(e)
        .removeDeadAlternates(e)
        .fixIfStatements(e)
        .removeDead(e);
    });
  }
};
var zn = class extends me {
  constructor(e) {
    super("Demangle", e);
  }
  demangleProxies(e) {
    function r(i) {
      if (!de(i.body) || i.body.body.length !== 2) return;
      let n = i.body.body;
      if (!Qe(n[n.length - 1])) return;
      let s = n[n.length - 1];
      if (!s.argument) return;
      let a, u;
      if (_t(s.argument)) {
        if (!ke(s.argument.expressions[0]) || !Ge(s.argument.expressions[1]))
          return;
        (a = s.argument.expressions[0]), (u = s.argument.expressions[1]);
      } else if (Ge(s.argument)) {
        if (!ke(s.argument.callee)) return;
        (a = s.argument.callee), (u = s.argument);
      } else return;
      if (!G(a.left) || !ze(a.right)) return;
      let c = [
        n[0],
        { type: "ExpressionStatement", expression: a },
        {
          type: "ReturnStatement",
          argument: {
            type: "CallExpression",
            callee: { type: "Identifier", name: a.left.name },
            arguments: u.arguments,
          },
        },
      ];
      H(i.body, { body: c });
    }
    return (
      V(e.ast, {
        FunctionDeclaration: r,
        FunctionExpression: r,
        ArrowFunctionExpression: r,
      }),
      this
    );
  }
  demangleStringFuncs(e) {
    function r(i) {
      if (!de(i.body) || !i.id || i.body.body.length !== 3) return;
      let n = i.body.body;
      if (
        !Ve(n[1]) ||
        !ke(n[1].expression) ||
        !G(n[1].expression.left) ||
        n[1].expression.left.name !== i.id.name ||
        !ze(n[1].expression.right)
      )
        return;
      let s = n[1].expression.right,
        a = s.body.body,
        u = [];
      if (
        !Ie(a[0]) ||
        a[0].declarations.length !== 1 ||
        !a[0].declarations[0].init ||
        !gt(a[0].declarations[0].init) ||
        !ke(a[0].declarations[0].init.property) ||
        !G(a[0].declarations[0].init.property.left) ||
        !ue(a[0].declarations[0].init.property.right) ||
        a[0].declarations[0].init.property.operator !== "-="
      )
        return;
      let c = a[0].declarations[0].init.property.left.name,
        m = a[0].declarations[0].init.property.right.value;
      if (
        (u.push({
          type: "ExpressionStatement",
          expression: {
            type: "AssignmentExpression",
            operator: "=",
            left: { type: "Identifier", name: c },
            right: {
              type: "BinaryExpression",
              operator: "-",
              left: { type: "Identifier", name: c },
              right: { type: "Literal", value: m },
            },
          },
        }),
        H(a[0].declarations[0].init.property, { type: "Identifier", name: c }),
        (u = [...u, ...a]),
        a.length >= 3 && er(u[2]))
      ) {
        let d = u[2];
        if (de(d.consequent) && d.consequent.body.length > 1) {
          if (
            (Ie(d.consequent.body[0]) &&
              d.consequent.body[0].declarations.length > 0 &&
              d.consequent.body[0].declarations[0].init &&
              ze(d.consequent.body[0].declarations[0].init)) ||
            (Ve(d.consequent.body[0]) &&
              ke(d.consequent.body[0].expression) &&
              gt(d.consequent.body[0].expression.left) &&
              G(d.consequent.body[0].expression.left.object) &&
              G(d.consequent.body[0].expression.left.property) &&
              ze(d.consequent.body[0].expression.right))
          ) {
            let E = Ve(d.consequent.body[0])
                ? d.consequent.body[0].expression.right
                : d.consequent.body[0].declarations[0].init,
              y = E.body.body;
            if (
              y.length > 1 &&
              Lf(y[0]) &&
              de(y[0].body) &&
              Ve(y[0].body.body[0]) &&
              ke(y[0].body.body[0].expression) &&
              Ge(y[0].body.body[0].expression.right) &&
              gt(y[0].body.body[0].expression.right.callee) &&
              y[0].init &&
              Ie(y[0].init)
            ) {
              if (
                y[0].init.declarations[0].init &&
                be(y[0].init.declarations[0].init)
              ) {
                let x = y[0].init.declarations[0].init.value;
                x.length === 65 &&
                  y.splice(0, 0, {
                    type: "VariableDeclaration",
                    kind: "const",
                    start: 0,
                    end: 0,
                    declarations: [
                      {
                        type: "VariableDeclarator",
                        id: { type: "Identifier", name: "charset" },
                        init: { type: "Literal", value: x },
                        start: 0,
                        end: 0,
                      },
                    ],
                  });
              } else if (
                be(y[0].body.body[0].expression.right.callee.object) &&
                G(y[0].body.body[0].expression.right.callee.property) &&
                y[0].body.body[0].expression.right.callee.property.name ===
                  "indexOf"
              ) {
                let x = y[0].body.body[0].expression.right.callee.object.value;
                x.length === 65 &&
                  y.splice(0, 0, {
                    type: "VariableDeclaration",
                    kind: "const",
                    start: 0,
                    end: 0,
                    declarations: [
                      {
                        type: "VariableDeclarator",
                        id: { type: "Identifier", name: "charset" },
                        init: { type: "Literal", value: x },
                        start: 0,
                        end: 0,
                      },
                    ],
                  });
              }
            }
          }
          Ie(d.consequent.body[0]) &&
            d.consequent.body[0].declarations.length === 2 &&
            d.consequent.body.splice(1, 0, {
              type: "VariableDeclaration",
              start: 0,
              end: 0,
              kind: d.consequent.body[0].kind,
              declarations: [d.consequent.body[0].declarations[1]],
            });
        }
      }
      H(s.body, { body: u });
    }
    return V(e.ast, { FunctionDeclaration: r }), this;
  }
  transform(e) {
    return ye(this, null, function* () {
      this.demangleProxies(e).demangleStringFuncs(e);
    });
  }
};
var $n = class extends me {
  constructor(e) {
    super("ArrayMap", e);
  }
  demap(e) {
    function r(i) {
      if (!de(i.body)) return;
      let n = xt(i.body.body);
      if (!n[0] || !Ie(n[0])) return;
      let s = n[0];
      if (s.declarations.length !== 1) return;
      let a = s.declarations[0];
      if (!a.init || !$r(a.init) || a.init.elements[0] !== null || !G(a.id))
        return;
      let u = a.id.name,
        c = a.init.elements.map((m) => (m && ve(m) ? m.value : m));
      V(i, {
        MemberExpression(m) {
          if (
            !G(m.object) ||
            !ue(m.property) ||
            m.object.name !== u ||
            m.property.value >= c.length
          )
            return;
          let E = c[m.property.value];
          H(m, { type: "Literal", value: E });
        },
      }),
        (i.body.body = i.body.body.filter(
          (m) => m.start !== s.start && m.end !== s.end
        ));
    }
    return (
      V(e.ast, {
        FunctionDeclaration: r,
        FunctionExpression: r,
        ArrowFunctionExpression: r,
      }),
      this
    );
  }
  transform(e) {
    return ye(this, null, function* () {
      this.demap(e);
    });
  }
};
var Uf = st(qf());
var Ga = [
  "ability",
  "able",
  "aboard",
  "about",
  "above",
  "accept",
  "accident",
  "according",
  "account",
  "accurate",
  "acres",
  "across",
  "act",
  "action",
  "active",
  "activity",
  "actual",
  "actually",
  "add",
  "addition",
  "additional",
  "adjective",
  "adult",
  "adventure",
  "advice",
  "affect",
  "afraid",
  "after",
  "afternoon",
  "again",
  "against",
  "age",
  "ago",
  "agree",
  "ahead",
  "aid",
  "air",
  "airplane",
  "alike",
  "alive",
  "all",
  "allow",
  "almost",
  "alone",
  "along",
  "aloud",
  "alphabet",
  "already",
  "also",
  "although",
  "am",
  "among",
  "amount",
  "ancient",
  "angle",
  "angry",
  "animal",
  "announced",
  "another",
  "answer",
  "ants",
  "any",
  "anybody",
  "anyone",
  "anything",
  "anyway",
  "anywhere",
  "apart",
  "apartment",
  "appearance",
  "apple",
  "applied",
  "appropriate",
  "are",
  "area",
  "arm",
  "army",
  "around",
  "arrange",
  "arrangement",
  "arrive",
  "arrow",
  "art",
  "article",
  "as",
  "aside",
  "ask",
  "asleep",
  "at",
  "ate",
  "atmosphere",
  "atom",
  "atomic",
  "attached",
  "attack",
  "attempt",
  "attention",
  "audience",
  "author",
  "automobile",
  "available",
  "average",
  "avoid",
  "aware",
  "away",
  "baby",
  "back",
  "bad",
  "badly",
  "bag",
  "balance",
  "ball",
  "balloon",
  "band",
  "bank",
  "bar",
  "bare",
  "bark",
  "barn",
  "base",
  "baseball",
  "basic",
  "basis",
  "basket",
  "bat",
  "battle",
  "be",
  "bean",
  "bear",
  "beat",
  "beautiful",
  "beauty",
  "became",
  "because",
  "become",
  "becoming",
  "bee",
  "been",
  "before",
  "began",
  "beginning",
  "begun",
  "behavior",
  "behind",
  "being",
  "believed",
  "bell",
  "belong",
  "below",
  "belt",
  "bend",
  "beneath",
  "bent",
  "beside",
  "best",
  "bet",
  "better",
  "between",
  "beyond",
  "bicycle",
  "bigger",
  "biggest",
  "bill",
  "birds",
  "birth",
  "birthday",
  "bit",
  "bite",
  "black",
  "blank",
  "blanket",
  "blew",
  "blind",
  "block",
  "blood",
  "blow",
  "blue",
  "board",
  "boat",
  "body",
  "bone",
  "book",
  "border",
  "born",
  "both",
  "bottle",
  "bottom",
  "bound",
  "bow",
  "bowl",
  "box",
  "boy",
  "brain",
  "branch",
  "brass",
  "brave",
  "bread",
  "break",
  "breakfast",
  "breath",
  "breathe",
  "breathing",
  "breeze",
  "brick",
  "bridge",
  "brief",
  "bright",
  "bring",
  "broad",
  "broke",
  "broken",
  "brother",
  "brought",
  "brown",
  "brush",
  "buffalo",
  "build",
  "building",
  "built",
  "buried",
  "burn",
  "burst",
  "bus",
  "bush",
  "business",
  "busy",
  "but",
  "butter",
  "buy",
  "by",
  "cabin",
  "cage",
  "cake",
  "call",
  "calm",
  "came",
  "camera",
  "camp",
  "can",
  "canal",
  "cannot",
  "cap",
  "capital",
  "captain",
  "captured",
  "car",
  "carbon",
  "card",
  "care",
  "careful",
  "carefully",
  "carried",
  "carry",
  "case",
  "cast",
  "castle",
  "cat",
  "catch",
  "cattle",
  "caught",
  "cause",
  "cave",
  "cell",
  "cent",
  "center",
  "central",
  "century",
  "certain",
  "certainly",
  "chain",
  "chair",
  "chamber",
  "chance",
  "change",
  "changing",
  "chapter",
  "character",
  "characteristic",
  "charge",
  "chart",
  "check",
  "cheese",
  "chemical",
  "chest",
  "chicken",
  "chief",
  "child",
  "children",
  "choice",
  "choose",
  "chose",
  "chosen",
  "church",
  "circle",
  "circus",
  "citizen",
  "city",
  "class",
  "classroom",
  "claws",
  "clay",
  "clean",
  "clear",
  "clearly",
  "climate",
  "climb",
  "clock",
  "close",
  "closely",
  "closer",
  "cloth",
  "clothes",
  "clothing",
  "cloud",
  "club",
  "coach",
  "coal",
  "coast",
  "coat",
  "coffee",
  "cold",
  "collect",
  "college",
  "colony",
  "color",
  "column",
  "combination",
  "combine",
  "come",
  "comfortable",
  "coming",
  "command",
  "common",
  "community",
  "company",
  "compare",
  "compass",
  "complete",
  "completely",
  "complex",
  "composed",
  "composition",
  "compound",
  "concerned",
  "condition",
  "congress",
  "connected",
  "consider",
  "consist",
  "consonant",
  "constantly",
  "construction",
  "contain",
  "continent",
  "continued",
  "contrast",
  "control",
  "conversation",
  "cook",
  "cookies",
  "cool",
  "copper",
  "copy",
  "corn",
  "corner",
  "correct",
  "correctly",
  "cost",
  "cotton",
  "could",
  "count",
  "country",
  "couple",
  "courage",
  "course",
  "court",
  "cover",
  "cow",
  "cowboy",
  "crack",
  "cream",
  "create",
  "creature",
  "crew",
  "crop",
  "cross",
  "crowd",
  "cry",
  "cup",
  "curious",
  "current",
  "curve",
  "customs",
  "cut",
  "cutting",
  "daily",
  "damage",
  "dance",
  "danger",
  "dangerous",
  "dark",
  "darkness",
  "date",
  "daughter",
  "dawn",
  "day",
  "dead",
  "deal",
  "dear",
  "death",
  "decide",
  "declared",
  "deep",
  "deeply",
  "deer",
  "definition",
  "degree",
  "depend",
  "depth",
  "describe",
  "desert",
  "design",
  "desk",
  "detail",
  "determine",
  "develop",
  "development",
  "diagram",
  "diameter",
  "did",
  "die",
  "differ",
  "difference",
  "different",
  "difficult",
  "difficulty",
  "dig",
  "dinner",
  "direct",
  "direction",
  "directly",
  "dirt",
  "dirty",
  "disappear",
  "discover",
  "discovery",
  "discuss",
  "discussion",
  "disease",
  "dish",
  "distance",
  "distant",
  "divide",
  "division",
  "do",
  "doctor",
  "does",
  "dog",
  "doing",
  "doll",
  "dollar",
  "done",
  "donkey",
  "door",
  "dot",
  "double",
  "doubt",
  "down",
  "dozen",
  "draw",
  "drawn",
  "dream",
  "dress",
  "drew",
  "dried",
  "drink",
  "drive",
  "driven",
  "driver",
  "driving",
  "drop",
  "dropped",
  "drove",
  "dry",
  "duck",
  "due",
  "dug",
  "dull",
  "during",
  "dust",
  "duty",
  "each",
  "eager",
  "ear",
  "earlier",
  "early",
  "earn",
  "earth",
  "easier",
  "easily",
  "east",
  "easy",
  "eat",
  "eaten",
  "edge",
  "education",
  "effect",
  "effort",
  "egg",
  "eight",
  "either",
  "electric",
  "electricity",
  "element",
  "elephant",
  "eleven",
  "else",
  "empty",
  "end",
  "enemy",
  "energy",
  "engine",
  "engineer",
  "enjoy",
  "enough",
  "enter",
  "entire",
  "entirely",
  "environment",
  "equal",
  "equally",
  "equator",
  "equipment",
  "escape",
  "especially",
  "essential",
  "establish",
  "even",
  "evening",
  "event",
  "eventually",
  "ever",
  "every",
  "everybody",
  "everyone",
  "everything",
  "everywhere",
  "evidence",
  "exact",
  "exactly",
  "examine",
  "example",
  "excellent",
  "except",
  "exchange",
  "excited",
  "excitement",
  "exciting",
  "exclaimed",
  "exercise",
  "exist",
  "expect",
  "experience",
  "experiment",
  "explain",
  "explanation",
  "explore",
  "express",
  "expression",
  "extra",
  "eye",
  "face",
  "facing",
  "fact",
  "factor",
  "factory",
  "failed",
  "fair",
  "fairly",
  "fall",
  "fallen",
  "familiar",
  "family",
  "famous",
  "far",
  "farm",
  "farmer",
  "farther",
  "fast",
  "fastened",
  "faster",
  "fat",
  "father",
  "favorite",
  "fear",
  "feathers",
  "feature",
  "fed",
  "feed",
  "feel",
  "feet",
  "fell",
  "fellow",
  "felt",
  "fence",
  "few",
  "fewer",
  "field",
  "fierce",
  "fifteen",
  "fifth",
  "fifty",
  "fight",
  "fighting",
  "figure",
  "fill",
  "film",
  "final",
  "finally",
  "find",
  "fine",
  "finest",
  "finger",
  "finish",
  "fire",
  "fireplace",
  "firm",
  "first",
  "fish",
  "five",
  "fix",
  "flag",
  "flame",
  "flat",
  "flew",
  "flies",
  "flight",
  "floating",
  "floor",
  "flow",
  "flower",
  "fly",
  "fog",
  "folks",
  "follow",
  "food",
  "foot",
  "football",
  "for",
  "force",
  "foreign",
  "forest",
  "forget",
  "forgot",
  "forgotten",
  "form",
  "former",
  "fort",
  "forth",
  "forty",
  "forward",
  "fought",
  "found",
  "four",
  "fourth",
  "fox",
  "frame",
  "free",
  "freedom",
  "frequently",
  "fresh",
  "friend",
  "friendly",
  "frighten",
  "frog",
  "from",
  "front",
  "frozen",
  "fruit",
  "fuel",
  "full",
  "fully",
  "fun",
  "function",
  "funny",
  "fur",
  "furniture",
  "further",
  "future",
  "gain",
  "game",
  "garage",
  "garden",
  "gas",
  "gasoline",
  "gate",
  "gather",
  "gave",
  "general",
  "generally",
  "gentle",
  "gently",
  "get",
  "getting",
  "giant",
  "gift",
  "girl",
  "give",
  "given",
  "giving",
  "glad",
  "glass",
  "globe",
  "go",
  "goes",
  "gold",
  "golden",
  "gone",
  "good",
  "goose",
  "got",
  "government",
  "grabbed",
  "grade",
  "gradually",
  "grain",
  "grandfather",
  "grandmother",
  "graph",
  "grass",
  "gravity",
  "gray",
  "great",
  "greater",
  "greatest",
  "greatly",
  "green",
  "grew",
  "ground",
  "group",
  "grow",
  "grown",
  "growth",
  "guard",
  "guess",
  "guide",
  "gulf",
  "gun",
  "habit",
  "had",
  "hair",
  "half",
  "halfway",
  "hall",
  "hand",
  "handle",
  "handsome",
  "hang",
  "happen",
  "happened",
  "happily",
  "happy",
  "harbor",
  "hard",
  "harder",
  "hardly",
  "has",
  "hat",
  "have",
  "having",
  "hay",
  "he",
  "headed",
  "heading",
  "health",
  "heard",
  "hearing",
  "heart",
  "heat",
  "heavy",
  "height",
  "held",
  "hello",
  "help",
  "helpful",
  "her",
  "herd",
  "here",
  "herself",
  "hidden",
  "hide",
  "high",
  "higher",
  "highest",
  "highway",
  "hill",
  "him",
  "himself",
  "his",
  "history",
  "hit",
  "hold",
  "hole",
  "hollow",
  "home",
  "honor",
  "hope",
  "horn",
  "horse",
  "hospital",
  "hot",
  "hour",
  "house",
  "how",
  "however",
  "huge",
  "human",
  "hundred",
  "hung",
  "hungry",
  "hunt",
  "hunter",
  "hurried",
  "hurry",
  "hurt",
  "husband",
  "ice",
  "idea",
  "identity",
  "if",
  "ill",
  "image",
  "imagine",
  "immediately",
  "importance",
  "important",
  "impossible",
  "improve",
  "in",
  "inch",
  "include",
  "including",
  "income",
  "increase",
  "indeed",
  "independent",
  "indicate",
  "individual",
  "industrial",
  "industry",
  "influence",
  "information",
  "inside",
  "instance",
  "instant",
  "instead",
  "instrument",
  "interest",
  "interior",
  "into",
  "introduced",
  "invented",
  "involved",
  "iron",
  "is",
  "island",
  "it",
  "its",
  "itself",
  "jack",
  "jar",
  "jet",
  "job",
  "join",
  "joined",
  "journey",
  "joy",
  "judge",
  "jump",
  "jungle",
  "just",
  "keep",
  "kept",
  "key",
  "kids",
  "kill",
  "kind",
  "kitchen",
  "knew",
  "knife",
  "know",
  "knowledge",
  "known",
  "label",
  "labor",
  "lack",
  "lady",
  "laid",
  "lake",
  "lamp",
  "land",
  "language",
  "large",
  "larger",
  "largest",
  "last",
  "late",
  "later",
  "laugh",
  "law",
  "lay",
  "layers",
  "lead",
  "leader",
  "leaf",
  "learn",
  "least",
  "leather",
  "leave",
  "leaving",
  "led",
  "left",
  "leg",
  "length",
  "lesson",
  "let",
  "letter",
  "level",
  "library",
  "lie",
  "life",
  "lift",
  "light",
  "like",
  "likely",
  "limited",
  "line",
  "lion",
  "lips",
  "liquid",
  "list",
  "listen",
  "little",
  "live",
  "living",
  "load",
  "local",
  "locate",
  "location",
  "log",
  "lonely",
  "long",
  "longer",
  "look",
  "loose",
  "lose",
  "loss",
  "lost",
  "lot",
  "loud",
  "love",
  "lovely",
  "low",
  "lower",
  "luck",
  "lucky",
  "lunch",
  "lungs",
  "lying",
  "machine",
  "machinery",
  "mad",
  "made",
  "magic",
  "magnet",
  "mail",
  "main",
  "mainly",
  "major",
  "make",
  "making",
  "man",
  "managed",
  "manner",
  "manufacturing",
  "many",
  "map",
  "mark",
  "market",
  "married",
  "mass",
  "massage",
  "master",
  "material",
  "mathematics",
  "matter",
  "may",
  "maybe",
  "me",
  "meal",
  "mean",
  "means",
  "meant",
  "measure",
  "meat",
  "medicine",
  "meet",
  "melted",
  "member",
  "memory",
  "men",
  "mental",
  "merely",
  "met",
  "metal",
  "method",
  "mice",
  "middle",
  "might",
  "mighty",
  "mile",
  "military",
  "milk",
  "mill",
  "mind",
  "mine",
  "minerals",
  "minute",
  "mirror",
  "missing",
  "mission",
  "mistake",
  "mix",
  "mixture",
  "model",
  "modern",
  "molecular",
  "moment",
  "money",
  "monkey",
  "month",
  "mood",
  "moon",
  "more",
  "morning",
  "most",
  "mostly",
  "mother",
  "motion",
  "motor",
  "mountain",
  "mouse",
  "mouth",
  "move",
  "movement",
  "movie",
  "moving",
  "mud",
  "muscle",
  "music",
  "musical",
  "must",
  "my",
  "myself",
  "mysterious",
  "nails",
  "name",
  "nation",
  "national",
  "native",
  "natural",
  "naturally",
  "nature",
  "near",
  "nearby",
  "nearer",
  "nearest",
  "nearly",
  "necessary",
  "neck",
  "needed",
  "needle",
  "needs",
  "negative",
  "neighbor",
  "neighborhood",
  "nervous",
  "nest",
  "never",
  "new",
  "news",
  "newspaper",
  "next",
  "nice",
  "night",
  "nine",
  "no",
  "nobody",
  "nodded",
  "noise",
  "none",
  "noon",
  "nor",
  "north",
  "nose",
  "not",
  "note",
  "noted",
  "nothing",
  "notice",
  "noun",
  "now",
  "number",
  "numeral",
  "nuts",
  "object",
  "observe",
  "obtain",
  "occasionally",
  "occur",
  "ocean",
  "of",
  "off",
  "offer",
  "office",
  "officer",
  "official",
  "oil",
  "old",
  "older",
  "oldest",
  "on",
  "once",
  "one",
  "only",
  "onto",
  "open",
  "operation",
  "opinion",
  "opportunity",
  "opposite",
  "or",
  "orange",
  "orbit",
  "order",
  "ordinary",
  "organization",
  "organized",
  "origin",
  "original",
  "other",
  "ought",
  "our",
  "ourselves",
  "out",
  "outer",
  "outline",
  "outside",
  "over",
  "own",
  "owner",
  "oxygen",
  "pack",
  "package",
  "page",
  "paid",
  "pain",
  "paint",
  "pair",
  "palace",
  "pale",
  "pan",
  "paper",
  "paragraph",
  "parallel",
  "parent",
  "park",
  "part",
  "particles",
  "particular",
  "particularly",
  "partly",
  "parts",
  "party",
  "pass",
  "passage",
  "past",
  "path",
  "pattern",
  "pay",
  "peace",
  "pen",
  "pencil",
  "people",
  "per",
  "percent",
  "perfect",
  "perfectly",
  "perhaps",
  "period",
  "person",
  "personal",
  "pet",
  "phrase",
  "physical",
  "piano",
  "pick",
  "picture",
  "pictured",
  "pie",
  "piece",
  "pig",
  "pile",
  "pilot",
  "pine",
  "pink",
  "pipe",
  "pitch",
  "place",
  "plain",
  "plan",
  "plane",
  "planet",
  "planned",
  "planning",
  "plant",
  "plastic",
  "plate",
  "plates",
  "play",
  "pleasant",
  "please",
  "pleasure",
  "plenty",
  "plural",
  "plus",
  "pocket",
  "poem",
  "poet",
  "poetry",
  "point",
  "pole",
  "police",
  "policeman",
  "political",
  "pond",
  "pony",
  "pool",
  "poor",
  "popular",
  "population",
  "porch",
  "port",
  "position",
  "positive",
  "possible",
  "possibly",
  "post",
  "pot",
  "potatoes",
  "pound",
  "pour",
  "powder",
  "power",
  "powerful",
  "practical",
  "practice",
  "prepare",
  "present",
  "president",
  "press",
  "pressure",
  "pretty",
  "prevent",
  "previous",
  "price",
  "pride",
  "primitive",
  "principal",
  "principle",
  "printed",
  "private",
  "prize",
  "probably",
  "problem",
  "process",
  "produce",
  "product",
  "production",
  "program",
  "progress",
  "promised",
  "proper",
  "properly",
  "property",
  "protection",
  "proud",
  "prove",
  "provide",
  "public",
  "pull",
  "pupil",
  "pure",
  "purple",
  "purpose",
  "push",
  "put",
  "putting",
  "quarter",
  "queen",
  "question",
  "quick",
  "quickly",
  "quiet",
  "quietly",
  "quite",
  "rabbit",
  "race",
  "radio",
  "railroad",
  "rain",
  "raise",
  "ran",
  "ranch",
  "range",
  "rapidly",
  "rate",
  "rather",
  "raw",
  "rays",
  "reach",
  "read",
  "reader",
  "ready",
  "real",
  "realize",
  "rear",
  "reason",
  "recall",
  "receive",
  "recent",
  "recently",
  "recognize",
  "record",
  "red",
  "refer",
  "refused",
  "region",
  "regular",
  "related",
  "relationship",
  "religious",
  "remain",
  "remarkable",
  "remember",
  "remove",
  "repeat",
  "replace",
  "replied",
  "report",
  "represent",
  "require",
  "research",
  "respect",
  "rest",
  "result",
  "return",
  "review",
  "rhyme",
  "rhythm",
  "rice",
  "rich",
  "ride",
  "riding",
  "right",
  "ring",
  "rise",
  "rising",
  "river",
  "road",
  "roar",
  "rock",
  "rocket",
  "rocky",
  "rod",
  "roll",
  "roof",
  "room",
  "root",
  "rope",
  "rose",
  "rough",
  "round",
  "route",
  "row",
  "rubbed",
  "rubber",
  "rule",
  "ruler",
  "run",
  "running",
  "rush",
  "sad",
  "saddle",
  "safe",
  "safety",
  "said",
  "sail",
  "sale",
  "salmon",
  "salt",
  "same",
  "sand",
  "sang",
  "sat",
  "satellites",
  "satisfied",
  "save",
  "saved",
  "saw",
  "say",
  "scale",
  "scared",
  "scene",
  "school",
  "science",
  "scientific",
  "scientist",
  "score",
  "screen",
  "sea",
  "search",
  "season",
  "seat",
  "second",
  "secret",
  "section",
  "see",
  "seed",
  "seeing",
  "seems",
  "seen",
  "seldom",
  "select",
  "selection",
  "sell",
  "send",
  "sense",
  "sent",
  "sentence",
  "separate",
  "series",
  "serious",
  "serve",
  "service",
  "sets",
  "setting",
  "settle",
  "settlers",
  "seven",
  "several",
  "shade",
  "shadow",
  "shake",
  "shaking",
  "shall",
  "shallow",
  "shape",
  "share",
  "sharp",
  "she",
  "sheep",
  "sheet",
  "shelf",
  "shells",
  "shelter",
  "shine",
  "shinning",
  "ship",
  "shirt",
  "shoe",
  "shoot",
  "shop",
  "shore",
  "short",
  "shorter",
  "shot",
  "should",
  "shoulder",
  "shout",
  "show",
  "shown",
  "shut",
  "sick",
  "sides",
  "sight",
  "sign",
  "signal",
  "silence",
  "silent",
  "silk",
  "silly",
  "silver",
  "similar",
  "simple",
  "simplest",
  "simply",
  "since",
  "sing",
  "single",
  "sink",
  "sister",
  "sit",
  "sitting",
  "situation",
  "six",
  "size",
  "skill",
  "skin",
  "sky",
  "slabs",
  "slave",
  "sleep",
  "slept",
  "slide",
  "slight",
  "slightly",
  "slip",
  "slipped",
  "slope",
  "slow",
  "slowly",
  "small",
  "smaller",
  "smallest",
  "smell",
  "smile",
  "smoke",
  "smooth",
  "snake",
  "snow",
  "so",
  "soap",
  "social",
  "society",
  "soft",
  "softly",
  "soil",
  "solar",
  "sold",
  "soldier",
  "solid",
  "solution",
  "solve",
  "some",
  "somebody",
  "somehow",
  "someone",
  "something",
  "sometime",
  "somewhere",
  "son",
  "song",
  "soon",
  "sort",
  "sound",
  "source",
  "south",
  "southern",
  "space",
  "speak",
  "special",
  "species",
  "specific",
  "speech",
  "speed",
  "spell",
  "spend",
  "spent",
  "spider",
  "spin",
  "spirit",
  "spite",
  "split",
  "spoken",
  "sport",
  "spread",
  "spring",
  "square",
  "stage",
  "stairs",
  "stand",
  "standard",
  "star",
  "stared",
  "start",
  "state",
  "statement",
  "station",
  "stay",
  "steady",
  "steam",
  "steel",
  "steep",
  "stems",
  "step",
  "stepped",
  "stick",
  "stiff",
  "still",
  "stock",
  "stomach",
  "stone",
  "stood",
  "stop",
  "stopped",
  "store",
  "storm",
  "story",
  "stove",
  "straight",
  "strange",
  "stranger",
  "straw",
  "stream",
  "street",
  "strength",
  "stretch",
  "strike",
  "string",
  "strip",
  "strong",
  "stronger",
  "struck",
  "structure",
  "struggle",
  "stuck",
  "student",
  "studied",
  "studying",
  "subject",
  "substance",
  "success",
  "successful",
  "such",
  "sudden",
  "suddenly",
  "sugar",
  "suggest",
  "suit",
  "sum",
  "summer",
  "sun",
  "sunlight",
  "supper",
  "supply",
  "support",
  "suppose",
  "sure",
  "surface",
  "surprise",
  "surrounded",
  "swam",
  "sweet",
  "swept",
  "swim",
  "swimming",
  "swing",
  "swung",
  "syllable",
  "symbol",
  "system",
  "table",
  "tail",
  "take",
  "taken",
  "tales",
  "talk",
  "tall",
  "tank",
  "tape",
  "task",
  "taste",
  "taught",
  "tax",
  "tea",
  "teach",
  "teacher",
  "team",
  "tears",
  "teeth",
  "telephone",
  "television",
  "tell",
  "temperature",
  "ten",
  "tent",
  "term",
  "terrible",
  "test",
  "than",
  "thank",
  "that",
  "thee",
  "them",
  "themselves",
  "then",
  "theory",
  "there",
  "therefore",
  "these",
  "they",
  "thick",
  "thin",
  "thing",
  "think",
  "third",
  "thirty",
  "this",
  "those",
  "thou",
  "though",
  "thought",
  "thousand",
  "thread",
  "three",
  "threw",
  "throat",
  "through",
  "throughout",
  "throw",
  "thrown",
  "thumb",
  "thus",
  "thy",
  "tide",
  "tie",
  "tight",
  "tightly",
  "till",
  "time",
  "tin",
  "tiny",
  "tip",
  "tired",
  "title",
  "to",
  "tobacco",
  "today",
  "together",
  "told",
  "tomorrow",
  "tone",
  "tongue",
  "tonight",
  "too",
  "took",
  "tool",
  "top",
  "topic",
  "torn",
  "total",
  "touch",
  "toward",
  "tower",
  "town",
  "toy",
  "trace",
  "track",
  "trade",
  "traffic",
  "trail",
  "train",
  "transportation",
  "trap",
  "travel",
  "treated",
  "tree",
  "triangle",
  "tribe",
  "trick",
  "tried",
  "trip",
  "troops",
  "tropical",
  "trouble",
  "truck",
  "trunk",
  "truth",
  "try",
  "tube",
  "tune",
  "turn",
  "twelve",
  "twenty",
  "twice",
  "two",
  "type",
  "typical",
  "uncle",
  "under",
  "underline",
  "understanding",
  "unhappy",
  "union",
  "unit",
  "universe",
  "unknown",
  "unless",
  "until",
  "unusual",
  "up",
  "upon",
  "upper",
  "upward",
  "us",
  "use",
  "useful",
  "using",
  "usual",
  "usually",
  "valley",
  "valuable",
  "value",
  "vapor",
  "variety",
  "various",
  "vast",
  "vegetable",
  "verb",
  "vertical",
  "very",
  "vessels",
  "victory",
  "view",
  "village",
  "visit",
  "visitor",
  "voice",
  "volume",
  "vote",
  "vowel",
  "voyage",
  "wagon",
  "wait",
  "walk",
  "wall",
  "want",
  "war",
  "warm",
  "warn",
  "was",
  "wash",
  "waste",
  "watch",
  "water",
  "wave",
  "way",
  "we",
  "weak",
  "wealth",
  "wear",
  "weather",
  "week",
  "weigh",
  "weight",
  "welcome",
  "well",
  "went",
  "were",
  "west",
  "western",
  "wet",
  "whale",
  "what",
  "whatever",
  "wheat",
  "wheel",
  "when",
  "whenever",
  "where",
  "wherever",
  "whether",
  "which",
  "while",
  "whispered",
  "whistle",
  "white",
  "who",
  "whole",
  "whom",
  "whose",
  "why",
  "wide",
  "widely",
  "wife",
  "wild",
  "will",
  "willing",
  "win",
  "wind",
  "window",
  "wing",
  "winter",
  "wire",
  "wise",
  "wish",
  "with",
  "within",
  "without",
  "wolf",
  "women",
  "won",
  "wonder",
  "wonderful",
  "wood",
  "wooden",
  "wool",
  "word",
  "wore",
  "work",
  "worker",
  "world",
  "worried",
  "worry",
  "worse",
  "worth",
  "would",
  "wrapped",
  "write",
  "writer",
  "writing",
  "written",
  "wrong",
  "wrote",
  "yard",
  "year",
  "yellow",
  "yes",
  "yesterday",
  "yet",
  "you",
  "young",
  "younger",
  "your",
  "yourself",
  "youth",
  "zero",
  "zebra",
  "zipper",
  "zoo",
  "zulu",
];
function jf(t, e = 4) {
  let r = [];
  for (let i = 0; i < e + 0; ++i) {
    let n = i * (Ga.length / e),
      s = (i + 1) * (Ga.length / e),
      a = (t.random() * (s - n) + n) | 0,
      u = [...Ga[a]];
    u.unshift(u.shift().toUpperCase()), r.push(u.join(""));
  }
  return r;
}
var Hn = class extends me {
  constructor(e) {
    super("Rename", e);
    this.getVarPrefix = (e) => {
      switch (e) {
        case "FunctionName":
          return "func";
        case "Parameter":
          return "arg";
        default:
          return "var";
      }
    };
    this.getUpperScope = (e) => {
      var i;
      let r = e.upper;
      if (!r || r.type === "global") return e;
      for (
        ;
        ((i = r == null ? void 0 : r.upper) == null ? void 0 : i.type) !==
        "global";

      )
        r = r == null ? void 0 : r.upper;
      return r;
    };
    this.scopeVisitor = (e, r) => {
      let i = new Map();
      if (this.getUpperScope(r)) {
        for (let s of r.variables) {
          if (s.name === "arguments") continue;
          let a = this.getVarPrefix(s.defs[0].type) + jf(this.mt, 2).join("");
          i.set(s.name, a);
          for (let u of s.defs) {
            let c = Zt(e.ast, u.name.range, "Identifier");
            !c || (c.name = a);
          }
          for (let u of s.references) {
            let c = Zt(e.ast, u.identifier.range, "Identifier");
            !c || (c.name = a);
          }
          s.name = a;
        }
        for (let s of r.references) {
          let a = Zt(e.ast, s.identifier.range, "Identifier");
          !a || (i.has(a.name) && (a.name = i.get(a.name)));
        }
      }
    };
  }
  rename(e) {
    return ye(this, null, function* () {
      this.mt = new Uf.default(e.hash);
      for (let r of e.scopeManager.scopes) this.scopeVisitor(e, r);
      return this;
    });
  }
  transform(e) {
    return ye(this, null, function* () {
      this.rename(e);
    });
  }
};
var $m = ["+", "-", "*", "/"],
  Kn = class extends me {
    constructor(e) {
      super("JSCCalculator", e);
      this.functions = [];
    }
    find(e) {
      let { functions: r } = this;
      function i(n) {
        let s = xt(n.body.body);
        if (s.length !== 1 || !gr(s[0]) || !n.id || !G(n.id)) return;
        let a = n.id.name,
          u = s[0];
        if (
          !u.cases.every(
            (E) =>
              E.consequent &&
              E.consequent.length === 1 &&
              Qe(E.consequent[0]) &&
              E.consequent[0].argument &&
              $e(E.consequent[0].argument) &&
              G(E.consequent[0].argument.left) &&
              G(E.consequent[0].argument.right)
          ) ||
          !G(u.discriminant)
        )
          return;
        let c = u.discriminant.name,
          m = n.params.map((E) => G(E) && E.name),
          d = {
            identifier: a,
            operators: [],
            operIndex: m.findIndex((E) => E === c),
          };
        for (let E of u.cases) {
          if (!E.test || (!ue(E.test) && !it(E.test))) return;
          let y = Ne(E.test),
            x = E.consequent[0].argument;
          if (!$m.includes(x.operator)) return;
          let b = x.left.name,
            w = x.right.name,
            _ = m.findIndex((R) => R === b),
            O = m.findIndex((R) => R === w),
            L = { test: y, operator: x.operator, lhsIndex: _, rhsIndex: O };
          d.operators.push(L);
        }
        e.log(
          "Found calculator function id =",
          d.identifier,
          "oper =",
          d.operIndex,
          "opers =",
          d.operators
        ),
          r.push(d);
      }
      return V(e.ast, { FunctionDeclaration: i, FunctionExpression: i }), this;
    }
    fix(e) {
      let { functions: r } = this;
      return (
        V(e.ast, {
          CallExpression(i) {
            if (!G(i.callee)) return;
            let n = i.callee.name,
              s;
            if (!(s = r.find((E) => E.identifier === n))) return;
            let a = i.arguments[s.operIndex];
            if (!ue(a) && !Be(a)) return;
            let u = Ne(a),
              c = s.operators.find((E) => E.test === u);
            if (!c) return;
            let m = i.arguments[c.lhsIndex],
              d = i.arguments[c.rhsIndex];
            H(i, {
              type: "BinaryExpression",
              left: m,
              right: d,
              operator: c.operator,
            });
          },
        }),
        this
      );
    }
    transform(e) {
      return ye(this, null, function* () {
        this.find(e).fix(e);
      });
    }
  };
var $f = st(cs());
function Wf(t) {
  switch (t) {
    case "+":
      return "-";
    case "-":
      return "+";
    case "/":
      return "*";
    case "*":
      return "/";
    default:
      throw new Error("Invalid operator to inverse '" + t + "'");
  }
}
function xr(t) {
  return $f.default.generate(t, { sourceMapWithCode: !0 }).code;
}
var Hm = !1;
function Bt(t, ...e) {
  Hm && console.log.apply(null, arguments);
}
function Km(t, e, r, i) {
  if (r === "=") return t.set(e, i);
  let n = t.get(e);
  if (typeof n != "number")
    throw new Error(
      "Unexpected non-numeric value in jsconfuser controlflow stack"
    );
  switch (r) {
    case "+=":
      return t.set(e, n + i);
    case "-=":
      return t.set(e, n - i);
    case "*=":
      return t.set(e, n * i);
    case "/=":
      return t.set(e, n / i);
    case "%=":
      return t.set(e, n % i);
    case "<<=":
      return t.set(e, n << i);
    case ">>=":
      return t.set(e, n >> i);
    case ">>>=":
      return t.set(e, n >>> i);
    case "&=":
      return t.set(e, n & i);
    case "^=":
      return t.set(e, n ^ i);
    case "|=":
      return t.set(e, n | i);
    default:
      throw new Error('Invalid assignment expression operator "' + r + '"');
  }
}
function qa(t, e) {
  for (let [r, i] of t) {
    let n = jn(i);
    V(e, {
      Identifier(s) {
        s.name === r && H(s, n);
      },
    });
  }
  return e;
}
function zf(t, e) {
  let r = new Ut({}),
    i = nt(e);
  if (
    (Bt("chain =", xr(i)),
    qa(t, i),
    r.math(i),
    Bt("new chain =", xr(i)),
    !ue(i) && !Be(i))
  )
    throw new Error(
      "Failed to evaluate chain: chain did not evaluate to number"
    );
  return Bt("value =", Ne(i)), Bt("=".repeat(32)), Ne(i);
}
var Ym = 10;
function Qm(t, e) {
  let r = new Ut({});
  for (let i of e.expressions) {
    if (!ke(i)) {
      qa(t, i);
      continue;
    }
    if (!G(i.left) || !t.has(i.left.name)) continue;
    let n = i.left.name,
      s = i.operator,
      a = nt(i.right);
    qa(t, a), Bt("(1/4) Evaluating", n, s, xr(a));
    for (let c = 0; c < Ym && !(ue(a) || Be(a)); ++c)
      r.literalComparison(a),
        Bt("(2/4) Evaluating", n, s, xr(a)),
        r.conditionalExpression(a),
        Bt("(3/4) Evaluating", n, s, xr(a)),
        r.math(a),
        Bt("(4/4) Evaluating", n, s, xr(a));
    if (!ue(a) && !Be(a))
      throw new Error(
        "Failed to evaluate assignment expression, ie is not a numeric value"
      );
    Bt("(4/4) Evaluated", n, s, xr(a));
    let u = Ne(a);
    Km(t, n, s, u),
      Bt(`stack[${n}] = ${t.get(n)}`),
      Bt("=".repeat(32)),
      (i.type = "EmptyStatement");
  }
  return e;
}
var Yn = class extends me {
  constructor(e) {
    super("JSCControlFlow", e);
  }
  deflatten(e) {
    function r(i) {
      let n = e.scopeManager.acquire(i);
      if (!n || !de(i.body)) return;
      let s = i.body.body.filter((a) => a.type === "WhileStatement");
      for (let a of s) {
        if (
          (e.log("Found while statement"),
          !$e(a.test) || (!ue(a.test.right) && !Be(a.test.right)))
        )
          continue;
        let u = new Map(),
          c = a.test,
          m = !1;
        for (; $e(c); )
          (m = c.operator === "+"),
            G(c.left) && u.set(c.left.name, c.left.start),
            G(c.right) && u.set(c.right.name, c.right.start),
            (c = c.left);
        if (!m) continue;
        for (let [C, v] of u) {
          let S = n.references.find((T) => T.identifier.range[0] === v);
          if (
            !S ||
            !S.resolved ||
            S.resolved.defs.length === 0 ||
            S.resolved.defs[0].type !== "Variable"
          )
            continue;
          let A = S.resolved.defs[0];
          !A.node.init ||
            (!ue(A.node.init) && !Be(A.node.init)) ||
            ((A.parent.declarations = A.parent.declarations.filter(
              (T) =>
                T.range[0] !== A.node.range[0] && T.range[1] !== A.node.range[1]
            )),
            u.set(C, Ne(A.node.init)));
        }
        let d = Ne(a.test.right);
        if ((e.log(u, d), !de(a.body))) continue;
        let E = a.body.body[a.body.body.length - 1];
        if (!gr(E) || !G(E.discriminant)) continue;
        let y = E.discriminant.start,
          x = n.references.find((C) => C.identifier.range[0] === y);
        if (
          !x ||
          !x.resolved ||
          x.resolved.defs.length === 0 ||
          x.resolved.defs[0].type !== "Variable"
        )
          continue;
        let b = x.resolved.defs[0];
        if (!b.node.init || !$e(b.node.init)) continue;
        let w = E.cases.length,
          _ = 0,
          O = b.node.init,
          L = a.test.left,
          R = [];
        for (;;) {
          if (_ > w)
            throw new Error(
              `JSconfuser control flow switch calculation failed (iter=${_}>maxLoops=${w})`
            );
          e.log(`Iteration #${_ + 1}/${w + 1}`);
          let C = zf(u, L);
          if (C === d) {
            e.log("Switch calculation end", C, "===", d, "stack =", u);
            break;
          }
          let v = zf(u, O),
            S = ` (whileState = ${C}, state = ${v}, stack = ${JSON.stringify(
              u
            )})`,
            A = E.cases.find((P) => P.test && Ne(P.test) === v);
          if (!A) throw new Error("Switch case not found" + S);
          if (A.consequent.length !== 2)
            throw new Error('Switch case is not of "2" length' + S);
          if (A.consequent[1].type !== "BreakStatement")
            throw new Error(
              "Switch case consequent[1] is not a BreakStatement" + S
            );
          if (!Ve(A.consequent[0]))
            throw new Error(
              "Switch case consequent[0] is not an ExpressionStatement" + S
            );
          if (!it(A.consequent[0].expression))
            throw new Error(
              "Switch case consequent[0]<ExpressionStatement>.expression is not a UnaryExpression" +
                S
            );
          if (!_t(A.consequent[0].expression.argument))
            throw new Error(
              "Switch case consequent[0]<ExpressionStatement>.expression<UnaryExpression> is not a SequenceExpression" +
                S
            );
          let T = A.consequent[0].expression.argument;
          Qm(u, T),
            (T.expressions = T.expressions.filter(
              (P) => P.type !== "EmptyStatement"
            )),
            R.push(T.expressions),
            e.log("new stack =", u),
            _++;
        }
        H(a, { type: "SequenceExpression", expressions: R.flat() });
      }
    }
    return (
      V(e.ast, {
        FunctionDeclaration: r,
        FunctionExpression: r,
        ArrowFunctionExpression: r,
      }),
      this
    );
  }
  fixSwitch(e) {
    function r(i) {
      let n = e.scopeManager.acquire(i);
      if (!n) return;
      let s = i.body.body.filter((a) => gr(a));
      for (let a of s) {
        if (!G(a.discriminant)) continue;
        let u = a.discriminant.name,
          c = n.variables.find((w) => w.name === u);
        if (!c || c.defs.length === 0 || c.defs[0].type !== "Variable")
          continue;
        let m = c.defs[0];
        if (!m.node.init || !$e(m.node.init)) continue;
        let d = m.node.init;
        if (!a.cases.every((w) => w.test && (Be(w.test) || ue(w.test))))
          continue;
        let E = 0,
          y = "*",
          x = 0,
          b = "+";
        if (
          !!$e(d.left) &&
          !(!Be(d.right) && !ue(d.right)) &&
          !(!Be(d.left.right) && !ue(d.left.right)) &&
          !!G(d.left.left)
        ) {
          (E = Ne(d.left.right)),
            (y = Wf(d.left.operator)),
            (x = Ne(d.right)),
            (b = Wf(d.operator));
          for (let w of a.cases) {
            let _ = Ne(w.test);
            (_ = _i(_i(_, b, x), y, E)),
              H(w.test, { type: "Literal", value: _ });
          }
          (a.discriminant.name = d.left.left.name),
            (m.parent.declarations = m.parent.declarations.filter(
              (w) =>
                w.range[0] !== m.node.range[0] && w.range[1] !== m.node.range[1]
            ));
        }
      }
    }
    return V(e.ast, { FunctionDeclaration: r, FunctionExpression: r }), this;
  }
  transform(e) {
    return ye(this, null, function* () {
      this.fixSwitch(e).deflatten(e);
    });
  }
};
var Bi = class {
  constructor(e, r, i, n) {
    this.shiftedArrays = 0;
    this.stringArrays = [];
    this.stringDecoders = [];
    this.stringDecoderReferences = [];
    this.controlFlowStorageNodes = new Map();
    this.removeGarbage = !0;
    this.enableLog = !0;
    this.hash = 0;
    (this.ast = e),
      (this.transformers = this.buildTransformerList(r)),
      (this.source = n),
      (this.scopeManager = Nf(this.ast, {
        sourceType: i ? "module" : "script",
      }));
  }
  log(e, ...r) {
    !this.enableLog || console.log(e, ...r);
  }
  buildTransformerList(e) {
    let r = [];
    for (let [i, n] of e)
      switch (i.toLowerCase()) {
        case "controlflow":
          r.push(new Mn(n));
          break;
        case "desequence":
          r.push(new Vn(n));
          break;
        case "literalmap":
          r.push(new Gn(n));
          break;
        case "memberexpressioncleaner":
          r.push(new qn(n));
          break;
        case "simplify":
          r.push(new Ut(n));
          break;
        case "stringdecoder":
          r.push(new Un(n));
          break;
        case "deadcode":
          r.push(new Wn(n));
          break;
        case "demangle":
          r.push(new zn(n));
          break;
        case "arraymap":
          r.push(new $n(n));
          break;
        case "rename":
          r.push(new Hn(n));
          break;
        case "jsc-calculator":
          r.push(new Kn(n));
          break;
        case "jsc-controlflow":
          r.push(new Yn(n));
          break;
        default:
          throw new TypeError(
            `Transformer "${i}" is invalid, it does not exist`
          );
      }
    return r;
  }
};
function Jm(t) {
  let e = 2493774369,
    r = t.length;
  for (; r; ) e = (e * 33) ^ t.charCodeAt(--r);
  return e >>> 0;
}
var Hf = class {
  constructor() {
    this.defaultOptions = {
      ecmaVersion: "latest",
      transformChainExpressions: !0,
      customTransformers: [],
      rename: !1,
      sourceType: "both",
      loose: !1,
    };
  }
  buildOptions(e = {}) {
    return Yr(Yr({}, this.defaultOptions), e);
  }
  buildAcornOptions(e) {
    return { ecmaVersion: e.ecmaVersion, sourceType: e.sourceType, ranges: !0 };
  }
  parse(e, r, i) {
    let n = i.loose ? Cs : Ss;
    if (r.sourceType !== "both") return n.parse(e, r);
    try {
      return (r.sourceType = i.sourceType = "module"), n.parse(e, r);
    } catch (s) {
      return (r.sourceType = i.sourceType = "script"), n.parse(e, r);
    }
  }
  deobfuscateNode(e, r) {
    let i = this.buildOptions(r),
      n = [
        ["Simplify", {}],
        ["MemberExpressionCleaner", {}],
        ["LiteralMap", {}],
        ["DeadCode", {}],
        ["Demangle", {}],
        ["StringDecoder", {}],
        ["Simplify", {}],
        ["MemberExpressionCleaner", {}],
        ["Desequence", {}],
        ["ControlFlow", {}],
        ["Desequence", {}],
        ["MemberExpressionCleaner", {}],
        ["Simplify", {}],
        ["DeadCode", {}],
        ["Simplify", {}],
        ["DeadCode", {}],
      ],
      s = new Bi(
        e,
        i.customTransformers.length > 0 ? i.customTransformers : n,
        i.sourceType === "module"
      );
    for (let a of s.transformers)
      console.log("Running", a.name, "transformer"), a.transform(s);
    if (i.rename) {
      let a = ja.default.generate(s.ast, { sourceMapWithCode: !0 }).code,
        u = this.parse(a, this.buildAcornOptions(i), i);
      (s = new Bi(u, [["Rename", {}]], i.sourceType === "module")),
        (s.hash = Jm(a));
      for (let c of s.transformers)
        console.log("(rename) Running", c.name, "transformer"), c.transform(s);
    }
    return s.ast;
  }
  deobfuscateSource(e, r) {
    let i = this.buildOptions(r),
      n = this.buildAcornOptions(i),
      s = this.parse(e, n, i);
    return (
      (s = this.deobfuscateNode(s, i)),
      (e = ja.default.generate(s, { sourceMapWithCode: !0 }).code),
      e
    );
  }
};

const Deobfuscator = Hf, Transformer = me;
